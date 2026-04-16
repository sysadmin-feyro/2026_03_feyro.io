import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export default function Providers() {
  return (
    <TooltipProvider>
      <Toaster />
    </TooltipProvider>
  );
}
