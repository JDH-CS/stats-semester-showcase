import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart } from "lucide-react";

/*
 * Página para la sección "Gráficos Estadísticos del Empleo (INEC)".
 *
 * Esta página muestra únicamente las visualizaciones obtenidas del archivo de Excel
 * proporcionado por el INEC. No incluye tablas ni descripciones extensas; solo
 * se presentan los gráficos recreados a partir de los datos disponibles.
 */

const Graficos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background section-padding">
        <div className="container-wide text-center">
          <div className="inline-flex items-center gap-3 mb-4 animate-fade-in-up">
            <div className="p-3 rounded-lg bg-primary/10">
              {/* Utilizamos un icono de gráfica para representar la sección */}
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Gráficos Estadísticos del Empleo (INEC)
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow space-y-8">
          {/* Gráficos */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <PieChart className="h-5 w-5 text-primary" />
                <CardTitle>Visualizaciones</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Gráfico de barras: empleo por categoría */}
                <div className="w-full">
                  <img
                    src="/images/inec_empleo_bar.png"
                    alt="Distribución de empleo por categoría"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
                {/* Línea: dos series de empleo a lo largo del tiempo */}
                <div className="w-full">
                  <img
                    src="/images/inec_empleo_line1.png"
                    alt="Serie temporal 1 de empleo"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
                {/* Línea: serie adicional de empleo */}
                <div className="w-full">
                  <img
                    src="/images/inec_empleo_line2.png"
                    alt="Serie temporal 2 de empleo"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
                {/* Gráfico circular 1 */}
                <div className="w-full">
                  <img
                    src="/images/inec_empleo_pie1.png"
                    alt="Distribución porcentual del empleo (gráfico circular 1)"
                    className="w-full h-auto rounded-md border"
                  />
                </div>
                {/* Gráfico circular 2 */}
                <div className="w-full">
                  <img
                    src="/images/inec_empleo_pie2.png"
                    alt="Distribución porcentual del empleo (gráfico circular 2)"
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

export default Graficos;