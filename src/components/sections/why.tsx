import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Target, Lightbulb, MessageSquare, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Why() {
  const [activeTab, setActiveTab] = useState(0);

  const reasons = [
    {
      icon: Target,
      title: "Enfoque en resultados",
      desc: "No implemento tecnología por moda, sino para resolver problemas concretos que impacten en la rentabilidad. Cada iniciativa se mide por su ROI."
    },
    {
      icon: Lightbulb,
      title: "Visión integral",
      desc: "Combino el entendimiento del negocio con el conocimiento técnico para crear soluciones viables y escalables, sin perder de vista el objetivo comercial."
    },
    {
      icon: MessageSquare,
      title: "Comunicación clara",
      desc: "Traduzco requerimientos técnicos complejos a un lenguaje de negocio que todos los stakeholders pueden entender, evitando malentendidos."
    },
    {
      icon: Zap,
      title: "Metodología ágil",
      desc: "Entregas incrementales que aportan valor desde el primer día, adaptándonos a los cambios del mercado con rapidez y flexibilidad."
    }
  ];

  return (
    <section id="why" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            ¿Por qué trabajar conmigo?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary rounded-full mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Mi objetivo es ser el puente entre tus necesidades de negocio y las soluciones tecnológicas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Tabs List */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-2"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border",
                    isActive 
                      ? "bg-white/10 border-white/20 shadow-lg" 
                      : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                  )}
                >
                  <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    isActive ? "bg-primary text-primary-foreground" : "bg-white/5 text-muted-foreground"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={cn(
                    "font-medium text-lg transition-colors",
                    isActive ? "text-white" : "text-muted-foreground"
                  )}>
                    {reason.title}
                  </span>
                </button>
              );
            })}
          </motion.div>
          
          {/* Tab Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative min-h-[300px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="h-full rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/20 text-primary border border-primary/30">
                      {(() => {
                        const ActiveIcon = reasons[activeTab].icon;
                        return <ActiveIcon className="h-8 w-8" />;
                      })()}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                      {reasons[activeTab].title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {reasons[activeTab].desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
