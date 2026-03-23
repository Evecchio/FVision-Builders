import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Cases() {
  const cases = [
    {
      title: "Ivana Design: Diagnóstico de funnel",
      tag: "E-commerce de moda / indumentaria",
      context: "Tienda de indumentaria deportiva en Tiendanube. Tráfico existente pero baja conversión.",
      work: [
        "Análisis completo del funnel con datos reales de GA4",
        "Identificación de fricciones críticas",
        "Rediseño de arquitectura del tema visual (Twig/SCSS)",
        "Documentación técnica estructurada"
      ],
      result: "Hoja de ruta con fases claras y criterios medibles de éxito.",
      gradient: "from-pink-500/10 to-purple-500/10"
    },
    {
      title: "Automatización de pedidos por WhatsApp con AWS",
      tag: "PyMEs con ventas por mensajería",
      context: "Comercios que reciben pedidos por WhatsApp de forma manual, sin registro ni seguimiento.",
      work: [
        "Arquitectura serverless: WhatsApp Business API → AWS",
        "Esquema PostgreSQL para gestión de pedidos",
        "Backend Node.js/Express de alto rendimiento"
      ],
      result: "Arquitectura que elimina el trabajo manual y habilita reportes automáticos.",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Herramienta BA React Suite",
      tag: "Equipos de producto y tecnología",
      context: "Necesidad de un entorno unificado para ejecutar análisis de negocio estructurados.",
      work: [
        "App React con módulos MoSCoW y Stakeholders",
        "Mapeo de procesos y matriz de riesgos integrada",
        "Generador de user stories y flowcharts"
      ],
      result: "Plataforma centralizada que acelera el discovery de producto.",
      gradient: "from-blue-500/10 to-cyan-500/10"
    }
  ];

  return (
    <section id="cases" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-6"
          >
            Casos de <span className="text-gradient">Trabajo</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col h-full ${
                index === 2 ? "lg:col-span-2 lg:w-3/4 lg:mx-auto" : ""
              }`}
            >
              <SpotlightCard className="h-full p-10 flex flex-col relative group overflow-hidden">
                {/* Decorative background gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.gradient} rounded-full blur-3xl -mr-20 -mt-20 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <div className="mb-8 relative z-10">
                  <span className="inline-block px-4 py-1 text-xs font-bold text-primary bg-primary/10 rounded-full mb-6 border border-primary/20 tracking-wider uppercase">
                    {item.tag}
                  </span>
                  <h3 className="text-3xl font-black text-white mb-6 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-lg text-muted-foreground/90 leading-relaxed">
                    <span className="text-white font-semibold">Contexto:</span> {item.context}
                  </p>
                </div>
                
                <div className="mb-10 flex-grow relative z-10">
                  <span className="text-white font-bold block mb-4 uppercase text-xs tracking-[0.2em] opacity-50">Impacto Realizado</span>
                  <ul className="space-y-4">
                    {item.work.map((workLine, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i + 0.3 }}
                        className="flex items-start text-muted-foreground group-hover:text-muted-foreground/100 transition-colors"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary mt-2.5 mr-4 flex-shrink-0 shadow-[0_0_10px_rgba(45,212,191,0.6)] group-hover:scale-125 transition-transform"></div>
                        <span className="leading-relaxed font-medium">{workLine}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/5 mt-auto relative z-10">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                    <p className="text-primary font-bold leading-relaxed text-lg">
                      <span className="text-white font-black mr-2">Resultado:</span>
                      {item.result}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
