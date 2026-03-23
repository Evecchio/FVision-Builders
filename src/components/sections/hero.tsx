import { motion } from "framer-motion";
import { ArrowDown, Aperture, Sparkles, Zap, Target } from "lucide-react";
import { useState, useEffect } from "react";

const typewriterWords = [
  "Análisis de datos",
  "Automatización",
  "Consultoría IA",
  "Transformación digital",
  "Optimización de procesos",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Premium Glow Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] right-[-5%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen opacity-40"
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        {/* Availability Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs sm:text-sm font-medium mb-10 shadow-2xl shadow-primary/5 group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-white/80 group-hover:text-primary transition-colors">Disponible para nuevos proyectos estratégicos</span>
        </motion.div>

        {/* Brand Icon & Heading */}
        <motion.div variants={itemVariants} className="mb-10 relative group">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative flex items-center justify-center rounded-3xl bg-gradient-to-br from-primary via-primary/80 to-accent shadow-[0_0_50px_-12px_rgba(45,212,191,0.5)] w-24 h-24 md:w-32 md:h-32 mx-auto mb-8"
          >
            <Aperture className="text-white w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
            <div className="absolute inset-0 rounded-3xl bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-[0.9] select-none">
            <span className="text-white drop-shadow-sm">F</span>
            <span className="text-gradient">Vision</span>
          </h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-sm md:text-base font-medium tracking-[0.3em] text-muted-foreground uppercase opacity-80"
          >
            Ezequiel Vecchio | Business Analyst
          </motion.p>
        </motion.div>

        {/* Dynamic Typewriter Quote */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-light text-white/90 leading-tight">
            Transfórmamos datos en <span className="italic font-normal">decisiones inteligentes</span>
          </h2>
          <div className="h-12 md:h-16 mt-4 flex justify-center items-center overflow-hidden">
            <motion.p
              key={currentWordIndex}
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.8 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 25 
              }}
              className="text-2xl md:text-5xl font-bold text-gradient px-4"
            >
              {typewriterWords[currentWordIndex]}
            </motion.p>
          </div>
        </motion.div>

        {/* Strategic CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 mb-24 w-full sm:w-auto"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#cases"
            className="relative inline-flex items-center justify-center rounded-2xl text-base font-bold transition-all bg-primary text-primary-foreground shadow-[0_20px_40px_-15px_rgba(45,212,191,0.4)] h-16 px-10 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <Sparkles className="mr-2 h-5 w-5" />
            <span>Explorar Casos de Éxito</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl text-base font-bold transition-all border border-white/10 bg-white/5 backdrop-blur-md text-white h-16 px-10"
          >
            Hablemos hoy
          </motion.a>
        </motion.div>

        {/* High-Impact Trust Metrics */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 pt-12 border-t border-white/5 w-full max-w-4xl"
        >
          <div className="flex items-center gap-4 group justify-center sm:justify-start">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <div className="text-left">
              <p className="text-3xl font-black text-white">5+</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Años de Expertise</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group justify-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Target size={24} />
            </div>
            <div className="text-left">
              <p className="text-3xl font-black text-white">20+</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Proyectos Escalados</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group justify-center sm:justify-end">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Sparkles size={24} />
            </div>
            <div className="text-left">
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Satisfacción Real</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Futuristic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="p-1"
        >
          <ArrowDown className="h-5 w-5 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
