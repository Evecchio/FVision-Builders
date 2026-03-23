import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/logo";
import { ChatModal } from "@/components/chat-modal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleOpenChat = () => setIsChatOpen(true);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-chat", handleOpenChat);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-chat", handleOpenChat);
    };
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#services" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Casos de Éxito", href: "#cases" },
    { name: "Testimonios", href: "#testimonials" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo showText={false} iconSize={48} className="md:hidden" />
            <Logo showText={false} iconSize={64} className="hidden md:flex" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsChatOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-sans font-medium text-sm transition-all active:scale-95 duration-150 ease-in-out ml-2 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              Presupuesto Automático
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center h-full">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/5">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans font-medium text-base text-slate-300 hover:text-white transition-colors px-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsChatOpen(true);
                }}
                className="bg-primary text-white px-6 py-3 rounded-full font-sans font-medium text-sm text-center w-full shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                Presupuesto Automático
              </button>
            </div>
          </div>
        </div>
      )}

      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </header>
  );
}
