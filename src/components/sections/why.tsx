import { motion } from "motion/react";
import { Target, Network, Shield, Zap } from "lucide-react";

export function Why() {
  const reasons = [
    {
      icon: Target,
      title: "Enfoque en Resultados",
      desc: "No implementamos tecnología por moda, sino para resolver problemas concretos que impacten en la rentabilidad. Cada iniciativa se mide por su ROI.",
      color: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      textColor: "text-primary",
    },
    {
      icon: Network,
      title: "Visión Integral",
      desc: "Combinamos el entendimiento del negocio con el conocimiento técnico para crear soluciones viables y escalables, sin perder de vista el objetivo comercial.",
      color: "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
      textColor: "text-secondary",
    },
    {
      icon: Shield,
      title: "Comunicación Clara",
      desc: "Traducimos requerimientos técnicos complejos a un lenguaje de negocio que todos los stakeholders pueden entender, evitando malentendidos.",
      color: "hover:border-accent/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
      textColor: "text-accent",
    },
    {
      icon: Zap,
      title: "Metodología Ágil",
      desc: "Entregas incrementales que aportan valor desde el primer día, adaptándonos a los cambios del mercado con rapidez y flexibilidad.",
      color: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      textColor: "text-primary",
    }
  ];

  return (
    <section id="why" className="py-32 relative overflow-hidden bg-background border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-sans font-semibold uppercase tracking-wider text-primary mb-4 block">
              Por Qué Elegirnos
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
              El puente entre tu negocio y <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">la tecnología de alto rendimiento</span>
            </h2>
            <p className="text-lg font-sans text-slate-400 leading-relaxed">
              Nuestro enfoque se centra en generar valor real y medible para tu empresa.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col relative group glass-panel rounded-2xl border border-white/10 p-8 md:p-10 transition-all duration-300 bg-slate-900/50 ${reason.color}`}
              >
                <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="p-4 bg-slate-800/50 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-8 w-8 ${reason.textColor}`} />
                  </div>
                  <span className={`font-display font-black text-6xl opacity-20 ${reason.textColor}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-base font-sans text-slate-400 leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
