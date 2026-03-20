import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Button>
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="text-muted-foreground mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Wie erfassen wir Ihre Daten?</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
              es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Hosting</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Externes Hosting</h3>
            <p className="text-muted-foreground mb-4">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
              personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
              des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen,
              Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
              sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="text-muted-foreground mb-4">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
              sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
              professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Datenschutz</h3>
            <p className="text-muted-foreground mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-muted-foreground mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-muted-foreground mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-muted-foreground mb-4">
              feyro.io<br />
              [Ihre Adresse]<br />
              [PLZ und Ort]
            </p>
            <p className="text-muted-foreground mb-4">
              Telefon: +49 (0) 123 456 789<br />
              E-Mail: hi@feyro.io
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Kontaktformular</h3>
            <p className="text-muted-foreground mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-muted-foreground mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
              gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Ihre Rechte</h2>
            <p className="text-muted-foreground mb-4">
              Sie haben jederzeit das Recht auf:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger oder unvollständiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten (Art. 21 DSGVO)</li>
              <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Supabase</h2>
            <p className="text-muted-foreground mb-4">
              Wir nutzen Supabase für die Speicherung und Verarbeitung von Kontaktanfragen. Supabase
              ist ein Dienst der Supabase Inc., der DSGVO-konform betrieben wird.
            </p>
            <p className="text-muted-foreground mb-4">
              Weitere Informationen zum Datenschutz bei Supabase finden Sie unter:{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://supabase.com/privacy
              </a>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Datenschutz;
