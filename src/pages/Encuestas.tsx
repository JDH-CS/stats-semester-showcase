import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, FlaskConical, Database, ArrowRight, BarChart2, FileText } from "lucide-react";

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
    // Cambiamos el enlace a un ancla dentro de la página para mostrar la encuesta en esta misma
    // sección. El contenido completo se encuentra al final de este archivo dentro de la sección
    // con id="internet".
    href: "#internet",
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

      {/* Detalles de la encuesta de Puntos de Acceso a Internet */}
      <section id="internet" className="section-padding">
        <div className="container-narrow space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Análisis de Datos: Puntos de Acceso a Internet
          </h2>
          {/* Descripción */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>Descripción de la encuesta</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-body">
                Analizamos los datos de todos los puntos de acceso a Internet de la RNI en Panamá, para practicar
                la extracción, organización, manipulación e interpretación de datos, y así obtener conclusiones
                relevantes a partir de información cruda.
              </p>
            </CardContent>
          </Card>
          {/* Tabla de Datos */}
          <Card id="datos-internet">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-primary" />
                <CardTitle>Tabla de Datos</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[600px]">
                <iframe
                  src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                    'https://raw.githubusercontent.com/JDH-CS/stats-semester-showcase/main/public/excels/puntos-acceso-internet.xlsx',
                  )}`}
                  title="Puntos de Acceso a Internet - Excel"
                  width="100%"
                  height="100%"
                  className="border rounded-md"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Para visualizar el archivo correctamente, el libro se muestra a través del visor online de
                Microsoft Office. Si el visor no carga, intenta abrir el enlace en una nueva pestaña o
                descargar el archivo.
              </p>
            </CardContent>
          </Card>
          {/* Gráficos y Visualizaciones */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <BarChart2 className="h-5 w-5 text-primary" />
                <CardTitle>Gráficos y Visualizaciones</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="w-full">
                  <img
                    src="/images/points_per_region.png"
                    alt="Cantidad de puntos de acceso por región"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/images/data_per_region.png"
                    alt="Datos transferidos por región (GB)"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/images/sessions_per_region.png"
                    alt="Sesiones totales por región"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </Layout>
  );
};

export default Encuestas;