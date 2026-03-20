import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import LazyImage from "./LazyImage";

// Import project images
import dachdeckerImage from "@/assets/project-dachdecker.jpg";
import arztpraxisImage from "@/assets/project-arztpraxis.jpg";
import autowerkstattImage from "@/assets/project-autowerkstatt.jpg";

interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  image: string;
  tags: string[];
}

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number>(0);

  const projects: Project[] = [
    {
      id: "dachdecker",
      title: "Moderne Website für Dachdeckerbetrieb",
      client: "Dachdecker Meisterbetrieb Müller",
      industry: "Dachdecker",
      challenge: "Keine Online-Präsenz, Kunden fanden den Betrieb nur über Mundpropaganda. Fehlende digitale Sichtbarkeit führte zu verpassten Aufträgen.",
      solution: "Moderne, vertrauensvolle Website mit umfangreicher Referenzgalerie, klarer Service-Übersicht, Online-Anfrage-Formular und Local SEO Optimierung für maximale regionale Sichtbarkeit.",
      results: [
        {
          metric: "Anfragen",
          value: "+250%",
          improvement: "250% mehr Anfragen"
        },
        {
          metric: "Local SEO",
          value: "Top 3",
          improvement: "Google Maps Ranking"
        },
        {
          metric: "Neukunden",
          value: "+45%",
          improvement: "45% mehr Neukunden"
        }
      ],
      image: dachdeckerImage,
      tags: ["Handwerk", "Local SEO", "B2C", "Referenzen"]
    },
    {
      id: "arztpraxis",
      title: "Digitale Transformation einer Arztpraxis",
      client: "Hausarztpraxis Dr. Schmidt",
      industry: "Arztpraxis",
      challenge: "Veraltete Website ohne Online-Terminbuchung, schlechte Mobile-Nutzbarkeit. Patienten mussten anrufen, was zu langen Wartezeiten am Telefon führte.",
      solution: "Responsive Relaunch mit integriertem Online-Buchungssystem, Patientenportal, Team-Vorstellung und DSGVO-konformer Umsetzung für maximale Patientenfreundlichkeit.",
      results: [
        {
          metric: "Online-Termine",
          value: "60/Monat",
          improvement: "Durchschnittlich 60 pro Monat"
        },
        {
          metric: "Telefonanrufe",
          value: "-40%",
          improvement: "40% weniger Anrufe"
        },
        {
          metric: "Mobile Traffic",
          value: "+180%",
          improvement: "180% mehr Mobile-Nutzer"
        }
      ],
      image: arztpraxisImage,
      tags: ["Gesundheit", "Booking", "B2C", "DSGVO"]
    },
    {
      id: "autowerkstatt",
      title: "Digitaler Showroom für Autowerkstatt",
      client: "KFZ Meisterbetrieb Wagner",
      industry: "Autowerkstatt",
      challenge: "Generische Website ohne Service-Transparenz, keine Online-Sichtbarkeit. Kunden wussten nicht, welche Leistungen angeboten werden.",
      solution: "Moderne Website mit interaktivem Service-Konfigurator, transparenter Preisübersicht, Kundenbewertungen und Online-Terminbuchung für maximale Kundenbindung.",
      results: [
        {
          metric: "Website-Anfragen",
          value: "+320%",
          improvement: "320% mehr Anfragen"
        },
        {
          metric: "Google-Bewertung",
          value: "4.8★",
          improvement: "4.8 Sterne Durchschnitt"
        },
        {
          metric: "Online-Buchungen",
          value: "+200%",
          improvement: "200% mehr Buchungen"
        }
      ],
      image: autowerkstattImage,
      tags: ["Automotive", "Konfigurator", "B2C", "Reviews"]
    }
  ];

  const project = projects[activeProject];

  return (
    <section id="projects" className="py-24 bg-gradient-subtle" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 id="projects-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="text-primary">Erfolgsgeschichten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Echte Projekte, messbare Ergebnisse. So haben wir anderen Unternehmen 
            geholfen, ihre Online-Präsenz zu transformieren.
          </p>
        </ScrollAnimation>

        {/* Project Tabs */}
        <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide" role="tablist" aria-label="Projektauswahl">
          {projects.map((proj, index) => (
            <button
              key={proj.id}
              onClick={() => setActiveProject(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 text-sm sm:text-base ${
                activeProject === index
                  ? "bg-primary text-primary-foreground shadow-brand"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border"
              }`}
              role="tab"
              aria-selected={activeProject === index}
              aria-controls={`project-panel-${proj.id}`}
              id={`project-tab-${proj.id}`}
            >
              {proj.industry}
            </button>
          ))}
        </div>

        {/* Active Project Display */}
        <div className="space-y-12" role="tabpanel" id={`project-panel-${project.id}`} aria-labelledby={`project-tab-${project.id}`}>
          {/* Project Header */}
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              {project.title}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {project.client}
            </p>
          </div>

          {/* Project Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Website Image */}
          <ScrollAnimation direction="left" className="lg:col-span-3">
            <div className="rounded-xl overflow-hidden border-2 border-primary/30 shadow-brand hover:shadow-glow transition-all duration-300">
              <LazyImage 
                src={project.image} 
                alt={`${project.client} - Moderne Website`}
                className="w-full h-auto"
              />
            </div>
          </ScrollAnimation>

          {/* Project Details */}
          <ScrollAnimation direction="right" delay={0.2} className="lg:col-span-2 space-y-6">
            {/* Challenge */}
            <div className="p-6 bg-card rounded-xl border border-border shadow-card">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-destructive">⚠️</span> Herausforderung
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 shadow-card">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-primary">✓</span> Lösung
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </ScrollAnimation>
        </div>

        {/* Results Metrics */}
        <ScrollAnimation delay={0.3}>
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <h4 className="text-2xl font-bold text-foreground mb-6 text-center">
              Messbare Ergebnisse
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((result, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-gradient-subtle rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    {result.metric}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {result.value}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-green-600 font-semibold text-sm">
                    <TrendingUp className="w-4 h-4" aria-hidden="true" />
                    <span>{result.improvement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-secondary/50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Bereit für deine Erfolgsgeschichte?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lass uns gemeinsam deine Website auf das nächste Level bringen. 
            Kostenlose Erstanalyse und unverbindliche Beratung.
          </p>
          <Button 
            variant="hero" 
            size="xl" 
            className="group"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            aria-label="Zur kostenlosen Website-Analyse navigieren"
          >
            Jetzt Website analysieren lassen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
