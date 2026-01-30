import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Globe } from "lucide-react";

const Index = () => {
  const handleEmailGHMC = () => {
    window.location.href = "mailto:ghmc@example.com?subject=Pothole%20Report";
  };

  const handleShareWhatsApp = () => {
    window.open("https://wa.me/?text=Check%20out%20Pothole%20Guard%20app", "_blank");
  };

  const handleOpenGHMCWebsite = () => {
    window.open("https://www.ghmc.gov.in", "_blank");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Title */}
        <h1 className="mb-12 text-3xl font-light tracking-wide text-foreground">
          Pothole Guard
        </h1>

        {/* Action Buttons */}
        <div className="w-full space-y-4">
          <Button
            variant="action"
            size="xl"
            onClick={handleEmailGHMC}
            className="gap-3"
          >
            <Mail className="h-5 w-5" />
            Email GHMC
          </Button>

          <Button
            variant="action"
            size="xl"
            onClick={handleShareWhatsApp}
            className="gap-3"
          >
            <MessageCircle className="h-5 w-5" />
            Share via WhatsApp
          </Button>

          <Button
            variant="action"
            size="xl"
            onClick={handleOpenGHMCWebsite}
            className="gap-3"
          >
            <Globe className="h-5 w-5" />
            Open GHMC Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
