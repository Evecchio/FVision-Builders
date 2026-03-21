import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const typewriterWords = [
  "Análisis de datos",
  "Automatización",
  "Consultoría IA",
  "Transformación digital",
  "Optimización de procesos",
];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Floating Orbs - Animated */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium mb-8 shadow-lg shadow-black/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-white/90">Disponible para nuevos proyectos</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm mb-6"
        >
          Ezequiel Vecchio | Business Analyst & Consultor de Tecnología
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-6 drop-shadow-2xl"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">F</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Vision</span>
        </motion.h1>

        {/* Description & Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-12 h-24 md:h-20"
        >
          <p className="font-light">Conecto tu negocio con soluciones reales.</p>
          <div className="font-medium text-white mt-2 h-10 overflow-hidden relative flex justify-center">
            <motion.div
              key={currentWordIndex}
              initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300"
            >
              {typewriterWords[currentWordIndex]}
            </motion.div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto"
        >
          <a
            href="#cases"
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow-[0_0_40px_-10px_rgba(45,212,191,0.5)] hover:shadow-[0_0_60px_-15px_rgba(45,212,191,0.7)] h-14 px-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10">Ver casos de trabajo</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white shadow-sm h-14 px-8"
          >
            Hablemos
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10 w-full max-w-3xl"
        >
          <div className="flex flex-col items-center group">
            <span className="text-4xl font-bold text-white mb-1 group-hover:text-primary transition-colors">5+</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Años experiencia</span>
          </div>
          <div className="flex flex-col items-center group">
            <span className="text-4xl font-bold text-white mb-1 group-hover:text-primary transition-colors">20+</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Proyectos</span>
          </div>
          <div className="flex flex-col items-center group">
            <span className="text-4xl font-bold text-white mb-1 group-hover:text-primary transition-colors">100%</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Clientes satisfechos</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <ArrowDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
