import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Shield, TrendingUp } from "lucide-react";
import {
  applyConsentPreferences,
  readConsentPreferences,
} from "@/lib/consent";

interface CookieSettingsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CookieSettings = ({ open, onOpenChange }: CookieSettingsProps) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const { analytics } = readConsentPreferences();
    setAnalyticsEnabled(analytics);
  }, [open]);

  const handleSave = () => {
    applyConsentPreferences({ analytics: analyticsEnabled });
    onOpenChange(false);
  };

  const handleAcceptAll = () => {
    setAnalyticsEnabled(true);
    applyConsentPreferences({ analytics: true });
    onOpenChange(false);
  };

  const handleDeclineAll = () => {
    setAnalyticsEnabled(false);
    applyConsentPreferences({ analytics: false });
    onOpenChange(false);
  };

  const cookieCategories = [
    {
      id: "necessary",
      icon: Shield,
      title: "Notwendige Cookies",
      description: "Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.",
      enabled: true,
      locked: true,
    },
    {
      id: "analytics",
      icon: TrendingUp,
      title: "Analyse & Performance",
      description: "Helfen uns zu verstehen, wie Besucher mit der Website interagieren. Wir nutzen dafür Matomo – selbst gehostet in Deutschland, ohne US-Dienste.",
      enabled: analyticsEnabled,
      locked: false,
      onChange: setAnalyticsEnabled,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Cookie-Einstellungen</DialogTitle>
          <DialogDescription>
            Wir verwenden Cookies ausschließlich für technisch notwendige Funktionen und
            zur anonymen Analyse des Website-Traffics via Matomo (selbst gehostet in Deutschland).
            Keine Weitergabe an Dritte, keine US-Dienste.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {cookieCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Label htmlFor={category.id} className="text-base font-semibold">
                          {category.title}
                        </Label>
                        <Switch
                          id={category.id}
                          checked={category.enabled}
                          onCheckedChange={category.onChange ?? (() => {})}
                          disabled={category.locked}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
                {category.id !== "analytics" && <Separator />}
              </div>
            );
          })}
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={handleDeclineAll}
            className="w-full sm:w-auto"
          >
            Nur notwendige
          </Button>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              variant="secondary"
              onClick={handleSave}
              className="flex-1 sm:flex-none"
            >
              Auswahl speichern
            </Button>
            <Button
              variant="hero"
              onClick={handleAcceptAll}
              className="flex-1 sm:flex-none"
            >
              Alle akzeptieren
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettings;
