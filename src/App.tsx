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
  { id: "sales", label: "🛍️ Ventas & E-Commerce" },
  { id: "ops", label: "⚙️ Coordinación & Operaciones" },
  { id: "data", label: "📊 Análisis & Gestión Privada de Datos" }
] as const;

interface Solution {
  title: string;
  summary: string;
  category: "sales" | "ops" | "data";
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
    title: "CoreStore Headless",
    summary: "Plataforma e-commerce propia de ultra-alta velocidad. Frontend desacoplado con procesos simplificados, checkout fluido de pagos ágiles y velocidad de carga menor a 1 segundo.",
    category: "sales",
    tags: ["🚀 Despliegue Inmediato", "E-Commerce Propio", "Pagos Ágiles", "Next.js 15", "React 19", "TypeScript", "Alta Conversión"],
    specs: {
      problem: "Lentitud de carga, abandono de carritos y altos costos operativos en plataformas comerciales tradicionales.",
      solution: "Arquitectura propia de alta conversión: catálogo instantáneo, checkout fluido en 1-clic y rendimiento sub-segundo optimizado para ventas.",
      statusLabel: "Solución Propietaria",
      status: "production"
    }
  },
  {
    title: "AI Sales Engine",
    summary: "Automatización de ventas conversacionales por WhatsApp. Convierte consultas informales por chat en pedidos estructurados e integrados automáticamente al CRM/ERP.",
    category: "sales",
    tags: ["🛠️ Desarrollo a Medida", "WhatsApp API", "AI Agent", "Automatización Comercial", "Ventas IA"],
    specs: {
      problem: "Pérdida de ventas por respuesta tardía y falta de estructuración en pedidos informales por chat.",
      solution: "Agente de ventas con catálogo interactivo, automatización económica de pedidos por WhatsApp y derivación a pasarela de pagos.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  },
  {
    title: "Enterprise AI Agents",
    summary: "Agentes de IA autónomos para coordinación y automatización de operaciones empresariales complejas entre equipos y sistemas centrales (ERP/CRM).",
    category: "ops",
    tags: ["🛠️ Desarrollo a Medida", "AI Multi-Agent", "Workflow Automation", "ERP/CRM Integration", "Operaciones"],
    specs: {
      problem: "Fricción manual, cuellos de botella operativos y desincronización de tareas entre departamentos de la empresa.",
      solution: "Agentes ejecutores de tareas operativas conectadas a APIs empresariales con trazabilidad y monitoreo continuo.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  },
  {
    title: "Agentic Governance (DRDV)",
    summary: "Motor de control determinista y gobernanza de IA. Garantiza que los agentes de IA operen bajo contratos estricto de comportamiento y supervisión de control (Human-in-the-Loop).",
    category: "ops",
    tags: ["🛠️ Gobernanza IA", "Human-in-the-Loop", "Zero-Trust", "Python", "YAML", "Seguridad Operativa"],
    specs: {
      problem: "Riesgo de alucinaciones, falta de predictibilidad y ejecuciones no autorizadas de IA en operaciones críticas.",
      solution: "Runtime de validación estricta en 4 etapas (Design-Review-Decide-Validate) con observabilidad total y control humano en pasos clave.",
      statusLabel: "Framework Propietario",
      status: "production"
    }
  },
  {
    title: "Zero-Latency Local-First Sync",
    summary: "Arquitectura de aplicaciones móviles y corporativas cifradas en el dispositivo (Edge Computing), con respuesta inmediata a 0ms y sincronización transparente.",
    category: "ops",
    tags: ["🛠️ Desarrollo a Medida", "Local-First", "Kotlin", "Jetpack Compose", "AES-256", "Zero-Latency"],
    specs: {
      problem: "Interrupciones operativas en campo por falta de conectividad a internet y lentitud en sincronización.",
      solution: "Almacenamiento cifrado en reposo (AES-256), operatividad 100% offline y motor de sincronización eventual sin bloqueo de interfaz.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  },
  {
    title: "Enterprise Private AI & GraphRAG",
    summary: "Asistente de IA corporativo y análisis de documentos 100% privativo. Desplegado en Servidores Privados (VPC) o Local On-Premise sin riesgo de fuga de datos.",
    category: "data",
    tags: ["🚀 Despliegue Privado", "GraphRAG Privado", "Servidor Privado / On-Premise", "FastAPI", "SOC 2 / GDPR", "Cero Fuga de Datos"],
    specs: {
      problem: "Riesgo de filtración de IP corporativa sensible y limitaciones de búsqueda en RAGs vectoriales tradicionales.",
      solution: "Aislamiento total en Servidor Privado/On-Premise con GraphRAG Híbrido, modelos SLM (Ollama/FastAPI), costo $0 por token API y cumplimiento SOC2/GDPR.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  },
  {
    title: "Corporate Data Architecture Discovery",
    summary: "Auditoría de arquitectura de datos y seguridad. Evaluación de viabilidad para modelos privativos, gobernanza de IA y estrategia de modernización digital.",
    category: "data",
    tags: ["💼 Consultoría Técnica", "Auditoría de Arquitectura", "Seguridad de Datos", "Estrategia IA"],
    specs: {
      problem: "Falta de claridad y riesgos técnicos antes de invertir en IA corporativa o renovar sistemas legados.",
      solution: "Diagnóstico de seguridad (OWASP/SOC2), modelado de datos privativo y definición de MVP técnico ejecutable.",
      statusLabel: "Consultoría Técnica",
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
              Soluciones de Software & IA Corporativa
            </span>
            <h1>Arquitectura de Software, IA Privada & E-Commerce Propietario</h1>
            <p className="lead">
              Diseñamos e integramos soluciones de software de alto impacto empresarial: plataformas e-commerce propias sub-segundo, automatizaciones operativas con IA privada en servidor propio y arquitecturas de datos cifradas.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#contacto">
                Agendar Consulta <ArrowUpRight size={18} />
              </a>
              <a className="button" href="#soluciones">
                Explorar Soluciones
              </a>
            </div>
          </div>

        </section>

        {/* Section Soluciones */}
        <section className="section" id="soluciones">
          <div className="container">
            <div className="section-heading">
              <h2>Servicios & Soluciones Integrables</h2>
              <p>
                Soluciones de arquitectura avanzada estructuradas para las 3 áreas clave de la empresa: Ventas, Operaciones y Datos.
              </p>
            </div>

            <div className="privacy-note">
              <Shield size={18} style={{ flexShrink: 0, color: 'var(--accent)' }} />
              <span><strong>Nota de Privacidad y Cumplimiento:</strong> Todas las soluciones de IA y datos se despliegan en <strong>Servidores Privados (VPC) o Local On-Premise</strong> bajo normas SOC 2, ISO 27001, GDPR, HIPAA y cifrado AES-256 (cero compartición con terceros).</span>
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

        {/* Section Modelos de Trabajo */}
        <section className="section" id="modelos" style={{ background: 'var(--paper)', borderTop: 'var(--border-thick)', borderBottom: 'var(--border-thick)' }}>
          <div className="container">
            <div className="section-heading">
              <h2>Modelos de Trabajo & Integración</h2>
              <p>Formatos flexibles de colaboración adaptados a las necesidades y ritmo de tu empresa.</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--commerce-color)', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>1-2 SEMANAS</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Audit & Technical Advisory</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Auditoría integral de arquitectura técnica, velocidad e-commerce, diagnóstico de seguridad (OWASP/SOC2) y mapa de ruta para integración de IA privativa en tus servidores.</p>
              </div>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--ai-color)', color: '#fff', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>2-4 SEMANAS</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Rapid Solution Integration</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Despliegue e integración acelerada de nuestra plataforma e-commerce propia, agentes de IA u operacional privativa en tu servidor privado o infraestructura local.</p>
              </div>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--local-color)', color: '#fff', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>CONTINUO</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Fractional Lead Architecture</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Liderazgo técnico estratégico y acompañamiento de arquitectura continuo para dirigir las decisiones tecnológicas y optimizaciones clave de tu equipo de desarrollo.</p>
              </div>
            </div>
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
