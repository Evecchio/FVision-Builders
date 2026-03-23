import { motion } from "motion/react";
import { ArrowRight, Bot, Zap, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email || undefined,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export function Hero() {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    if (isSigningIn) return;
    setIsSigningIn(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef).catch(error => {
        handleFirestoreError(error, OperationType.GET, `users/${user.uid}`);
        throw error;
      });

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "",
          photoURL: user.photoURL || "",
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp()
        }).catch(error => {
          handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}`);
        });
      } else {
        await setDoc(userRef, {
          lastLoginAt: serverTimestamp()
        }, { merge: true }).catch(error => {
          handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}`);
        });
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    } finally {
      setIsSigningIn(false);
    }
  };

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
          <span className="text-sm font-sans font-medium text-slate-300">Disponibilidad para nuevos proyectos</span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6">
            Automatizaciones e <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Inteligencia Artificial
            </span>
            <br /> para tu Negocio
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
            Transformamos tu empresa con automatizaciones inteligentes y agentes de IA de última generación. Aumenta la eficiencia, reduce costos y acelera tu crecimiento.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => {
              // We need to trigger the chat modal. Since it's in Navbar, we might need a better way or just use the contact scroll if preferred.
              // Actually, the user asked to change the button "Agendar una llamada" to "Chat directo".
              // I'll make it open the chat modal if possible, or just change the text and keep the scroll to contact if that's what they want.
              // But "Chat directo" implies a chat.
              // Let's see if I can trigger the modal from here. I'll need to lift state or use a custom event.
              window.dispatchEvent(new CustomEvent('open-chat'));
            }}
            className="group relative inline-flex items-center justify-center text-base font-semibold transition-all focus-visible:outline-none bg-primary text-white h-14 px-8 rounded-full w-full sm:w-auto shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105"
          >
            <span>Presupuesto Automático</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#services"
            className="inline-flex items-center justify-center text-base font-semibold transition-all focus-visible:outline-none border border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white h-14 px-8 w-full sm:w-auto rounded-full backdrop-blur-md"
          >
            Ver Servicios
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
              <Bot className="w-6 h-6" />
            </div>
            <span className="text-3xl font-display font-bold text-white mb-1">Agentes IA</span>
            <span className="text-sm text-slate-400 font-medium">Atención 24/7</span>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl glass-panel group hover:border-secondary/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 text-secondary group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-3xl font-display font-bold text-white mb-1">n8n / Make</span>
            <span className="text-sm text-slate-400 font-medium">Automatización</span>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl glass-panel group hover:border-accent/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6" />
            </div>
            <span className="text-3xl font-display font-bold text-white mb-1">+40%</span>
            <span className="text-sm text-slate-400 font-medium">Eficiencia Operativa</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
