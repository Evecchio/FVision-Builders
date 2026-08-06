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
  { id: "ops", label: "⚙️ Agentes para Operaciones" },
  { id: "data", label: "📊 Analítica de Datos" },
  { id: "vision", label: "👁️ Computing Vision" }
] as const;

interface Solution {
  title: string;
  summary: string;
  category: "ops" | "data" | "vision";
  tags: string[];
  specs: {
    problem: string;
    solution: string;
    statusLabel: string;
    status: "production" | "beta" | "concept";
  };
}

const projects: Solution[] = [
  {
    title: "Enterprise Operations & AI Agents",
    summary: "Agentes de IA autónomos que coordinan y automatizan operaciones complejas entre equipos y sistemas centrales (ERP/CRM). Operan bajo contratos estrictos de comportamiento y supervisión de control (Human-in-the-Loop).",
    category: "ops",
    tags: ["🛠️ Desarrollo a Medida", "AI Multi-Agent", "Gobernanza IA", "Human-in-the-Loop", "Zero-Trust", "Integración ERP/CRM"],
    specs: {
      problem: "Cuellos de botella operativos, tareas manuales repetitivas y riesgo de alucinaciones en sistemas de IA.",
      solution: "Agentes ejecutores de tareas operativas con validación estricta en 4 etapas (DRDV Framework), observabilidad total y control humano en pasos críticos.",
      statusLabel: "Listo para Integración",
      status: "production"
    }
  },
  {
    title: "Private AI Data System",
    summary: "Sistema de análisis de documentos y datos corporativos (GraphRAG / RAG Híbrido) ejecutado exclusivamente en Servidores Privados (VPC) o Servidor Local On-Premise sin riesgo de fuga de información.",
    category: "data",
    tags: ["🚀 Despliegue Privado", "GraphRAG Privado", "Servidor Privado / On-Premise", "AES-256", "SOC 2 / GDPR", "Cero Fuga de Datos"],
    specs: {
      problem: "Riesgo de filtración de IP sensible y limitaciones de búsqueda en sistemas tradicionales de datos.",
      solution: "Infraestructura privativa aislada con modelos SLM (Ollama/FastAPI), costo $0 por token API, cifrado AES-256 y cumplimiento SOC 2/GDPR.",
      statusLabel: "Despliegue Privado",
      status: "production"
    }
  },
  {
    title: "Computing Vision & Real-Time Inspection",
    summary: "Sistemas de visión artificial e inspección inteligente en tiempo real para detección de objetos, control de calidad automatizado, análisis de video y procesamiento visual mediante Edge AI y cámaras conectadas.",
    category: "vision",
    tags: ["👁️ Real-Time Detection", "Edge AI & YOLO", "Control de Calidad", "Reconocimiento de Patrones", "OpenCV / PyTorch", "Procesamiento Privado"],
    specs: {
      problem: "Inspección manual lenta, errores humanos en control de calidad e incapacidad de monitorear flujos visuales 24/7.",
      solution: "Modelos de Visión Artificial optimizados para inferencia local en tiempo real con alertas automáticas e integración a tableros de control.",
      statusLabel: "Solución Propietaria",
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
  "OpenCV",
  "PyTorch",
  "YOLO",
  "Computer Vision",
  "Edge AI",
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

  const getStatusIcon = (status: Solution["specs"]["status"]) => {
    switch (status) {
      case "production":
        return <CheckCircle2 size={15} className="status-icon production" />;
      case "beta":
        return <Clock size={15} className="status-icon beta" />;
      case "concept":
        return <Sparkles size={15} className="status-icon concept" />;
    }
  };

  return (
    <div className="app-wrapper">
      {/* Dynamic Background Grid */}
      <div className="bg-grid" />

      {/* Header / Navbar */}
      <header className="header container">
        <a href="#top" className="brand">
          <div className="brand-logo">FV</div>
          <div className="brand-info">
            <span className="brand-name">Ezequiel Vecchio</span>
            <span className="brand-role">Software Solutions & AI</span>
          </div>
        </a>

        <div className="header-badge">
          <span className="status-indicator" />
          Disponible para Proyectos
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container hero">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> 
              Soluciones de Software & IA Corporativa
            </span>
            <h1>Agentes de IA, Inteligencia de Datos & Computing Vision</h1>
            <p className="lead">
              Diseñamos e integramos soluciones de software de alto impacto empresarial: automatizaciones operativas con IA en servidor propio, sistemas de analítica de datos cifrados y soluciones de Computing Vision en tiempo real.
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
                Soluciones unificadas de software y tecnología estructuradas para las 3 áreas clave de la empresa: Agentes para Operaciones, Analítica de Datos y Computing Vision.
              </p>
            </div>

            <div className="privacy-note">
              <Shield size={18} style={{ flexShrink: 0, color: 'var(--accent)' }} />
              <span><strong>Nota de Privacidad y Cumplimiento:</strong> Todas las soluciones de IA, visión y datos se despliegan en <strong>Servidores Privados (VPC) o Local On-Premise</strong> bajo normas SOC 2, ISO 27001, GDPR, HIPAA y cifrado AES-256 (cero compartición con terceros).</span>
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
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--vision-color)', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>1-2 SEMANAS</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Audit & Technical Advisory</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Auditoría integral de sistemas técnicos, arquitectura de visión/datos, diagnóstico de seguridad (OWASP/SOC2) y mapa de ruta para integración de IA privativa en tus servidores.</p>
              </div>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--ai-color)', color: '#fff', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>2-4 SEMANAS</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Rapid Solution Integration</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Despliegue e integración acelerada de nuestros sistemas de Computing Vision, agentes de IA u operacional privativa en tu servidor privado o infraestructura local.</p>
              </div>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--local-color)', color: '#fff', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>CONTINUO</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Fractional Lead Engineering</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Liderazgo técnico estratégico y acompañamiento continuo para dirigir las decisiones tecnológicas y optimizaciones clave de tu equipo de desarrollo.</p>
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
