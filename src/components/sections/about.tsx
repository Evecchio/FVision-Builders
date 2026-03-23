import { BarChart3, Cog, Wrench, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const highlights = [
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Análisis de datos reales",
      desc: "GA4, CRM, operaciones",
    },
    {
      icon: <Cog className="h-6 w-6 text-primary" />,
      title: "Automatización de procesos",
      desc: "Cloud e IA",
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary" />,
      title: "Herramientas propias",
      desc: "Construidas en producción",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Basado en Pilar, AMBA",
      desc: "Remoto o presencial",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Sobre</span> <span className="text-gradient">mí</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert prose-xl max-w-none text-muted-foreground/90"
          >
            <p className="leading-relaxed">
              Antes de asesorar a otros, tuve que resolver mis propios problemas de negocio. 
              Gestiono <strong className="text-white font-bold">Ivana Design</strong>, una tienda de indumentaria deportiva en Tiendanube — y fue 
              analizando mis propios datos de GA4, rompiendo el funnel de ventas, que entendí 
              de verdad qué significa tomar decisiones basadas en información real.
            </p>
            <p className="leading-relaxed mt-8 border-l-4 border-primary/30 pl-6 italic">
              Eso me llevó a construir herramientas, automatizar procesos y eventualmente ayudar a otros 
              negocios a hacer lo mismo. No te voy a hablar de teoría — te voy a hablar de 
              lo que <span className="text-primary font-semibold">funciona en el mundo real</span>.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card p-8 group transition-all duration-300 hover:shadow-primary/10"
              >
                <div className="mb-6 p-4 bg-primary/10 rounded-2xl inline-block group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-muted-foreground/100 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
