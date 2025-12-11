import { Users, FileText, BarChart2, BookOpen } from "lucide-react";

const stats = [
  { label: "Encuestas Realizadas", value: "2", icon: FileText },
  { label: "Temas Cubiertos", value: "9+", icon: BookOpen },
  { label: "Gráficos Generados", value: "10+", icon: BarChart2 },
  { label: "Integrantes", value: "2", icon: Users },
];

export const StatsSection = () => {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 100 + 200}ms forwards`,
              }}
            >
              <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
              <p className="text-3xl md:text-4xl font-heading font-extrabold mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-body opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
