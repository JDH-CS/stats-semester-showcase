import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Database, BarChart2, FileText } from "lucide-react";

const EncuestaCuantica = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background section-padding">
        <div className="container-wide text-center">
          <div className="inline-flex items-center gap-3 mb-4 animate-fade-in-up">
            <div className="p-3 rounded-lg bg-primary/10">
              <FlaskConical className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Computación Cuántica en Panamá
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Estudio sobre el conocimiento e impacto de la computación cuántica en la población panameña
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow space-y-8">
          {/* Descripción de la Encuesta */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>Descripción de la Encuesta</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-body italic">
                [Contenido pendiente - Descripción de cómo se realizó la encuesta, población objetivo, y metodología]
              </p>
            </CardContent>
          </Card>

          {/* Tabla de Datos */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-primary" />
                <CardTitle>Tabla de Datos</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-body italic mb-4">
                [Espacio reservado para tabla interactiva con datos de la encuesta]
              </p>
              <div className="bg-muted/50 rounded-lg p-8 text-center border-2 border-dashed border-border">
                <Database className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Tabla de datos pendiente de agregar
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Gráficos */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <BarChart2 className="h-5 w-5 text-primary" />
                <CardTitle>Gráficos y Visualizaciones</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-body italic mb-4">
                [Espacio reservado para gráficos de la encuesta]
              </p>
              <div className="bg-muted/50 rounded-lg p-8 text-center border-2 border-dashed border-border">
                <BarChart2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Gráficos pendientes de agregar
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Análisis */}
          <Card>
            <CardHeader>
              <CardTitle>Análisis de Resultados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-body italic">
                [Contenido pendiente - Análisis estadístico de los resultados, interpretación de datos, y conclusiones]
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default EncuestaCuantica;
