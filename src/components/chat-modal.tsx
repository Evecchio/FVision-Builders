import React, { useState, useEffect, useRef } from "react";
import { X, Send, Loader2, User, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GoogleGenAI, type Chat } from "@google/genai";
import { Avatar } from "@/components/ui/avatar";

interface Message {
  id: string;
  role: "user" | "model";
  text: string;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      // Initialize chat
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });
      chatRef.current = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `Eres el Avatar IA de Ezequiel, consultor de automatización e IA de FVision.

REGLAS DE COMUNICACIÓN:
- Sé ULTRA CONCISO. Máximo 2-3 oraciones por respuesta.
- Ve directo al punto. Nada de relleno ni introducciones largas.
- Una pregunta a la vez. Nunca hagas múltiples preguntas juntas.
- Si el usuario pregunta algo, responde primero y después pregunta.

OBJETIVO: Ayudar al usuario a presupuestar su proyecto de IA/automatización.

FLUJO:
1. Saludo breve (1 oración) + preguntar qué quiere automatizar.
2. Preguntar qué herramientas usa hoy.
3. Preguntar cuántas personas/horas dedican a esa tarea.
4. Dar estimación aproximada o indicar que Ezequiel revisará el detalle.
5. Pedir email para enviar presupuesto formal.

Habla como Ezequiel en primera persona, aclarando que sos su versión IA.`,
        },
      });
      
      // Send initial hidden message to trigger the AI's greeting
      handleInitialGreeting();
    }
  }, [isOpen]);

  const handleInitialGreeting = async () => {
    setIsLoading(true);
    try {
      const response = await chatRef.current!.sendMessage({ message: "Hola Ezequiel, me gustaría obtener un presupuesto automático para mi proyecto." });
      setMessages([
        { id: Date.now().toString(), role: "model", text: response.text ?? "" }
      ]);
    } catch (error) {
      console.error("Error initializing chat:", error);
      setMessages([
        { id: Date.now().toString(), role: "model", text: "Hola, soy el Avatar de Ezequiel. Estoy aquí para ayudarte a obtener un presupuesto automático. ¿Qué proceso te gustaría automatizar hoy?" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { id: Date.now().toString(), role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current!.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "model", text: response.text ?? "" }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "model", text: "Error de conexión. Por favor, intenta de nuevo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              role="dialog"
              aria-label="Chat de presupuesto automático"
              initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-slate-900 border border-white/10 shadow-2xl shadow-black/50 overflow-hidden flex flex-col rounded-2xl glass-panel mb-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/5 bg-slate-800/80 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"></div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/20 bg-slate-800">
                    <Avatar size="lg" />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-white font-bold tracking-tight flex items-center gap-2">
                      Presupuesto Automático <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    </h3>
                    <p className="text-xs text-slate-400 font-sans">Avatar de Ezequiel en línea</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Cerrar chat"
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-background/50">
                {messages.length === 0 && isLoading && (
                  <div className="flex justify-center items-center h-full">
                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  </div>
                )}
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-full border overflow-hidden ${msg.role === "user" ? "bg-slate-800 text-slate-300 border-white/10" : "bg-primary/10 text-primary border-primary/20"}`}>
                      {msg.role === "user" ? (
                        <User size={16} />
                      ) : (
                        <Avatar size="lg" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] px-4 py-3 text-sm whitespace-pre-wrap font-sans leading-relaxed rounded-2xl ${
                        msg.role === "user"
                          ? "bg-primary text-white border border-primary/50 rounded-tr-sm shadow-md"
                          : "bg-slate-800/80 text-slate-200 border border-white/5 rounded-tl-sm shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && messages.length > 0 && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-primary/10 text-primary flex items-center justify-center shrink-0 rounded-full border border-primary/20 overflow-hidden">
                      <Avatar size="lg" />
                    </div>
                    <div className="px-4 py-3 bg-slate-800/80 text-white border border-white/5 rounded-2xl rounded-tl-sm flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-white/5 bg-slate-800/80">
                <form onSubmit={handleSend} className="flex gap-2 relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 bg-slate-900 border border-white/10 px-4 py-3 text-sm text-white font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 placeholder:text-slate-500 rounded-full"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="w-11 h-11 bg-primary text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all duration-300 rounded-full shadow-md"
                  >
                    <Send size={18} className="ml-0.5" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Persistent Floating Button */}
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
              aria-label="Abrir chat de presupuesto"
              className="w-14 h-14 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center hover:scale-110 transition-transform hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            >
              <MessageSquare size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
