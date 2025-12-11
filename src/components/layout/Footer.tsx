import { Link } from "react-router-dom";
import logoFiec from "@/assets/logo-fiec.png";
import logoUp from "@/assets/logo-up.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logos e Instituciones */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src={logoUp} alt="Universidad de Panamá" className="h-16 w-auto" />
              <img src={logoFiec} alt="FIEC" className="h-16 w-auto" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground">
                Universidad de Panamá
              </h3>
              <p className="text-sm text-muted-foreground">
                Facultad de Informática, Electrónica y Comunicación
              </p>
            </div>
          </div>

          {/* Créditos */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-foreground">Créditos</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Profesora:</span>{" "}
                Milagros García
              </p>
              <p>
                <span className="font-medium text-foreground">Asignatura:</span>{" "}
                Probabilidad y Estadística
              </p>
              <p>
                <span className="font-medium text-foreground">Período:</span>{" "}
                II Semestre 2025
              </p>
            </div>
          </div>

          {/* Autores */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-foreground">Autores</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Jade Gutiérrez</p>
              <p>Juan Diego Hernández</p>
            </div>
            <div className="pt-4">
              <Link
                to="/about"
                className="text-sm font-medium text-primary hover:underline"
              >
                Conocer más sobre el equipo →
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Probabilidad y Estadística FIEC. Universidad de Panamá.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
