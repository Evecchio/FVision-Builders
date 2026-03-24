import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <Logo iconSize={48} textSize="text-3xl" />
          </div>
          
          <nav aria-label="Navegación del pie de página" className="flex flex-wrap justify-center gap-8 text-sm font-sans font-semibold text-slate-400">
            <a href="#services" className="hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              Sobre Mí
            </a>
          </nav>

          <p className="text-sm text-slate-500 font-sans text-center md:text-right">
            © {new Date().getFullYear()} FVision. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
