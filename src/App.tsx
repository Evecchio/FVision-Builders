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
  HelpCircle
} from "lucide-react";
import { siteConfig } from "./config/site";

const categories = [
  { id: "all", label: "Todos los Blueprints" },
  { id: "ecommerce", label: "E-Commerce & Conversión" },
  { id: "ai", label: "IA & Agentes" },
  { id: "local-first", label: "Local-First & Mobile" }
] as const;

interface Blueprint {
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

const projects: Blueprint[] = [
  {
    title: "NubeBoost",
    summary: "Optimizador de interfaz y flujo de conversión para tiendas en Tiendanube.",
    category: "ecommerce",
    tags: ["E-commerce", "CSS", "UX/UI", "Tiendanube"],
    specs: {
      problem: "Fricción visual y tasa de abandono en carritos de compra en plantillas cerradas.",
      solution: "Jerarquía visual optimizada del carrito de compras, adaptabilidad responsiva extrema y simplificación del checkout.",
      statusLabel: "Producción Privada",
      status: "production"
    }
  },
  {
    title: "CoreStore Headless",
    summary: "Motor frontend desacoplado de alto rendimiento para e-commerce modular.",
    category: "ecommerce",
    tags: ["Next.js 15", "React 19", "TypeScript", "Headless"],
    specs: {
      problem: "Lentitud en carga y falta de personalización de plataformas de comercio tradicionales.",
      solution: "Desarrollo de catálogo dinámico, persistencia local del carrito, búsqueda instantánea y checkout modular.",
      statusLabel: "Prototipo Funcional",
      status: "prototype"
    }
  },
  {
    title: "FlowCommerce",
    summary: "Híbrido de catálogo digital y automatización conversacional en WhatsApp.",
    category: "ecommerce",
    tags: ["WhatsApp API", "AI Agent", "RAG", "Conversational"],
    specs: {
      problem: "Falta de automatización y estructuración de pedidos en ventas informales por chat.",
      solution: "Arquitectura de catálogo interactivo con derivación estructurada a WhatsApp y orquestador conversacional por IA.",
      statusLabel: "Especificación Técnica",
      status: "architecture"
    }
  },
  {
    title: "SpendGuard Mobile",
    summary: "Servicio móvil nativo offline de escucha y registro automático de gastos.",
    category: "local-first",
    tags: ["Kotlin", "Jetpack Compose", "Room Database", "Android"],
    specs: {
      problem: "Registro manual de finanzas tedioso y brechas de privacidad al sincronizar con servidores externos.",
      solution: "Servicio en segundo plano de captura de notificaciones, parseo de transacciones por Regex y persistencia Room local.",
      statusLabel: "Prototipo Android",
      status: "prototype"
    }
  },
  {
    title: "ZenSpend Engine",
    summary: "Consultoría de descubrimiento y modelado de datos para finanzas local-first.",
    category: "local-first",
    tags: ["Product Discovery", "Local-first", "Architecture", "Fintech"],
    specs: {
      problem: "Falta de validación técnica de modelos relacionales offline y viabilidad de IA local.",
      solution: "Definición estratégica de MVP, estudio de perfil de usuario y viabilidad técnica para procesamiento con LLM local.",
      statusLabel: "I+D / Descubrimiento",
      status: "architecture"
    }
  },
  {
    title: "DRDV Framework",
    summary: "Runtime de orquestación y control multi-agente guiado por contratos de comportamiento.",
    category: "ai",
    tags: ["Python", "Agent Architecture", "Validation", "YAML"],
    specs: {
      problem: "Falta de predictibilidad, control y observabilidad en sistemas multi-agente complejos.",
      solution: "Runtime de ejecución de agentes con validación basada en evidencias bajo el ciclo Design, Review, Decide, Validate.",
      statusLabel: "Arquitectura Base",
      status: "architecture"
    }
  },
  {
    title: "SafeRAG Local",
    summary: "Microservicio autónomo de chat privado y procesamiento de documentos locales.",
    category: "ai",
    tags: ["FastAPI", "Ollama", "RAG", "Chroma DB", "Security"],
    specs: {
      problem: "Riesgo de filtración de datos corporativos sensibles al consumir APIs de LLMs en la nube.",
      solution: "Aislamiento perimetral estricto con egress whitelist, procesamiento offline con Ollama y base de datos vectorial Chroma.",
      statusLabel: "Prototipo Funcional",
      status: "prototype"
    }
  },
  {
    title: "DropLand",
    summary: "Aplicación híbrida de control remoto y descarga automatizada por red local.",
    category: "local-first",
    tags: ["Python", "Tkinter", "yt-dlp", "FFmpeg", "MSIX", "PWA"],
    specs: {
      problem: "Incomodidad para transferir enlaces y descargar audios/música desde el móvil al almacenamiento local.",
      solution: "Interfaz de escritorio Tkinter integrada con un servidor HTTP local para control remoto vía PWA móvil, yt-dlp y FFmpeg.",
      statusLabel: "Distribución Windows",
      status: "prototype"
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
          <a className="brand" href="#top">
            <span>F</span>Vision
          </a>
          <div className="nav-links">
            <a href="#blueprints">Blueprints</a>
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
              Catálogo de Arquitectura & Software
            </span>
            <h1>Blueprints de Ingeniería.</h1>
            <p className="lead">
              Soy {siteConfig.owner}. Esta plataforma reúne soluciones de software reales estructuradas como blueprints replicables en comercio electrónico, aplicaciones local-first y sistemas multi-agente con inteligencia artificial.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#blueprints">
                Ver Blueprints <ArrowUpRight size={18} />
              </a>
              <a className="button" href="mailto:ezequiel.vecchio.fv@gmail.com">
                Contacto
              </a>
            </div>
          </div>

          <aside className="summary-card" aria-label="Resumen profesional">
            <h2>8 Blueprints de Ingeniería</h2>
            <p>
              El código y datos de negocio son privados. Se exponen las especificaciones y flujos técnicos bajo licencias de despliegue controlado.
            </p>
            <div className="summary-grid">
              <div>
                <strong>E-commerce</strong>
                <span>Motores & Conversión</span>
              </div>
              <div>
                <strong>Local-First</strong>
                <span>Privacidad & Móvil</span>
              </div>
              <div>
                <strong>IA Local</strong>
                <span>RAG & Agentes</span>
              </div>
              <div>
                <strong>Arquitectura</strong>
                <span>MVP & Diseño</span>
              </div>
            </div>
          </aside>
        </section>

        {/* Section Blueprints */}
        <section className="section" id="blueprints">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow" style={{ background: '#FFFDF9', color: '#1B1C1D' }}>Soluciones Listas</span>
                <h2>Catálogo de Blueprints</h2>
              </div>
              <p>
                Estructuras modulares diseñadas para resolver desafíos de negocio e infraestructura sin exponer propiedad intelectual.
              </p>
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
              <h2>¿Querés implementar uno de estos Blueprints?</h2>
              <p>
                Puedo realizar una demostración técnica uno a uno (screensharing) de la arquitectura y flujos de cualquier Blueprint en una llamada controlada.
              </p>
              <div className="actions contact-actions">
                <a className="button button-light" href="mailto:ezequiel.vecchio.fv@gmail.com">
                  <Mail size={18} /> ezequiel.vecchio.fv@gmail.com
                </a>
                <a className="button button-outline-light" href="https://github.com/Evecchio" target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer">
        © {new Date().getFullYear()} {siteConfig.owner} · FVision. Diseñado como Blueprints de Ingeniería.
      </footer>
    </div>
  );
}
