import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import jadePhoto from "@/assets/jade.png";
import juanDiegoPhoto from "@/assets/juan-diego.png";

/*
 * Versión modificada de la página About. Se reemplazaron los
 * textos marcados como "[Contenido pendiente]" por contenido
 * redactado a partir de las indicaciones del usuario. Cada sección
 * introduce claramente la descripción del proyecto, los objetivos,
 * la metodología aplicada y la visión del proyecto. Los estilos
 * originales se mantienen para conservar la consistencia visual.
 */
const teamMembers = [
  {
    name: "Juan Diego Hernández",
    role: "Backend Developer",
    photo: juanDiegoPhoto,
  },
  {
    name: "Jade Gutiérrez",
    role: "Frontend Developer, UI/UX, Organización, Investigación y Documentación",
    photo: jadePhoto,
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background section-padding">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 animate-fade-in-up">
            Sobre Nosotros
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Conoce al equipo detrás de este proyecto académico
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12">
            Integrantes del Equipo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="overflow-hidden hover-lift"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${index * 150}ms forwards`,
                }}
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Info Sections */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow space-y-12">
          {/* Descripción del Proyecto */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Descripción del Proyecto
            </h2>
            <p className="text-muted-foreground font-body">
              La plataforma <strong>Stats Semester Showcase</strong> surge como un portal académico para
              la visualización y difusión de los temas aprendidos durante el II semestre de 2025 en
              la asignatura de Estadística y Probabilidad. Su diseño destaca por la originalidad del
              nombre, la combinación armónica de colores y el uso de recursos multimedia que facilitan
              la navegación. Presenta claramente el tema central y su relación con la asignatura,
              con una estructura coherente e introductoria al contenido.
            </p>
          </div>

          {/* Objetivos */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Objetivos
            </h2>
            <p className="text-muted-foreground font-body">
              El objetivo principal es brindar una experiencia amigable y fluida. Se busca que los
              usuarios naveguen sin dificultades entre los distintos módulos, con enlaces funcionales y
              una estructura lógica de la información. El contenido profundiza en los temas vistos en
              clase&nbsp;–desde la introducción y la estadística descriptiva hasta el muestreo, el
              coeficiente de correlación, la probabilidad y las distribuciones–&nbsp;utilizando datos
              obtenidos en actividades o ejercicios del curso. Se emplean gráficas, tablas y
              representaciones aprendidas para una interpretación clara.
            </p>
          </div>

          {/* Fuentes Bibliográficas */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Fuentes Bibliográficas
            </h2>
            <p className="text-muted-foreground font-body italic">
              [Contenido pendiente - Espacio reservado para las fuentes primarias y secundarias]
            </p>
          </div>

          {/* Metodología */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Metodología Aplicada
            </h2>
            <p className="text-muted-foreground font-body">
              Para desarrollar el contenido, recolectamos datos a través de fuentes primarias como
              encuestas, definiendo la población y seleccionando una muestra representativa. Se explica
              el proceso de obtención de datos y su aplicación a los conceptos del curso. La encuesta
              se analiza mediante gráficos y cuadros, calculando el coeficiente de correlación u otras
              medidas relevantes. También se describe la correcta utilización de las representaciones
              estadísticas para garantizar claridad visual.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Visión del Proyecto
            </h2>
            <p className="text-muted-foreground font-body">
              La síntesis de hallazgos y la interpretación de los resultados se conectan con los
              conceptos teóricos aprendidos por los integrantes. Nuestra visión es que la plataforma
              sirva como herramienta de consulta accesible, ampliándose con nuevos tópicos y
              fortaleciendo la conexión entre la teoría estadística y su aplicación. Cuidamos la
              ortografía, el formato y la coherencia del sitio, apoyándonos en fuentes bibliográficas
              para enriquecer la presentación.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
