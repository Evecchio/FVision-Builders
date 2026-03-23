import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Calendar } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 md:p-20 text-center relative overflow-hidden group shadow-[0_0_100px_-20px_rgba(45,212,191,0.2)]"
        >
          {/* Internal decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
              ¿Listo para <span className="text-gradient">optimizar</span> tu negocio?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground/90 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
              Hablemos de tus procesos, cuellos de botella y cómo la tecnología puede ayudarte a escalar de forma estructurada y altamente rentable.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
              <motion.a
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:ezequiel@fvision.com"
                className="inline-flex items-center justify-center rounded-2xl text-lg font-bold transition-all bg-primary text-primary-foreground shadow-2xl shadow-primary/20 h-16 px-10 w-full sm:w-auto overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                <Send className="mr-3 h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                <span className="relative z-10">Enviar un email</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center rounded-2xl text-lg font-bold transition-all border border-white/10 bg-white/5 backdrop-blur-md text-white shadow-xl h-16 px-10 w-full sm:w-auto"
              >
                <Calendar className="mr-3 h-5 w-5 text-primary" />
                Agendar llamada
              </motion.a>
            </div>

            <div className="flex justify-center gap-8 border-t border-white/5 pt-12">
              <motion.a 
                whileHover={{ y: -5, color: "oklch(var(--color-primary))" }}
                href="#" 
                className="text-muted-foreground/60 transition-all duration-300 flex flex-col items-center gap-2 group"
              >
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-primary/30 transition-all">
                  <Linkedin className="h-7 w-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "oklch(var(--color-primary))" }}
                href="#" 
                className="text-muted-foreground/60 transition-all duration-300 flex flex-col items-center gap-2 group"
              >
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-primary/30 transition-all">
                  <Github className="h-7 w-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
