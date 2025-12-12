import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Database, BarChart2, FileText } from "lucide-react";

/*
 * Página modificada para la sección "Análisis de Datos: Puntos de Acceso a Internet".
 *
 * Se actualiza el título principal para reflejar el objetivo de análisis de datos
 * en lugar de solo describir la encuesta. La descripción introduce brevemente
 * el propósito de examinar los datos de los puntos de acceso de la RNI en Panamá.
 *
 * La tabla de datos se incrusta directamente mediante un iframe que carga el
 * archivo Excel almacenado en la carpeta `public/excels`. Esto permite visualizar
 * todas las hojas, tablas y gráficas del libro. Para un despliegue externo,
 * podría emplearse el visor de Office (view.officeapps.live.com), pero aquí se
 * utiliza una ruta relativa que funcionará cuando el archivo esté disponible en
 * el servidor del sitio.
 *
 * La sección de gráficos incluye imágenes generadas a partir de los datos
 * contenidos en el Excel. Estas imágenes se almacenan en `public/images` y
 * representan: (1) el número de puntos de acceso por región, (2) la suma de
 * datos transferidos en GB por región y (3) el total de sesiones por región.
 *
 * Se elimina la tarjeta "Análisis de Resultados", pues el análisis se deja
 * implícito en los gráficos y en la descripción inicial.
 */

const EncuestaInternet = () => {
  // URL al archivo Excel en el repositorio público de GitHub. Utilizamos el visor de Office
  // para embeber el archivo en línea. El visor requiere que la URL esté codificada.
  const excelUrl =
    "https://raw.githubusercontent.com/JDH-CS/stats-semester-showcase/main/public/excels/puntos-acceso-internet.xlsx";

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background section-padding">
        <div className="container-wide text-center">
          <div className="inline-flex items-center gap-3 mb-4 animate-fade-in-up">
            <div className="p-3 rounded-lg bg-primary/10">
              <Globe className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Análisis de Datos: Puntos de Acceso a Internet
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Analizamos los datos de todos los puntos de acceso a Internet de la RNI en Panamá, para practicar
            la extracción, organización, manipulación e interpretación de datos, y así obtener conclusiones
            relevantes a partir de información cruda.
          </p>
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
              <p className="text-muted-foreground font-body">
                Analizamos los datos de todos los puntos de acceso a Internet de la RNI en Panamá, para practicar
                la extracción, organización, manipulación e interpretación de datos, y así obtener conclusiones
                relevantes a partir de información cruda.
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
              {/* Incrustamos el libro de Excel para mostrar todas las hojas y tablas utilizando Office Online */}
              <div className="w-full h-[600px]">
                <iframe
                  src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                    excelUrl,
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

export default EncuestaInternet;