import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, PieChart, LineChart, TrendingUp } from "lucide-react";

const chartCategories = [
  {
    id: "empleo",
    title: "Gráficos Estadísticos del Empleo (INEC)",
    description: "Visualizaciones basadas en datos oficiales del Instituto Nacional de Estadística y Censo.",
    icon: TrendingUp,
  },
  {
    id: "encuestas",
    title: "Gráficos de Encuestas",
    description: "Visualizaciones generadas a partir de las encuestas realizadas.",
    icon: PieChart,
  },
  {
    id: "analisis",
    title: "Análisis Estadístico",
    description: "Gráficos de correlación, distribución y otros análisis estadísticos.",
    icon: LineChart,
  },
];

const Graficos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background section-padding">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in-up">
            Gráficos y Visualizaciones
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Representaciones visuales de los datos analizados durante el curso
          </p>
        </div>
      </section>

      {/* Chart Categories */}
      <section className="section-padding">
        <div className="container-narrow space-y-12">
          {chartCategories.map((category, index) => (
            <Card
              key={category.id}
              id={category.id}
              className="scroll-mt-24"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 100}ms forwards`,
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl md:text-2xl">
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2].map((num) => (
                    <div
                      key={num}
                      className="bg-muted/50 rounded-lg p-8 text-center border-2 border-dashed border-border"
                    >
                      <BarChart2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground text-sm">
                        Gráfico {num} pendiente de agregar
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Graficos;
