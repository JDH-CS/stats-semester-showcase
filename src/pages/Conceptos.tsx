import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, BookOpen, FileText, ClipboardList, Shuffle } from "lucide-react";

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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
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
                <p className="text-muted-foreground font-body italic">
                  [Contenido pendiente - {section.placeholder}]
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Conceptos;
