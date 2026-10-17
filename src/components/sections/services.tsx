import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Services() {
  const cases = [
    {
      title: "Ingeniería de Datos & Inteligencia Operativa (BI / ETL)",
      tag: "Ingeniería de Datos",
      context: "Decisiones demoradas por información fragmentada entre el ERP, el CRM y múltiples hojas de cálculo manuales propensas a error.",
      work: [
        "Pipelines automatizados de extracción, normalización y calidad de datos (ETL / ELT)",
        "Consolidación en almacenes analíticos centralizados con monitoreo de integridad",
        "Tableros ejecutivos en tiempo real para dirección, finanzas y operaciones"
      ],
      result: "Visibilidad operativa unificada y confiable para tomar decisiones basadas en datos reales sin depender de reportes manuales."
    },
    {
      title: "Automatización de Procesos & Agentes de IA Operativos",
      tag: "Automatización & IA Agéntica",
      context: "Equipos calificados perdiendo horas diarias en carga manual de datos, cruce de planillas, seguimiento de correos operativos y tareas repetitivas.",
      work: [
        "Flujos de trabajo asistidos por agentes con reglas de comportamiento deterministas",
        "Integración directa a bases de datos, correo corporativo y ERPs/CRMs existentes",
        "Supervisión humana en puntos críticos de decisión (Human-in-the-Loop)"
      ],
      result: "Una operación de backoffice fluida que elimina cuellos de botella administrativos y errores de transcripción."
    },
    {
      title: "Procesamiento Documental Inteligente (OCR) & Visión Computacional",
      tag: "Extracción Documental & Visión",
      context: "Cuellos de botella administrativos por carga manual de facturas, remitos y órdenes de compra, o controles de calidad visuales lentos en planta.",
      work: [
        "Motores de extracción estructurada de comprobantes y validación fiscal automática (QR AFIP/ARCA)",
        "Normalización de proveedores e imputación directa para conciliación contable",
        "Inspección visual automatizada en línea operativa y logística (YOLOv8 / OpenCV)"
      ],
      result: "Reducción de más del 80% en tiempos de carga administrativa y trazabilidad visual continua en operaciones físicas."
    },
    {
      title: "Modelos Predictivos & Sistemas de Conocimiento Privado (RAG)",
      tag: "Machine Learning & RAG Privado",
      context: "Compras de inventario reactivas, pérdida no anticipada de clientes o imposibilidad de consultar contratos y manuales sin exponer datos sensibles.",
      work: [
        "Modelos predictivos supervisados de pronóstico de demanda, stock y prevención de churn",
        "Buscadores corporativos privados (Enterprise RAG) en infraestructura propia (VPC / On-Premise)",
        "Citación exacta de documentos originales con cero fuga de información confidencial"
      ],
      result: "Anticipación comercial basada en modelos estadísticos y acceso instantáneo al conocimiento técnico y legal de la empresa."
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
              Áreas de Práctica
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
              Ingeniería aplicada para <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">escalar tu operación</span>
            </h2>
            <p className="text-lg font-sans text-slate-400 leading-relaxed">
              Soluciones de alcance cerrado entregadas en ciclos de 2 a 4 semanas, listas para integrarse a los sistemas de tu empresa.
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
                    <span className="text-white font-semibold mr-2">El desafío:</span> {item.context}
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
