import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { handleFirestoreError, OperationType } from "@/lib/firebase-errors";
import { siteConfig } from "@/config/site";

interface LeadPayload {
  name: string;
  email: string;
  message: string;
  company?: string;
  createdAt: ReturnType<typeof serverTimestamp>;
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const path = "leads";
      const payload: LeadPayload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
      };

      if (formData.company.trim() !== "") {
        payload.company = formData.company;
      }

      await addDoc(collection(db, path), payload).catch(error => {
        handleFirestoreError(error, OperationType.CREATE, path);
      });
      
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-background border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 rounded-3xl overflow-hidden glass-panel bg-slate-900/50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 bg-slate-900/80 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"></div>
            
            <span className="text-sm font-sans font-semibold uppercase tracking-wider text-primary mb-6 block w-fit">
              Contacto
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-8">
              ¿Listo para que tu negocio <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">funcione mejor?</span>
            </h2>
            <p className="text-lg text-slate-400 mb-16 font-sans leading-relaxed max-w-md">
              Hablemos de dónde estás perdiendo tiempo o dinero, y diseñemos un plan a medida para solucionar los problemas reales de tu empresa.
            </p>
            
            <div className="space-y-12 mb-16 flex-grow">
              <div className="flex flex-col gap-3">
                <p className="text-sm font-sans font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Directo
                </p>
                <a href={`mailto:${siteConfig.email}`} className="text-xl md:text-2xl font-display font-bold text-white hover:text-primary transition-colors inline-block w-fit relative group">
                  {siteConfig.email}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a href={siteConfig.linkedIn} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary bg-slate-800/50 hover:bg-primary/10 p-4 rounded-xl transition-all duration-300 border border-white/5 hover:border-primary/50 group">
                <span className="sr-only">LinkedIn (abre en nueva ventana)</span>
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-secondary bg-slate-800/50 hover:bg-secondary/10 p-4 rounded-xl transition-all duration-300 border border-white/5 hover:border-secondary/50 group">
                <span className="sr-only">GitHub (abre en nueva ventana)</span>
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col justify-center p-8 lg:p-16 bg-slate-800/30 relative"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 glass-panel rounded-2xl p-8 border border-primary/30">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                  <CheckCircle2 className="h-24 w-24 text-primary relative z-10" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight">Mensaje <br/><span className="text-primary">Enviado</span></h3>
                <p className="text-slate-400 mb-12 font-sans leading-relaxed max-w-sm">
                  Gracias por contactarnos. Analizaremos tu solicitud y nos pondremos en contacto a la brevedad.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-8 py-4 bg-transparent text-primary font-sans font-semibold text-sm uppercase tracking-wider hover:bg-primary/10 transition-all duration-300 border border-primary/50 rounded-xl hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3 relative group">
                    <label htmlFor="name" className="text-sm font-sans font-semibold text-slate-400 flex items-center gap-2">
                      Nombre *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 text-white font-sans text-base p-4 rounded-xl placeholder:text-slate-600"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-3 relative group">
                    <label htmlFor="email" className="text-sm font-sans font-semibold text-slate-400 flex items-center gap-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-white/10 focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all duration-300 text-white font-sans text-base p-4 rounded-xl placeholder:text-slate-600"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-3 relative group">
                  <label htmlFor="company" className="text-sm font-sans font-semibold text-slate-400 flex items-center gap-2">
                    Empresa (Opcional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    maxLength={100}
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none transition-all duration-300 text-white font-sans text-base p-4 rounded-xl placeholder:text-slate-600"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="space-y-3 relative group">
                  <label htmlFor="message" className="text-sm font-sans font-semibold text-slate-400 flex items-center gap-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={2000}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 text-white font-sans text-base p-4 rounded-xl placeholder:text-slate-600 resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                {status === "error" && (
                  <div className="p-4 bg-red-500/10 text-red-400 font-sans text-sm border border-red-500/50 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-sans font-semibold transition-all duration-300 bg-primary text-white rounded-xl hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-3 h-5 w-5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
