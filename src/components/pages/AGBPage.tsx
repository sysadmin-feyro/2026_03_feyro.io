import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <a href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Button>
        </a>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Geltungsbereich</h2>
            <p className="text-muted-foreground mb-4">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen feyro.io
              (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend "Auftraggeber") über die
              Erbringung von Webdesign-Dienstleistungen, Website-Relaunches und damit verbundenen
              Leistungen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Vertragsschluss</h2>
            <p className="text-muted-foreground mb-4">
              2.1 Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht
              ausdrücklich als verbindlich gekennzeichnet sind.
            </p>
            <p className="text-muted-foreground mb-4">
              2.2 Der Vertrag kommt durch die schriftliche Auftragsbestätigung des Auftragnehmers oder
              durch die Aufnahme der Arbeiten zustande.
            </p>
            <p className="text-muted-foreground mb-4">
              2.3 Änderungen und Ergänzungen des Vertrages bedürfen der Schriftform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Leistungsumfang</h2>
            <p className="text-muted-foreground mb-4">
              3.1 Der Auftragnehmer erbringt Dienstleistungen im Bereich Webdesign, Website-Relaunch,
              KI-gestützte Optimierung und DSGVO-konforme Implementierung.
            </p>
            <p className="text-muted-foreground mb-4">
              3.2 Der konkrete Leistungsumfang ergibt sich aus dem individuellen Angebot bzw. der
              Auftragsbestätigung.
            </p>
            <p className="text-muted-foreground mb-4">
              3.3 Änderungswünsche des Auftraggebers werden nach Aufwand berechnet, sofern nichts
              anderes vereinbart wurde.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Mitwirkungspflichten des Auftraggebers</h2>
            <p className="text-muted-foreground mb-4">
              4.1 Der Auftraggeber stellt alle für die Durchführung des Projekts notwendigen
              Informationen, Inhalte und Zugangsdaten rechtzeitig zur Verfügung.
            </p>
            <p className="text-muted-foreground mb-4">
              4.2 Der Auftraggeber prüft Zwischen- und Endergebnisse unverzüglich und teilt etwaige
              Änderungswünsche schriftlich mit.
            </p>
            <p className="text-muted-foreground mb-4">
              4.3 Verzögerungen durch nicht rechtzeitige Mitwirkung des Auftraggebers berechtigen den
              Auftragnehmer zur Verlängerung der Lieferfristen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Vergütung und Zahlung</h2>
            <p className="text-muted-foreground mb-4">
              5.1 Die Vergütung richtet sich nach der jeweiligen Auftragsbestätigung. Alle Preise
              verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
            </p>
            <p className="text-muted-foreground mb-4">
              5.2 Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung
              fällig, sofern nichts anderes vereinbart wurde.
            </p>
            <p className="text-muted-foreground mb-4">
              5.3 Bei Projekten mit längerer Laufzeit können Abschlagszahlungen vereinbart werden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Urheberrecht und Nutzungsrechte</h2>
            <p className="text-muted-foreground mb-4">
              6.1 Alle vom Auftragnehmer erstellten Werke (Designs, Code, Konzepte) sind urheberrechtlich
              geschützt.
            </p>
            <p className="text-muted-foreground mb-4">
              6.2 Nach vollständiger Bezahlung erhält der Auftraggeber ein einfaches, zeitlich und
              räumlich unbegrenztes Nutzungsrecht an den vertraglich vereinbarten Werken.
            </p>
            <p className="text-muted-foreground mb-4">
              6.3 Eine Weitergabe oder Veröffentlichung von Entwürfen, Konzepten und Zwischenergebnissen
              ist ohne Zustimmung des Auftragnehmers nicht gestattet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Gewährleistung</h2>
            <p className="text-muted-foreground mb-4">
              7.1 Der Auftragnehmer gewährleistet, dass die erbrachten Leistungen zum Zeitpunkt der
              Abnahme den vereinbarten Anforderungen entsprechen.
            </p>
            <p className="text-muted-foreground mb-4">
              7.2 Mängel sind unverzüglich schriftlich zu rügen. Der Auftragnehmer hat zunächst das
              Recht zur Nachbesserung.
            </p>
            <p className="text-muted-foreground mb-4">
              7.3 Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Haftung</h2>
            <p className="text-muted-foreground mb-4">
              8.1 Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des
              Körpers oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.
            </p>
            <p className="text-muted-foreground mb-4">
              8.2 Im Übrigen haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten
              (Kardinalpflichten) und auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Vertraulichkeit</h2>
            <p className="text-muted-foreground mb-4">
              Beide Vertragsparteien verpflichten sich, alle im Rahmen der Zusammenarbeit bekannt
              gewordenen vertraulichen Informationen streng vertraulich zu behandeln und nur im Rahmen
              des Projekts zu verwenden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Schlussbestimmungen</h2>
            <p className="text-muted-foreground mb-4">
              10.1 Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className="text-muted-foreground mb-4">
              10.2 Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz des Auftragnehmers.
            </p>
            <p className="text-muted-foreground mb-4">
              10.3 Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der
              übrigen Bestimmungen unberührt.
            </p>
          </section>

          <section className="mb-8">
            <p className="text-muted-foreground">
              <strong>Stand:</strong> {new Date().toLocaleDateString("de-DE")}
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default AGB;
