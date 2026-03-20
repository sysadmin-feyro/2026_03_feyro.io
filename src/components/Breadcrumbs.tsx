import { Home, ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  // Generate JSON-LD schema for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://feyro.io/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href && { "item": `https://feyro.io${item.href}` })
      }))
    ]
  };

  return (
    <>
      {/* JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Visual Breadcrumbs */}
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center gap-2 text-sm text-muted-foreground ${className}`}
      >
        <a 
          href="/" 
          className="flex items-center gap-1 hover:text-primary transition-colors"
          aria-label="Zur Startseite"
        >
          <Home className="w-4 h-4" aria-hidden="true" />
          <span className="sr-only sm:not-sr-only">Startseite</span>
        </a>
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            {item.href ? (
              <a 
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span aria-current="page" className="text-foreground font-medium">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};

export default Breadcrumbs;
