import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Database, BarChart2, FileText } from "lucide-react";

/*
 * Página para el análisis del Panorama Digital de la Universidad de Panamá.
 *
 * Esta encuesta evalúa la accesibilidad y utilización del internet por parte de los
 * estudiantes de la Universidad de Panamá. Se divide en un documento PDF con
 * información detallada, una descripción del objetivo de la encuesta con un enlace
 * al formulario de Google Forms, una tabla interactiva que muestra el archivo
 * Excel completo y una sección de gráficos derivados de los datos del libro.
 */

const EncuestaPanorama = () => {
  // URL al archivo Excel del panorama digital en el repositorio de GitHub. Usamos el visor de Office
  // para embeber el libro. La función encodeURIComponent codifica la URL para el visor.
  const excelUrl =
    "https://raw.githubusercontent.com/JDH-CS/stats-semester-showcase/main/public/excels/panorama-digital.xlsx";

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background section-padding">
        <div className="container-wide text-center">
          <div className="inline-flex items-center gap-3 mb-4 animate-fade-in-up">
            <div className="p-3 rounded-lg bg-primary/10">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Panorama Digital de la Universidad de Panamá: Accesibilidad y Utilización del Internet (encuesta)
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            El objetivo de esta encuesta era practicar los conceptos fundamentales de
            Estadística a la hora de realizar una encuesta. También queríamos hacer
            una evaluación sobre el panorama digital de la Universidad de Panamá,
            para saber el grado de accesibilidad y utilización del Internet por parte
            de los estudiantes.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow space-y-8">
          {/* Documento PDF */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>Documento PDF</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[500px]">
                <iframe
                  src="/pdfs/panorama-digital.pdf#toolbar=0"
                  title="Panorama Digital - Documento PDF"
                  width="100%"
                  height="100%"
                  className="rounded-md border"
                />
              </div>
            </CardContent>
          </Card>

          {/* Descripción de la encuesta */}
          <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              <CardTitle>Descripción de la encuesta</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground font-body mb-4">
              El objetivo de esta encuesta era practicar los conceptos fundamentales
              de Estadística a la hora de realizar una encuesta. También queríamos
              hacer una evaluación sobre el panorama digital de la Universidad de
              Panamá, para saber el grado de accesibilidad y utilización del
              Internet por parte de los estudiantes.
            </p>
            <p className="text-muted-foreground font-body">
              Puedes participar o ver el formulario original en el siguiente enlace:
              <br />
              <a
                href="https://forms.gle/AZuzi9o4q9JbWqXB9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Abrir formulario de Google
              </a>
            </p>
          </CardContent>
        </Card>

          {/* Tabla de Datos */}
          <Card id="datos">
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
                    excelUrl,
                  )}`}
                  title="Panorama Digital - Excel"
                  width="100%"
                  height="100%"
                  className="border rounded-md"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Este libro se visualiza mediante el visor en línea de Microsoft Office. Si no se carga
                adecuadamente, abre el enlace en una pestaña aparte o descarga el archivo para consultarlo.
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
                    src="/images/type_counts.png"
                    alt="Variables por tipo"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/images/categories_per_variable.png"
                    alt="Número de categorías por variable"
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

export default EncuestaPanorama;