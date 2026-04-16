# Prompt: React/Vite → Astro SSG Migration + SEO-Optimierung

Migriere dieses React/Vite/TypeScript/Tailwind/shadcn-Projekt zu Astro SSG mit vollständiger SEO-Optimierung.

---

## 1. Astro installieren

```bash
npm install astro @astrojs/react @astrojs/tailwind @astrojs/sitemap --legacy-peer-deps
npm install vite@^7 --save-dev --legacy-peer-deps
```

Entferne `vite` und `@vitejs/plugin-react-swc` aus devDependencies. Füge hinzu:
```json
"overrides": { "vite": "^7" }
```

Skripte in `package.json`:
```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview"
}
```

---

## 2. `astro.config.mjs` erstellen

```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://DEINE-DOMAIN.de',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  output: 'static',
});
```

---

## 3. `tsconfig.json` aktualisieren

```json
{
  "extends": "astro/tsconfigs/base",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] },
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "skipLibCheck": true,
    "strictNullChecks": false
  }
}
```

---

## 4. `tailwind.config.ts` Content-Pfade

```ts
content: ["./src/**/*.{astro,ts,tsx,js,jsx}"]
```

---

## 5. SSR-Guards für Browser-APIs

Alle Dateien die `localStorage`, `document` oder `window` direkt aufrufen brauchen Guards:

```ts
// localStorage
typeof localStorage !== "undefined" ? localStorage.getItem("key") : null

// document
typeof document !== "undefined" && document.cookie.includes("...")

// window
typeof window !== "undefined" && window._paq
```

Supabase-Client besonders beachten:
```ts
// src/integrations/supabase/client.ts
auth: {
  storage: typeof localStorage !== "undefined" ? localStorage : undefined,
}
```

Typ-only-Importe aus React fixen:
```ts
import type { ReactNode } from "react"; // nicht: import { ReactNode }
```

---

## 6. `src/layouts/BaseLayout.astro` erstellen

Vollständiges SEO-Layout mit statischen JSON-LD Schemas:

```astro
---
import "../index.css";
import Providers from "../components/Providers";
import MatomoAnalytics from "../components/MatomoAnalytics";
import CookieBanner from "../components/CookieBanner";

interface Props {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  faqSchema?: { question: string; answer: string }[];
  breadcrumbs?: { name: string; url: string }[];
}

const { title, description, canonical, ogImage, noindex, faqSchema, breadcrumbs } = Astro.props;

// Schemas als JSON-Strings (wichtig: nicht inline {} in Astro-Templates!)
const schemaWebSite = JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", ... });
const schemaOrganization = JSON.stringify({ ... });
const schemaProfessionalService = JSON.stringify({ ... });
const schemaFAQ = faqSchema ? JSON.stringify({ "@type": "FAQPage", "mainEntity": faqSchema.map(...) }) : null;
const schemaBreadcrumb = breadcrumbs ? JSON.stringify({ "@type": "BreadcrumbList", ... }) : null;
---

<!doctype html>
<html lang="de">
  <head>
    <!-- DNS Prefetch & Preconnect -->
    <link rel="preconnect" href="https://SUPABASE-URL.supabase.co" />
    <link rel="dns-prefetch" href="https://analytics.DEINE-DOMAIN.de" />

    <!-- Font Preload (nur kritische Schriften above-the-fold) -->
    <link rel="preload" href="/fonts/hauptschrift-latin.woff2" as="font" type="font/woff2" crossorigin />

    <!-- Fonts -->
    <link rel="stylesheet" href="/fonts/fonts.css" />

    <!-- Primary Meta -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={noindex
      ? "noindex, nofollow"
      : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
    <link rel="canonical" href={canonical} />

    <!-- hreflang -->
    <link rel="alternate" hreflang="de" href={canonical} />
    <link rel="alternate" hreflang="x-default" href={canonical} />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Alt-Text hier" />
    <meta property="og:url" content={canonical} />
    <meta property="og:locale" content="de_DE" />
    <meta property="og:site_name" content="SEITENNAME" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />

    <!-- Favicons -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" href="/favicon.png" sizes="512x512" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
    <meta name="theme-color" content="#BRAND-FARBE" />

    <!-- Sitemap -->
    <link rel="sitemap" href="/sitemap-index.xml" />

    <!-- Schemas: immer via set:html übergeben, nie inline {} -->
    <script type="application/ld+json" set:html={schemaWebSite} />
    <script type="application/ld+json" set:html={schemaOrganization} />
    <script type="application/ld+json" set:html={schemaProfessionalService} />
    {schemaFAQ && <script type="application/ld+json" set:html={schemaFAQ} />}
    {schemaBreadcrumb && <script type="application/ld+json" set:html={schemaBreadcrumb} />}
  </head>
  <body>
    <slot />
    <Providers client:load />
    <MatomoAnalytics client:only="react" />
    <CookieBanner client:only="react" />
  </body>
</html>
```

**Wichtig:** JSON-LD Schemas NIEMALS inline als `<script>{...}</script>` schreiben — Astro parst `{}` als Template-Ausdrücke. Immer `set:html={JSON.stringify({...})}` verwenden.

---

## 7. `src/components/Providers.tsx` erstellen

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const queryClient = new QueryClient();

export default function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
```

---

## 8. React-Seiten verschieben

React-Seiten aus `src/pages/` nach `src/components/pages/` verschieben (Astro nutzt `src/pages/` für File-based Routing). Dabei `<Link to="/">` durch `<a href="/">` ersetzen.

---

## 9. Astro-Seiten erstellen

**`src/pages/index.astro`:**
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
// Alle Sections importieren
const faqs = [ /* FAQ-Daten hier */ ];
---
<BaseLayout title="..." description="..." canonical="https://..." faqSchema={faqs}>
  <div class="min-h-screen pb-20 lg:pb-0">
    <Navigation client:load />
    <main id="main-content">
      <HeroSection client:load />
      <MobileStickyCTA client:load />
      <WhyFeyroSection client:visible />
      <ServicesSection client:visible />
      <ProcessSection client:visible />
      <FAQSection client:visible />
      <AboutSection client:visible />
      <ContactSection client:visible />
    </main>
    <Footer client:visible />
  </div>
</BaseLayout>
```

**`client:*` Direktiven:**
- `client:load` → Navigation, Hero, mobile CTA (sofort interaktiv)
- `client:visible` → alle Below-fold-Sections (lazy hydration)
- `client:only="react"` → Browser-only (MatomoAnalytics, CookieBanner)

**Unterseiten mit BreadcrumbList + noindex:**
```astro
<BaseLayout
  title="Impressum – Angaben gemäß § 5 TMG | SEITENNAME"
  description="..."
  canonical="https://DOMAIN/impressum"
  noindex={true}
  breadcrumbs={[
    { name: "Startseite", url: "https://DOMAIN/" },
    { name: "Impressum", url: "https://DOMAIN/impressum" }
  ]}
>
  <ImpressumPage />
</BaseLayout>
```

---

## 10. `public/robots.txt` aktualisieren

```
User-agent: *
Allow: /
Disallow: /404

Sitemap: https://DEINE-DOMAIN.de/sitemap-index.xml
```

Hinweis: Astro generiert `sitemap-index.xml`, nicht `sitemap.xml`.

---

## 11. Alte Vite-Dateien löschen

```bash
rm vite.config.ts index.html src/main.tsx src/App.tsx
```

---

## 12. `.claude/launch.json` für Dev-Server

```json
{
  "version": "0.0.1",
  "configurations": [{
    "name": "Dev Server",
    "runtimeExecutable": "/bin/zsh",
    "runtimeArgs": ["-c", "export PATH=/Users/USER/.nvm/versions/node/vX.X.X/bin:$PATH && npm run dev -- --port 5173"],
    "port": 5173
  }]
}
```

---

## 13. Favicon erstellen (SVG + PNG)

```bash
node -e "
const sharp = require('sharp');
const svg = require('fs').readFileSync('public/favicon.svg');
Promise.all([
  sharp(svg).resize(512,512).png().toFile('public/favicon.png'),
  sharp(svg).resize(180,180).png().toFile('public/apple-touch-icon.png'),
]).then(() => console.log('done'));
"
```

---

## Checkliste nach Migration

- [ ] `npm run build` ohne Fehler
- [ ] Alle Schemas in `dist/index.html` vorhanden: `grep '"@type"' dist/index.html | sort | uniq`
- [ ] FAQPage-Schema statisch im `<head>` (nicht per useEffect injiziert)
- [ ] `sitemap-index.xml` in `dist/` generiert
- [ ] `robots.txt` zeigt auf `sitemap-index.xml`
- [ ] Font-Preload-Dateinamen stimmen mit tatsächlichen Dateien überein
- [ ] Keine Konsolen-Fehler im Browser
- [ ] Alle Unterseiten: eigener `<title>`, `<meta description>`, `noindex` wo nötig
- [ ] `client:only="react"` für alle Browser-API-abhängigen Komponenten
