import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="why" className="py-24 relative overflow-hidden bg-background/50">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            ¿Por qué <span className="text-gradient">trabajar</span> conmigo?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            Mi objetivo es ser el puente entre tus necesidades de negocio y las soluciones tecnológicas más avanzadas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Tabs List */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "flex items-center gap-5 p-5 rounded-2xl text-left transition-all duration-500 border group",
                    isActive 
                      ? "glass-card border-primary/30 shadow-2xl shadow-primary/10 scale-105" 
                      : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-500",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" 
                      : "bg-white/5 text-muted-foreground group-hover:text-primary"
                  )}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={cn(
                    "font-bold text-xl transition-colors duration-500",
                    isActive ? "text-white" : "text-muted-foreground group-hover:text-white/80"
                  )}>
                    {reason.title}
                  </span>
                </button>
              );
            })}
          </motion.div>
          
          {/* Tab Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative min-h-[400px] flex items-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full"
              >
                <div className="glass-card p-10 md:p-14 relative overflow-hidden group min-h-[350px] flex flex-col justify-center">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-100"></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      key={`icon-${activeTab}`}
                      initial={{ scale: 0.5, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="mb-8 inline-flex p-5 rounded-2xl bg-primary/20 text-primary border border-primary/30 shadow-2xl shadow-primary/10"
                    >
                      {(() => {
                        const ActiveIcon = reasons[activeTab].icon;
                        return <ActiveIcon className="h-10 w-10" />;
                      })()}
                    </motion.div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
                      {reasons[activeTab].title}
                    </h3>
                    <p className="text-xl text-muted-foreground/90 leading-relaxed font-medium">
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
