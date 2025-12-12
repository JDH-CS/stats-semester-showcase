import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, FlaskConical, Database, ArrowRight } from "lucide-react";

/*
 * Página de listados de encuestas modificada para incluir la encuesta
 * sobre el panorama digital de la Universidad de Panamá. Se mantiene
 * el diseño original y se añade un nuevo objeto al arreglo de encuestas
 * que redirige a la ruta `/encuestas/panorama`.
 */

const surveys = [
  {
    id: "internet",
    title: "Puntos de Acceso a Internet en Panamá",
    description:
      "Análisis sobre la conectividad y acceso a internet en diferentes zonas de Panamá.",
    icon: Globe,
    href: "/encuestas/internet",
  },
  {
    id: "cuantica",
    title: "Computación Cuántica en Panamá",
    description:
      "Estudio sobre el conocimiento e impacto de la computación cuántica en la población panameña.",
    icon: FlaskConical,
    href: "/encuestas/cuantica",
  },
  {
    id: "panorama",
    title: "Panorama Digital de la Universidad de Panamá",
    description:
      "Accesibilidad y utilización del internet (encuesta).",
    icon: Database,
    href: "/encuestas/panorama",
  },
];

const Encuestas = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background section-padding">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in-up">
            Encuestas Realizadas
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Investigaciones de campo realizadas durante el curso
          </p>
        </div>
      </section>

      {/* Surveys Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {surveys.map((survey, index) => (
              <Link
                key={survey.id}
                to={survey.href}
                className="block group"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${index * 150}ms forwards`,
                }}
              >
                <Card className="h-full hover-lift transition-all duration-300 group-hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary transition-colors">
                        <survey.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                        {survey.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body mb-4">
                      {survey.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>Ver detalles</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Encuestas;