export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">F</span>
              <span className="text-primary">Vision</span>
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Ezequiel Vecchio. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-white transition-colors">Sobre mí</a>
            <a href="#services" className="hover:text-white transition-colors">Servicios</a>
            <a href="#cases" className="hover:text-white transition-colors">Casos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
