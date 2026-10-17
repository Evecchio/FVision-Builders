import { motion } from "motion/react";
import { ArrowRight, Database, Cpu, FileCheck2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden bg-background bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full border border-white/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-sans font-medium text-slate-300">Time-to-Value en 2 a 4 Semanas • Alcance Cerrado • Cero Burocracia</span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6">
            Ingeniería de Datos, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              IA Aplicada y Automatización
            </span>
            <br /> para Operaciones Reales
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg md:text-xl font-sans text-slate-400 leading-relaxed">
            Transformamos procesos manuales, documentos dispersos y silos de información en sistemas productivos integrados a tu operación en ciclos de alcance cerrado de 2 a 4 semanas.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contacto"
            className="group relative inline-flex items-center justify-center text-base font-semibold transition-all focus-visible:outline-none bg-primary text-white h-14 px-8 rounded-full w-full sm:w-auto shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105"
          >
            <span>Solicitar Diagnóstico Técnico</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#services"
            className="inline-flex items-center justify-center text-base font-semibold transition-all focus-visible:outline-none border border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white h-14 px-8 w-full sm:w-auto rounded-full backdrop-blur-md"
          >
            Explorar Áreas de Práctica
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-20 mt-20 border-t border-white/5 w-full max-w-4xl"
        >
          <div className="flex flex-col items-center text-center p-6 rounded-2xl glass-panel group hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
              <Database className="w-6 h-6" />
            </div>
            <span className="text-3xl font-display font-bold text-white mb-1">Pipelines ETL</span>
            <span className="text-sm text-slate-400 font-medium">Unificación de Datos & BI</span>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl glass-panel group hover:border-secondary/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 text-secondary group-hover:scale-110 transition-transform">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <span className="text-3xl font-display font-bold text-white mb-1">OCR & Visión</span>
            <span className="text-sm text-slate-400 font-medium">Auditoría Documental y Planta</span>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl glass-panel group hover:border-accent/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-3xl font-display font-bold text-white mb-1">2 a 4 Semanas</span>
            <span className="text-sm text-slate-400 font-medium">Implementación de Alcance Cerrado</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
