import {
  BookOpen,
  BarChart3,
  FileSpreadsheet,
  PieChart,
  History,
  FlaskConical,
  Globe,
  Database,
  LineChart,
  ClipboardList,
  Shuffle,
} from "lucide-react";
import { SectionCard } from "./SectionCard";

const sections = [
  {
    title: "Historia y Fundamentos de la Probabilidad",
    description: "Orígenes históricos y bases teóricas del estudio de la probabilidad y la estadística.",
    icon: History,
    href: "/conceptos#historia",
  },
  {
    title: "Tipos de Variables y Artículos Científicos",
    description: "Clasificación de variables estadísticas y análisis de literatura científica.",
    icon: BookOpen,
    href: "/conceptos#variables",
  },
  {
    title: "Ensayos Académicos",
    description: "Ensayos y trabajos escritos desarrollados durante el curso.",
    icon: FileSpreadsheet,
    href: "/conceptos#ensayos",
  },
  {
    title: "Investigación en Computación Cuántica",
    description: "Estudio sobre el impacto y conocimiento de la computación cuántica en Panamá.",
    icon: FlaskConical,
    href: "/encuestas/cuantica",
  },
  {
    title: "Encuesta: Puntos de Acceso a Internet",
    description: "Análisis sobre la conectividad y acceso a internet en diferentes zonas de Panamá.",
    icon: Globe,
    href: "/encuestas/internet",
  },
  {
    title: "Datos Reales: Conectividad y Consumo",
    description: "Información recopilada sobre patrones de uso y consumo de servicios de internet.",
    icon: Database,
    href: "/encuestas/internet#datos",
  },
  {
    title: "Gráficos Estadísticos del Empleo (INEC)",
    description: "Visualizaciones basadas en datos oficiales del Instituto Nacional de Estadística y Censo.",
    icon: LineChart,
    href: "/graficos",
  },
  {
    title: "Bitácora de Recolección de Datos",
    description: "Registro detallado del proceso de obtención y organización de datos.",
    icon: ClipboardList,
    href: "/conceptos#bitacora",
  },
  {
    title: "Experiencias Determinísticas y Aleatorias",
    description: "Análisis comparativo entre fenómenos predecibles y fenómenos aleatorios.",
    icon: Shuffle,
    href: "/conceptos#experiencias",
  },
];

export const ContentSections = () => {
  return (
    <section id="contenido-principal" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Contenido del Curso
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Explora los diferentes temas y análisis desarrollados durante el II Semestre 2025
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <SectionCard
              key={section.title}
              title={section.title}
              description={section.description}
              icon={section.icon}
              href={section.href}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
