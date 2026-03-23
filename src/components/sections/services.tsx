import { Search, FileText, Target, Zap, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Services() {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-primary group-hover:text-white transition-colors" />,
      title: "Diagnóstico de negocio",
      desc: "Relevamiento de procesos, cuellos de botella, análisis de datos estratégicos.",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary group-hover:text-white transition-colors" />,
      title: "Definición de requerimientos",
      desc: "User stories, backlog y criterios de aceptación claros.",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      icon: <Target className="h-8 w-8 text-primary group-hover:text-white transition-colors" />,
      title: "Priorización estratégica",
      desc: "Roadmaps ejecutables enfocados en el ROI.",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary group-hover:text-white transition-colors" />,
      title: "Automatización e integración",
      desc: "Flujos automatizados sobre arquitecturas escalables.",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary group-hover:text-white transition-colors" />,
      title: "Proyectos con Inteligencia Artificial",
      desc: "Agentes inteligentes y pipelines de datos de última generación.",
      className: "md:col-span-3 md:row-span-1"
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Nuestros <span className="text-gradient">Servicios</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            Soluciones estructuradas diseñadas para escalar tu negocio mediante el uso inteligente de tecnología y datos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={service.className}
            >
              <SpotlightCard className="h-full p-10">
                <div className="mb-8 p-5 bg-primary/10 rounded-2xl inline-block border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-2xl shadow-primary/5">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300">{service.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
