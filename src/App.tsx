import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Conceptos from "./pages/Conceptos";
import Encuestas from "./pages/Encuestas";
import EncuestaInternet from "./pages/EncuestaInternet";
import EncuestaCuantica from "./pages/EncuestaCuantica";
import Graficos from "./pages/Graficos";
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
          <Route path="/about" element={<About />} />
          <Route path="/conceptos" element={<Conceptos />} />
          <Route path="/encuestas" element={<Encuestas />} />
          <Route path="/encuestas/internet" element={<EncuestaInternet />} />
          <Route path="/encuestas/cuantica" element={<EncuestaCuantica />} />
          <Route path="/graficos" element={<Graficos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
