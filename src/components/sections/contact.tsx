import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";

const LinkedInSVG = () => (
  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubSVG = () => (
  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

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
                href="mailto:ezigve@gmail.com"
                className="inline-flex items-center justify-center rounded-2xl text-lg font-bold transition-all bg-primary text-primary-foreground shadow-2xl shadow-primary/20 h-16 px-10 w-full sm:w-auto overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                <Send className="mr-3 h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                <span className="relative z-10">Enviar un email</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/541126676941"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl text-lg font-bold transition-all border border-white/10 bg-white/5 backdrop-blur-md text-white shadow-xl h-16 px-10 w-full sm:w-auto"
              >
                <Phone className="mr-3 h-5 w-5 text-primary" />
                Agendar llamada
              </motion.a>
            </div>

            <div className="flex justify-center gap-8 border-t border-white/5 pt-12">
              <motion.a
                whileHover={{ y: -5, color: "oklch(var(--color-primary))" }}
                href="https://www.linkedin.com/in/ezigve/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/60 transition-all duration-300 flex flex-col items-center gap-2 group"
              >
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-primary/30 transition-all">
                  <LinkedInSVG />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -5, color: "oklch(var(--color-primary))" }}
                href="https://github.com/Evecchio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/60 transition-all duration-300 flex flex-col items-center gap-2 group"
              >
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-primary/30 transition-all">
                  <GitHubSVG />
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
