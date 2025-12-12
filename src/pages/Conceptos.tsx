import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, BookOpen, FileText, ClipboardList, Shuffle } from "lucide-react";

/*
 * Versión actualizada de la página Conceptos. Aquí se incorporan los
 * materiales de la sección "Historia y Fundamentos de la Probabilidad":
 * dos PDFs y un video de YouTube. Para esa sección, en lugar del texto
 * de marcador de posición se muestran iframes que cargan los PDFs
 * desde la carpeta public/pdfs y el video embebido desde YouTube. El
 * resto de las secciones permanece con su texto provisional hasta que
 * se añada contenido.
 */

const conceptSections = [
  {
    id: "historia",
    title: "Historia y Fundamentos de la Probabilidad",
    icon: History,
    placeholder: "Contenido sobre los orígenes históricos y bases teóricas de la probabilidad.",
  },
  {
    id: "variables",
    title: "Tipos de Variables y Artículos Científicos",
    icon: BookOpen,
    placeholder: "Clasificación de variables estadísticas y análisis de literatura científica.",
  },
  {
    id: "ensayos",
    title: "Ensayos Académicos",
    icon: FileText,
    placeholder: "Ensayos y trabajos escritos desarrollados durante el curso.",
  },
  {
    id: "bitacora",
    title: "Bitácora de Recolección de Datos",
    icon: ClipboardList,
    placeholder: "Registro detallado del proceso de obtención y organización de datos.",
  },
  {
    id: "experiencias",
    title: "Experiencias Determinísticas y Aleatorias",
    icon: Shuffle,
    placeholder: "Análisis comparativo entre fenómenos predecibles y fenómenos aleatorios.",
  },
];

const Conceptos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background section-padding">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in-up">
            Conceptos Estadísticos
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Fundamentos teóricos y conceptuales del curso de Probabilidad y Estadística
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding">
        <div className="container-narrow space-y-8">
          {conceptSections.map((section, index) => (
            <Card
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 100}ms forwards`,
              }}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl md:text-2xl">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {section.id === "historia" ? (
                  <div className="space-y-8">
                    {/* Primer PDF: Historia y Fundamentos */}
                    <div className="w-full h-[500px]">
                      <iframe
                        src="/pdfs/historia-fundamentos-1.pdf#toolbar=0"
                        title="Historia y Fundamentos de la Probabilidad - Parte 1"
                        width="100%"
                        height="100%"
                        className="rounded-md border"
                      />
                    </div>
                    {/* Segundo PDF: Historia y Fundamentos */}
                    <div className="w-full h-[500px]">
                      <iframe
                        src="/pdfs/historia-fundamentos-2.pdf#toolbar=0"
                        title="Historia y Fundamentos de la Probabilidad - Parte 2"
                        width="100%"
                        height="100%"
                        className="rounded-md border"
                      />
                    </div>
                    {/* Video embebido de YouTube */}
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/bltIAEJ8x8s"
                        title="Historia y Fundamentos de la Probabilidad"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : section.id === "variables" ? (
                  <div className="space-y-8">
                    {/* PDFs para Tipos de Variables y Artículos Científicos */}
                    <div className="w-full h-[500px]">
                      <iframe
                        src="/pdfs/variables-articulos-1.pdf#toolbar=0"
                        title="Tipos de Variables y Artículos Científicos - Documento 1"
                        width="100%"
                        height="100%"
                        className="rounded-md border"
                      />
                    </div>
                    <div className="w-full h-[500px]">
                      <iframe
                        src="/pdfs/variables-articulos-2.pdf#toolbar=0"
                        title="Tipos de Variables y Artículos Científicos - Documento 2"
                        width="100%"
                        height="100%"
                        className="rounded-md border"
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground font-body italic">
                    [Contenido pendiente - {section.placeholder}]
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Conceptos;