import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "La capacidad de Ezequiel para traducir necesidades de negocio complejas en arquitecturas técnicas sólidas es excepcional. Su enfoque nos dio la claridad que necesitábamos para escalar.",
      author: "Director de Tecnología",
      company: "Retail Leader Latam",
      color: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
      iconColor: "text-primary",
      badgeColor: "bg-primary/10 text-primary border-primary/20"
    },
    {
      quote: "Trabajar con FVision fue un cambio de juego para nuestra operativa. La automatización de procesos no solo redujo errores, sino que liberó a nuestro equipo para tareas de mayor valor.",
      author: "Gerente de Operaciones",
      company: "Logística Express",
      color: "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]",
      iconColor: "text-secondary",
      badgeColor: "bg-secondary/10 text-secondary border-secondary/20"
    },
    {
      quote: "El diagnóstico de nuestro funnel fue preciso y accionable. No solo nos dijo qué estaba mal, sino que nos entregó una hoja de ruta técnica impecable para solucionarlo.",
      author: "CEO & Founder",
      company: "Fashion Hub",
      color: "hover:border-accent/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]",
      iconColor: "text-accent",
      badgeColor: "bg-accent/10 text-accent border-accent/20"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-sans font-semibold uppercase tracking-wider text-primary mb-4 block">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
              Lo que dicen <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">nuestros clientes</span>
            </h2>
            <p className="text-lg font-sans text-slate-400 leading-relaxed">
              Líderes que han transformado sus negocios a través de nuestras soluciones técnicas y estratégicas.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`relative group flex flex-col p-8 lg:p-10 glass-panel rounded-2xl border border-white/10 transition-all duration-500 bg-slate-900/50 ${t.color}`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Quote className={`w-24 h-24 ${t.iconColor}`} />
              </div>
              
              <Quote className={`w-10 h-10 mb-8 ${t.iconColor} relative z-10`} />
              
              <p className="text-lg text-slate-300 font-sans leading-relaxed mb-12 flex-grow relative z-10">
                "{t.quote}"
              </p>
              
              <div className="pt-8 border-t border-white/10 relative z-10">
                <p className="font-display font-bold text-white text-base mb-2">{t.author}</p>
                <p className={`text-xs font-sans font-semibold uppercase tracking-wider inline-block px-3 py-1 border rounded-full ${t.badgeColor}`}>
                  {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
