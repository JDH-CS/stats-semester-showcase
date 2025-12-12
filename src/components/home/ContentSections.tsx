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

/*
 * Versión modificada de la sección de contenido principal.
 *
 * Se actualiza el título y el enlace de la tarjeta de "Datos Reales: Conectividad y Consumo"
 * para que apunte a la nueva página "Panorama Digital de la Universidad de Panamá". También
 * se adapta la descripción para reflejar el objetivo de evaluar la accesibilidad y
 * utilización del internet por los estudiantes.
 */

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
    // Ajustamos esta tarjeta para que dirija a la sección de conceptos, donde se encuentra el artículo de investigación.
    title: "Investigación en Computación Cuántica",
    description: "Estudio sobre el impacto y conocimiento de la computación cuántica en Panamá.",
    icon: FlaskConical,
    href: "/conceptos#bitacora",
  },
  {
    // Tarjeta para el análisis de los puntos de acceso a internet. Cambiamos el título para reflejar que
    // se trata de un análisis de datos. El enlace apunta a la página de encuestas con ancla para mostrar
    // esta sección dentro de la misma página.
    title: "Análisis de Datos: Puntos de Acceso a Internet",
    description: "Análisis sobre la conectividad y acceso a internet en diferentes zonas de Panamá.",
    icon: Globe,
    href: "/encuestas#internet",
  },
  {
    // Actualizamos esta tarjeta para que represente la nueva encuesta del panorama digital.
    title: "Panorama Digital de la Universidad de Panamá: Accesibilidad y Utilización del Internet (encuesta)",
    description: "Evaluación sobre la accesibilidad y utilización del internet por los estudiantes de la Universidad de Panamá.",
    icon: Database,
    href: "/encuestas/panorama",
  },
  {
    title: "Gráficos Estadísticos del Empleo (INEC)",
    description: "Visualizaciones basadas en datos oficiales del Instituto Nacional de Estadística y Censo.",
    icon: LineChart,
    href: "/graficos",
  },
  {
    // Renombramos la bitácora para que represente la encuesta sobre computación cuántica.
    title: "Encuesta sobre Computación Cuántica",
    description: "Encuesta sobre el conocimiento e interés en computación cuántica y su análisis estadístico.",
    icon: ClipboardList,
    href: "/encuestas/cuantica",
  },
  {
    title: "Experiencias y Eventos Determinísticos y Aleatorios",
    description: "Explora eventos determinísticos frente a sucesos aleatorios a través de casos prácticos.",
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