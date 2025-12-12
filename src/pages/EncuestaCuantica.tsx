import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, FileText, Database, Link as LinkIcon } from "lucide-react";

/*
 * Página para la sección "Encuesta sobre Computación Cuántica".
 *
 * Esta página presenta los materiales completos de la encuesta, incluyendo
 * tres documentos PDF, un libro de Excel y un enlace al formulario de Google
 * que se utilizó para recopilar la información. El Excel se incrusta
 * directamente para permitir la visualización de todas sus hojas, tablas y
 * gráficos, y los PDFs se muestran mediante iframes para facilitar su lectura.
 */

const EncuestaCuantica = () => {
  // URL al archivo Excel de la encuesta cuántica en el repositorio de GitHub. Utilizamos el visor de Office
  // para embeber el libro. La URL se codifica para que el visor pueda acceder al recurso público.
  const excelUrl =
    "https://raw.githubusercontent.com/JDH-CS/stats-semester-showcase/main/public/excels/encuesta-cuantica.xlsx";

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background section-padding">
        <div className="container-wide text-center">
          <div className="inline-flex items-center gap-3 mb-4 animate-fade-in-up">
            <div className="p-3 rounded-lg bg-primary/10">
              {/* Icono representativo de la temática cuántica */}
              <FlaskConical className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Encuesta sobre Computación Cuántica
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow space-y-8">
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
                El objetivo de esta encuesta es practicar los conceptos fundamentales de estadística
                mediante el diseño y la ejecución de un cuestionario sobre computación cuántica. Se
                busca analizar el grado de conocimiento, interés y percepción que tienen los
                estudiantes panameños acerca de esta disciplina emergente.
              </p>
              <p className="text-muted-foreground font-body">
                Para más información, puedes consultar el formulario original en el siguiente enlace:
                {" "}
                <a
                  href="https://forms.gle/fPC9LD1WpF9weJmQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Formulario de Google
                </a>
                .
              </p>
            </CardContent>
          </Card>

          {/* Documentos PDF */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>Documentos PDF</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Primer PDF */}
                <div className="w-full h-[500px]">
                  <iframe
                    src="/pdfs/encuesta-cuantica-1.pdf#toolbar=0"
                    title="Encuesta Cuántica - Documento 1"
                    width="100%"
                    height="100%"
                    className="rounded-md border"
                  />
                </div>
                {/* Segundo PDF */}
                <div className="w-full h-[500px]">
                  <iframe
                    src="/pdfs/encuesta-cuantica-2.pdf#toolbar=0"
                    title="Encuesta Cuántica - Documento 2"
                    width="100%"
                    height="100%"
                    className="rounded-md border"
                  />
                </div>
                {/* Tercer PDF */}
                <div className="w-full h-[500px]">
                  <iframe
                    src="/pdfs/encuesta-cuantica-3.pdf#toolbar=0"
                    title="Encuesta Cuántica - Documento 3"
                    width="100%"
                    height="100%"
                    className="rounded-md border"
                  />
                </div>
              </div>
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
              {/* Incrustamos el libro de Excel para mostrar todas las hojas y tablas utilizando Office Online */}
              <div className="w-full h-[600px]">
                <iframe
                  src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                    excelUrl,
                  )}`}
                  title="Encuesta sobre Computación Cuántica - Excel"
                  width="100%"
                  height="100%"
                  className="border rounded-md"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                El libro se visualiza mediante el visor en línea de Microsoft Office. Si el visor no carga,
                intenta abrir el enlace en una nueva pestaña o descarga el archivo para revisarlo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default EncuestaCuantica;