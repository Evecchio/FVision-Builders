import { Bot, Zap, Brain, Database, Network, Cpu, MessageSquare, Workflow } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Agentes de IA",
      desc: "Desarrollamos asistentes virtuales inteligentes capaces de resolver consultas complejas, agendar citas y atender a tus clientes 24/7 con lenguaje natural.",
      color: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    },
    {
      icon: <Workflow className="h-8 w-8 text-secondary" />,
      title: "Automatización con n8n",
      desc: "Conectamos tus herramientas (CRM, ERP, Email, Slack) para eliminar tareas manuales. Flujos de trabajo eficientes que ahorran cientos de horas al mes.",
      color: "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: "Sistemas RAG",
      desc: "Chatbots entrenados con la base de conocimiento de tu empresa. Respuestas precisas basadas exclusivamente en tus documentos y manuales internos.",
      color: "hover:border-accent/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Consultoría Estratégica",
      desc: "Analizamos los procesos de tu negocio para identificar cuellos de botella y oportunidades donde la Inteligencia Artificial puede generar el mayor ROI.",
      color: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    },
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
              Nuestras Soluciones
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
              Impulsa tu negocio con <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">tecnología de vanguardia</span>
            </h2>
            <p className="text-lg font-sans text-slate-400 leading-relaxed">
              Diseñamos e implementamos sistemas inteligentes que trabajan por ti, permitiéndote enfocarte en lo que realmente importa: hacer crecer tu empresa.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative glass-panel p-8 md:p-10 rounded-2xl border border-white/10 transition-all duration-300 flex flex-col h-full bg-slate-900/50 ${service.color}`}
            >
              <div className="mb-6 p-4 bg-slate-800/50 rounded-xl inline-flex w-fit border border-white/5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                <p className="text-base font-sans text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
