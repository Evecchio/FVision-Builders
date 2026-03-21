import { motion } from "motion/react";
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
        "Documentación técnica: REPO-MAP, TECH-CONTRACTS, DESIGN-SYSTEM"
      ],
      result: "Hoja de ruta con fases claras, base técnica lista para escalar y criterios medibles de éxito.",
      gradient: "from-pink-500/20 to-purple-500/20"
    },
    {
      title: "Automatización de pedidos por WhatsApp con AWS",
      tag: "PyMEs con ventas por mensajería",
      context: "Comercios que reciben pedidos por WhatsApp de forma manual, sin registro ni seguimiento.",
      work: [
        "Arquitectura serverless: WhatsApp Business API → API Gateway → Lambda → SQS → DynamoDB",
        "Esquema PostgreSQL para gestión de pedidos",
        "Backend Node.js/Express"
      ],
      result: "Arquitectura lista para implementar que elimina el trabajo manual y habilita reportes automáticos.",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Herramienta BA React",
      tag: "Equipos de producto y tecnología",
      context: "Necesidad de un entorno unificado para ejecutar análisis de negocio estructurados.",
      work: [
        "App React con módulos: MoSCoW, mapa de stakeholders",
        "Mapeo de procesos y matriz de riesgos",
        "User stories y tablero Kanban",
        "Generador de flowcharts integrados"
      ],
      result: "Plataforma centralizada que acelera el discovery y estandariza la documentación de producto.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="cases" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Casos de Trabajo
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col h-full ${
                index === 2 ? "lg:col-span-2 lg:w-1/2 lg:mx-auto" : ""
              }`}
            >
              <SpotlightCard className="h-full p-8 flex flex-col relative overflow-hidden group">
                {/* Decorative background gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.gradient} rounded-full blur-3xl -mr-20 -mt-20 opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="mb-6 relative z-10">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4 border border-primary/20">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-white font-medium">Contexto:</strong> {item.context}
                  </p>
                </div>
                
                <div className="mb-8 flex-grow relative z-10">
                  <strong className="text-white font-medium block mb-3">Trabajo realizado:</strong>
                  <ul className="space-y-3">
                    {item.work.map((workLine, i) => (
                      <li key={i} className="flex items-start text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
                        <span className="leading-relaxed">{workLine}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 mt-auto relative z-10">
                  <p className="text-primary font-medium leading-relaxed">
                    <span className="text-white font-semibold mr-2">Resultado:</span>
                    {item.result}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
