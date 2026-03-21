import { BarChart3, Cog, Wrench, MapPin } from "lucide-react";
import { motion } from "motion/react";

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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Sobre mí</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert prose-lg max-w-none text-muted-foreground"
          >
            <p className="leading-relaxed">
              Antes de asesorar a otros, tuve que resolver mis propios problemas de negocio. 
              Gestiono <strong className="text-white font-semibold">Ivana Design</strong>, una tienda de indumentaria deportiva en Tiendanube — y fue 
              analizando mis propios datos de GA4, rompiendo el funnel de ventas, que entendí 
              de verdad qué significa tomar decisiones basadas en información real.
            </p>
            <p className="leading-relaxed mt-6">
              Eso me llevó a construir herramientas, automatizar procesos y eventualmente ayudar a otros 
              negocios a hacer lo mismo. No te voy a hablar de teoría — te voy a hablar de 
              lo que funciona.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="mb-4 p-3 bg-background rounded-lg inline-block">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
