import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderGit2, 
  Smartphone, 
  Cpu, 
  Database, 
  Sparkles, 
  ArrowUpRight, 
  Mail, 
  Github, 
  Linkedin,
  FileCode,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Shield
} from "lucide-react";
import { siteConfig } from "./config/site";

const categories = [
  { id: "all", label: "Todas las Soluciones" },
  { id: "ecommerce", label: "E-Commerce & Conversión" },
  { id: "ai", label: "IA & Agentes" },
  { id: "local-first", label: "Local-First & Mobile" }
] as const;

interface Solution {
  title: string;
  summary: string;
  category: "ecommerce" | "ai" | "local-first";
  tags: string[];
  specs: {
    problem: string;
    solution: string;
    statusLabel: string;
    status: "production" | "prototype" | "architecture";
  };
}

const projects: Solution[] = [
  {
    title: "NubeBoost",
    summary: "Acelerador de ventas para Tiendanube. Optimiza el checkout y la velocidad de carga para reducir el abandono de carrito hasta un 35%.",
    category: "ecommerce",
    tags: ["🚀 Despliegue Inmediato", "E-commerce", "Tiendanube", "Conversión", "CSS", "UX/UI"],
    specs: {
      problem: "Fricción visual y tasa de abandono en carritos de compra en plantillas cerradas.",
      solution: "Jerarquía visual optimizada, checkout fluido en un clic y adaptabilidad móvil que incrementa la conversión directa.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  },
  {
    title: "CoreStore Headless",
    summary: "Acelerador e-commerce ultrarrápido. Frontend desacoplado de alta velocidad para maximizar conversiones y posicionamiento SEO.",
    category: "ecommerce",
    tags: ["🛠️ Desarrollo a Medida", "Next.js 15", "React 19", "TypeScript", "Headless", "SEO & Rendimiento"],
    specs: {
      problem: "Lentitud en carga y falta de personalización de plataformas de comercio tradicionales.",
      solution: "Catálogo instantáneo, carrito persistente offline, pasarela modular y velocidad de carga menor a 1 segundo.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  },
  {
    title: "FlowCommerce",
    summary: "Automatización de ventas por WhatsApp. Convierte chats informales en pedidos estructurados y automatizados con Inteligencia Artificial.",
    category: "ecommerce",
    tags: ["🛠️ Desarrollo a Medida", "WhatsApp API", "AI Agent", "RAG", "Conversational", "Automatización"],
    specs: {
      problem: "Falta de automatización y estructuración de pedidos en ventas informales por chat.",
      solution: "Catálogo interactivo integrado a chat, procesamiento inteligente de pedidos y derivación directa a pasarela o CRM.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  },
  {
    title: "SpendGuard Mobile",
    summary: "Gestor financiero móvil 100% privado. Captura, procesa y registra gastos automáticamente en tiempo real y offline.",
    category: "local-first",
    tags: ["🛠️ Desarrollo a Medida", "Kotlin", "Jetpack Compose", "Room Database", "Android", "Privacidad"],
    specs: {
      problem: "Registro manual de finanzas tedioso y brechas de privacidad al sincronizar con servidores externos.",
      solution: "Escucha en segundo plano de notificaciones bancarias, extracción automatizada por Regex y base de datos local cifrada.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  },
  {
    title: "ZenSpend Engine",
    summary: "Consultoría de producto y datos. Diseño de arquitectura local-first e integración de IA en finanzas corporativas.",
    category: "local-first",
    tags: ["💼 Consultoría Técnica", "Product Discovery", "Local-first", "Architecture", "Fintech", "Estrategia"],
    specs: {
      problem: "Falta de validación técnica de modelos relacionales offline y viabilidad de IA local.",
      solution: "Definición de MVP viable, modelado relacional offline-first y viabilidad técnica para despliegue de modelos locales.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  },
  {
    title: "DRDV Framework",
    summary: "Gobernanza y control de IA. Framework para asegurar que tus agentes de IA actúen con predictibilidad y seguridad de grado comercial.",
    category: "ai",
    tags: ["🛠️ Desarrollo a Medida", "Python", "Agent Architecture", "Validation", "YAML", "Seguridad IA"],
    specs: {
      problem: "Falta de predictibilidad, control y observabilidad en sistemas multi-agente complejos.",
      solution: "Runtime con contratos de comportamiento y validación estricta en el flujo Design-Review-Decide-Validate.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  },
  {
    title: "SafeRAG Local",
    summary: "Asistente de IA corporativo privado. Analiza documentos y responde consultas de forma segura y 100% local (sin riesgo de fuga de datos).",
    category: "ai",
    tags: ["🚀 Despliegue Inmediato", "FastAPI", "Ollama", "RAG", "Chroma DB", "Security", "Privacidad de Datos"],
    specs: {
      problem: "Riesgo de filtración de datos corporativos sensibles al consumir APIs de LLMs en la nube.",
      solution: "Aislamiento de red estricto (cero fugas de datos), procesamiento local con Ollama y base vectorial integrada.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  },
  {
    title: "DropLand",
    summary: "Gestor de descargas en red local. Automatiza y controla descargas multimedia remotamente desde cualquier dispositivo.",
    category: "local-first",
    tags: ["🚀 Despliegue Inmediato", "Python", "Tkinter", "yt-dlp", "FFmpeg", "MSIX", "PWA", "Productividad"],
    specs: {
      problem: "Incomodidad para transferir enlaces y descargar audios/música desde el móvil al almacenamiento local.",
      solution: "Consola integrada a servidor web ligero con control a través de PWA móvil, automatizando conversiones multimedia.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  }
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Responsive Design",
  "Kotlin",
  "Jetpack Compose",
  "Room",
  "Python",
  "FastAPI",
  "Ollama",
  "RAG",
  "Chroma",
  "Git",
  "GitHub Actions",
  "Product Discovery",
  "Tkinter",
  "yt-dlp",
  "FFmpeg",
  "MSIX",
  "Inno Setup",
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      // Nota: Reemplazar el ID 'YOUR_FORMSPREE_ID' por tu ID real de Formspree cuando lo configures
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });
      if (response.ok) {
        setFormStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getStatusIcon = (status: "production" | "prototype" | "architecture") => {
    switch (status) {
      case "production":
        return <span className="status-led production" aria-hidden="true" />;
      case "prototype":
        return <span className="status-led prototype" aria-hidden="true" />;
      case "architecture":
        return <span className="status-led architecture" aria-hidden="true" />;
    }
  };

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <nav className="container nav-bar" aria-label="Navegación principal">
          <a className="brand-container" href="#top">
            <img src="data:image/jpeg;base64,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" alt="FVision Logo" className="brand-logo-img" />
            <span className="brand-text">FVision</span>
          </a>
          <div className="nav-links">
            <a href="#soluciones">Soluciones</a>
            <a href="#tecnologias">Tecnologías</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container hero">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> 
              Desarrollo de Software & Inteligencia Artificial
            </span>
            <h1>Desarrollo de Software y Sistemas de IA para Escalado de Negocios</h1>
            <p className="lead">
              Desarrollamos soluciones de software a medida, e-commerce de alto rendimiento y sistemas de inteligencia artificial para optimizar tus procesos operativos y acelerar el crecimiento de tu negocio.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#contacto">
                Agendar Consulta <ArrowUpRight size={18} />
              </a>
              <a className="button" href="#soluciones">
                Ver Proyectos
              </a>
            </div>
          </div>

        </section>

        {/* Section Soluciones */}
        <section className="section" id="soluciones">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow" style={{ background: '#FFFDF9', color: '#1B1C1D', fontSize: '0.75rem', marginBottom: '0.5rem' }}>SOLUCIONES INTEGRABLES</span>
                <h2>Catálogo de Soluciones</h2>
              </div>
              <p>
                Sistemas y módulos de software listos para integración, optimizados para conversión e-commerce, IA local privativa y arquitecturas Local-First.
              </p>
            </div>

            <div className="privacy-note">
              <Shield size={18} style={{ flexShrink: 0, color: 'var(--accent)' }} />
              <span><strong>Nota de Privacidad:</strong> El código fuente y los datos de negocio se gestionan bajo licencias de despliegue privado. Se exponen especificaciones de flujo bajo demanda.</span>
            </div>

            {/* Tabs de Filtro */}
            <div className="filter-tabs" role="tablist" aria-label="Filtrar por especialización">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={selectedCategory === cat.id}
                  className={`tab-button ${selectedCategory === cat.id ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grilla Animada */}
            <motion.div 
              layout 
              className="project-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.article 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="project-card" 
                    key={project.title}
                  >
                    <div className="card-title-row">
                      <h3>{project.title}</h3>
                      <span className="status-badge">
                        {getStatusIcon(project.specs.status)}
                        {project.specs.statusLabel}
                      </span>
                    </div>
                    
                    <p className="project-summary">{project.summary}</p>
                    
                    <div className="project-specs">
                      <div className="spec-item">
                        <span className="spec-label">PROB</span>
                        <span className="spec-value">{project.specs.problem}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">SOL</span>
                        <span className="spec-value">{project.specs.solution}</span>
                      </div>
                    </div>

                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Section Tecnologías */}
        <section className="section skills-section" id="tecnologias">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow" style={{ background: '#FFDE4D' }}>Capacidades</span>
                <h2>Herramientas & Tecnologías</h2>
              </div>
              <p>Habilidades validadas a través del desarrollo de las soluciones descritas en este catálogo.</p>
            </div>
            <div className="skills-list">
              {skills.map((skill) => (
                <span className="skill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Section Contacto */}
        <section className="section" id="contacto">
          <div className="container">
            <div className="contact-panel">
              <span className="eyebrow contact-eyebrow">Contacto Técnico</span>
              <h2>¿Querés implementar una de estas soluciones?</h2>
              <p>
                Dejame tu consulta para coordinar una demostración técnica uno a uno (screensharing) de la arquitectura y flujos de cualquier solución.
              </p>

              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="form-input"
                    placeholder="Tu nombre"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="form-input"
                    placeholder="tu@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje / Consulta</label>
                  <textarea
                    id="message"
                    required
                    className="form-input form-textarea"
                    placeholder="¿En qué solución estás interesado?"
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>

                <button 
                  type="submit" 
                  className="button button-primary" 
                  style={{ width: '100%', marginTop: '0.5rem' }}
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? "Enviando..." : "Enviar Consulta"}
                </button>

                {formStatus === "success" && (
                  <div className="form-status success" style={{ marginTop: '1rem' }}>
                    ¡Consulta enviada con éxito! Te responderé a la brevedad.
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="form-status error" style={{ marginTop: '1rem' }}>
                    Ocurrió un error al enviar. Intentá de nuevo o escribime a GitHub/LinkedIn.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer">
        © {new Date().getFullYear()} {siteConfig.owner} · FVision. Diseñado y Desarrollado por Ezequiel Vecchio.
      </footer>
    </div>
  );
}
