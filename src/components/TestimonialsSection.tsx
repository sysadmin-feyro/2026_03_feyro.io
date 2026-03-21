import { Star, Quote } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Michael Müller",
      role: "Geschäftsführer",
      company: "Müller Dachdeckerei GmbH",
      content: "Seit dem Relaunch mit feyro.io haben sich unsere Online-Anfragen verdreifacht. Die Zusammenarbeit war professionell und das Ergebnis übertrifft alle Erwartungen. Endlich eine Website, die uns neue Kunden bringt!",
      rating: 5
    },
    {
      id: "2",
      name: "Dr. Sandra Schmidt",
      role: "Inhaberin",
      company: "Hausarztpraxis am Markt",
      content: "Die Online-Terminbuchung hat unseren Praxisalltag revolutioniert. Weniger Telefonanrufe, zufriedenere Patienten. Die DSGVO-konforme Umsetzung war mir besonders wichtig – perfekt gelöst!",
      rating: 5
    },
    {
      id: "3",
      name: "Thomas Wagner",
      role: "Inhaber",
      company: "KFZ Wagner Meisterbetrieb",
      content: "Früher haben uns Kunden nur über Empfehlungen gefunden. Jetzt sind wir bei Google ganz vorne dabei und die Buchungsanfragen kommen automatisch rein. Beste Investition fürs Geschäft!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Das sagen unsere <span className="text-primary">Kunden</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stimmen aus Projekten, in denen digitale Auftritte klarer, moderner und wirksamer werden sollten.
          </p>
        </ScrollAnimation>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Kundenbewertungen">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation 
              key={testimonial.id} 
              delay={index * 0.15}
              className="h-full"
            >
              <div className="h-full bg-card rounded-2xl border border-border p-8 shadow-card hover:shadow-brand transition-all duration-300 flex flex-col" role="listitem">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-primary/30" aria-hidden="true" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} von 5 Sternen`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Stats Bar */}
        <ScrollAnimation delay={0.4} className="mt-12 sm:mt-16">
          <div className="bg-primary/5 rounded-2xl border border-primary/20 p-4 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Tage für schnelle Relaunchs möglich</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">3</div>
                <div className="text-xs sm:text-sm text-muted-foreground">klare Leistungsbereiche</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">DSGVO-konforme Basis</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">1</div>
                <div className="text-xs sm:text-sm text-muted-foreground">direkter Ansprechpartner</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TestimonialsSection;
