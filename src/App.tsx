import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HomeMoving from "./pages/services/HomeMoving";
import OfficeMoving from "./pages/services/OfficeMoving";
import Packing from "./pages/services/Packing";
import Storage from "./pages/services/Storage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/home-moving" element={<HomeMoving />} />
          <Route path="/services/office-moving" element={<OfficeMoving />} />
          <Route path="/services/packing" element={<Packing />} />
          <Route path="/services/storage" element={<Storage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
