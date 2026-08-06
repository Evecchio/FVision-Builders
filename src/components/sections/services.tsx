import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Services() {
  const cases = [
    {
      title: "Agentes Autónomos para Operaciones Complejas",
      tag: "Agentes para Operaciones",
      context: "Tu equipo colapsa ejecutando procesos manuales y coordinaciones repetitivas entre múltiples sistemas.",
      work: [
        "Agentes de IA con contratos de comportamiento estricto y validación por etapas",
        "Integración directa a bases de datos y ERPs/CRMs existentes",
        "Supervisión humana en puntos críticos (Human-in-the-Loop)"
      ],
      result: "Una operación fluida que trabaja en segundo plano eliminando cuellos de botella y tareas redundantes."
    },
    {
      title: "Analítica Privada de Datos Corporativos",
      tag: "Analítica de Datos",
      context: "Información crítica dispersa en documentos e incapacidad de realizar consultas avanzadas sin exponer datos sensibles.",
      work: [
        "Sistema RAG híbrido / GraphRAG en servidor privado (VPC) o local",
        "Procesamiento e indexación segura de documentos con cifrado AES-256",
        "Consultas conversacionales de alto valor con modelos aislados"
      ],
      result: "Inteligencia de negocios instantánea sobre tu información sin compartir un solo byte con terceros."
    },
    {
      title: "Inspección Inteligente con Computing Vision",
      tag: "Computing Vision",
      context: "Inspección manual de productos o flujos visuales propenso a errores humanos, lentitud y falta de monitoreo continuo.",
      work: [
        "Despliegue de modelos de visión artificial (YOLO/OpenCV) en tiempo real",
        "Detección automática de objetos, anomalías y patrones en bordes (Edge AI)",
        "Panel de control centralizado con alertas automáticas y métricas visuales"
      ],
      result: "Un sistema de inspección 24/7 sin fallas humanas que automatiza el control de calidad en tiempo real."
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-sans font-semibold uppercase tracking-wider text-primary mb-4 block">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
              Sistemas listos para <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">escalar tu negocio</span>
            </h2>
            <p className="text-lg font-sans text-slate-400 leading-relaxed">
              Arquitecturas probadas que resuelven los problemas más comunes de las empresas, listas para adaptarse a tu operación.
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
                    <span className="text-white font-semibold mr-2">El problema:</span> {item.context}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <strong className="text-sm font-sans font-semibold text-white uppercase tracking-wider block mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Nuestra Solución
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
                      El Impacto
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
