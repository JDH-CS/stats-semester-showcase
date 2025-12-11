import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("contenido-principal");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"
        style={{ background: "var(--hero-gradient)" }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg md:text-xl font-body font-medium opacity-90 mb-4">
              Universidad de Panamá · FIEC · II Semestre 2025
            </p>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Probabilidad y Estadística
          </h1>
          
          <p 
            className="text-lg md:text-xl lg:text-2xl font-body font-light opacity-90 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Portal académico para la visualización y difusión de los temas aprendidos durante el semestre
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToContent}
              className="font-heading font-semibold text-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Explorar Contenido
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold"
              asChild
            >
              <a href="/about">Conocer al Equipo</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToContent}
        >
          <ArrowDown className="h-6 w-6 opacity-70" />
        </div>
      </div>
    </section>
  );
};
