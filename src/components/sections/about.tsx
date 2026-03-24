import { Database, Cpu, Terminal, Network } from "lucide-react";
import { motion } from "motion/react";
import { Avatar } from "@/components/ui/avatar";

export function About() {
  const highlights = [
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Análisis de Datos Reales",
      desc: "Experiencia práctica optimizando funnels de venta y analizando datos de GA4 y CRM.",
      color: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    },
    {
      icon: <Cpu className="h-8 w-8 text-secondary" />,
      title: "Automatización de Procesos",
      desc: "Implementación de soluciones Cloud e IA para escalar operaciones de manera eficiente.",
      color: "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    },
    {
      icon: <Terminal className="h-8 w-8 text-accent" />,
      title: "Herramientas Propias",
      desc: "Desarrollo de sistemas probados en producción, no solo teoría.",
      color: "hover:border-accent/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    },
    {
      icon: <Network className="h-8 w-8 text-primary" />,
      title: "Basado en Pilar, AMBA",
      desc: "Disponibilidad para trabajar de forma remota o presencial según las necesidades del proyecto.",
      color: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-sans font-semibold uppercase tracking-wider text-primary mb-4 block">
              Sobre Mí
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
              Experiencia real en <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">negocios y tecnología</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4 lg:col-start-2 relative max-w-[280px] sm:max-w-sm mx-auto lg:max-w-none w-full"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 glass-panel group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div>
              <Avatar size="lg" alt="Ezequiel - FVision" className="transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                <h3 className="text-3xl font-display font-bold text-white mb-2">Ezequiel</h3>
                <p className="text-primary font-sans text-sm font-semibold uppercase tracking-wider">
                  Business Owner & Tech Consultant
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bio & Highlights Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <div className="p-8 lg:p-10 glass-panel rounded-2xl border border-white/10 bg-slate-900/50">
              <p className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-6">
                Antes de asesorar a otros, tuve que resolver mis propios problemas de negocio.
              </p>
              <div className="text-base md:text-lg font-sans text-slate-400 leading-relaxed space-y-6">
                <p>
                  Como dueño de un e-commerce de indumentaria deportiva — analizando datos de GA4 y optimizando funnels de venta — entendí 
                  de verdad qué significa tomar decisiones basadas en información real y no en intuiciones.
                </p>
                <p>
                  Esa experiencia "en las trincheras" me llevó a construir mis propias herramientas y automatizar procesos que hoy pongo a disposición de otras empresas. No te hablo desde la teoría, sino desde lo que <span className="text-white font-semibold">funciona en producción</span>.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`flex flex-col p-6 glass-panel rounded-2xl border border-white/10 transition-all duration-300 group bg-slate-900/50 ${item.color}`}
                >
                  <div className="mb-4 p-3 bg-slate-800/50 rounded-xl inline-flex w-fit border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 font-sans leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
