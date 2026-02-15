import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ConventionalNDT from "./pages/ConventionalNDT";
import AdvancedNDT from "./pages/AdvancedNDT";
import DrillingOCTG from "./pages/DrillingOCTG";
import PlantInspection from "./pages/PlantInspection";
import ThirdPartyMonitoring from "./pages/ThirdPartyMonitoring";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/conventional-ndt" element={<ConventionalNDT />} />
          <Route path="/advanced-ndt" element={<AdvancedNDT />} />
          <Route path="/drilling-octg" element={<DrillingOCTG />} />
          <Route path="/plant-inspection" element={<PlantInspection />} />
          <Route path="/third-party-monitoring" element={<ThirdPartyMonitoring />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
