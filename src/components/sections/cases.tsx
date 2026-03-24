import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Cases() {
  const cases = [
    {
      title: "Recuperación de ventas en Tienda Online",
      tag: "Comercio Electrónico",
      context: "Tienda online con muchas visitas diarias, pero que perdía la mayoría de sus ventas justo al momento de pagar.",
      work: [
        "Análisis del paso a paso del cliente para entender por qué no compran",
        "Identificación de trabas y errores ocultos al momento de pagar",
        "Rediseño visual enfocado en facilitar la compra y dar confianza",
        "Documentación clara de los problemas y cómo se solucionaron"
      ],
      result: "Hoja de ruta con fases claras y criterios medibles de éxito."
    },
    {
      title: "Recepción automática de pedidos por WhatsApp",
      tag: "Ventas por mensajería",
      context: "Comercios que colapsaban al recibir pedidos manuales, perdiendo ventas y tiempo valioso.",
      work: [
        "Sistema automático para recibir y responder mensajes 24/7",
        "Base de datos centralizada para guardar historial de clientes y pedidos",
        "Eliminación de errores por carga manual de datos y pedidos perdidos"
      ],
      result: "Sistema que elimina el trabajo manual, no pierde ventas y habilita reportes en tiempo real."
    },
    {
      title: "Plataforma de control para equipos de trabajo",
      tag: "Gestión de proyectos",
      context: "Empresa que perdía tiempo y dinero por falta de claridad al iniciar nuevos proyectos y asignar tareas.",
      work: [
        "Sistema centralizado para organizar prioridades y objetivos claros",
        "Mapa visual de procesos y riesgos para anticipar problemas",
        "Generación automática de tareas y flujos de trabajo"
      ],
      result: "Plataforma centralizada que acelera el inicio de proyectos y alinea al equipo."
    }
  ];

  return (
    <section id="cases" className="py-32 relative overflow-hidden bg-background border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-sans font-semibold uppercase tracking-wider text-primary mb-4 block">
              Casos de Éxito
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
              Resultados reales en <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">empresas reales</span>
            </h2>
            <p className="text-lg font-sans text-slate-400 leading-relaxed">
              Implementaciones donde la arquitectura de sistemas y el análisis de datos convergen para generar impacto medible.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch glass-panel rounded-2xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 bg-slate-900/50"
            >
              {/* Oversized Number */}
              <div className="lg:col-span-2 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 p-8 bg-slate-800/30 text-slate-600 group-hover:bg-primary/5 group-hover:text-primary transition-colors relative overflow-hidden">
                <span className="font-display font-black text-7xl md:text-8xl leading-none relative z-10 opacity-50">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="lg:col-span-10 flex flex-col p-8 lg:p-10 relative">
                <div className="mb-8">
                  <span className="inline-block text-xs font-sans font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base font-sans text-slate-400 leading-relaxed max-w-3xl">
                    <span className="text-white font-semibold mr-2">Contexto:</span> {item.context}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <strong className="text-sm font-sans font-semibold text-white uppercase tracking-wider block mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Ejecución
                    </strong>
                    <ul className="space-y-3">
                      {item.work.map((workLine, i) => (
                        <li key={i} className="flex items-start text-sm font-sans text-slate-400 leading-relaxed">
                          <span className="text-primary mr-3 mt-1">•</span>
                          <span>{workLine}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <strong className="text-sm font-sans font-semibold text-white uppercase tracking-wider block mb-4 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-secondary" />
                      Resultado
                    </strong>
                    <div className="flex items-start gap-4 bg-slate-800/50 p-6 rounded-xl border border-white/5 group-hover:border-secondary/30 transition-colors">
                      <p className="text-sm font-sans text-slate-300 leading-relaxed">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
