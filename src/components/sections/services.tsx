import { Search, FileText, Target, Zap, Brain } from "lucide-react";
import { motion } from "motion/react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Services() {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Diagnóstico de negocio",
      desc: "Relevamiento de procesos, cuellos de botella, análisis de datos",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Definición de requerimientos",
      desc: "User stories, backlog, criterios de aceptación",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Priorización estratégica",
      desc: "MoSCoW, matriz de riesgos, roadmaps ejecutables",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Automatización e integración",
      desc: "Flujos automatizados sobre arquitecturas cloud",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Proyectos con IA",
      desc: "Agentes inteligentes y pipelines de datos integrados",
      className: "md:col-span-3 md:row-span-1"
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Servicios
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary rounded-full mx-auto"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Soluciones estructuradas para escalar tu negocio con tecnología y datos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={service.className}
            >
              <SpotlightCard className="h-full p-8 group">
                <div className="mb-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl inline-block border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
