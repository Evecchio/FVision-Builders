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
  Shield,
  Lock
} from "lucide-react";
import { siteConfig } from "./config/site";
import repositoriesData from "./data/repositories.json";

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
    tags: ["🚀 Despliegue Privado (VPC / On-Premise)", "GraphRAG Privado", "AES-256", "SOC 2 / ISO 27001 / GDPR / HIPAA", "Cero Fuga de Datos"],
    specs: {
      problem: "Riesgo de filtración de IP sensible y limitaciones de búsqueda en sistemas tradicionales de datos.",
      solution: "Infraestructura privativa aislada en VPC u On-Premise con modelos SLM (Ollama/FastAPI), costo $0 por token API, cifrado AES-256 y cumplimiento de normas SOC 2, ISO 27001, GDPR y HIPAA.",
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



export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleRequestDemo = (projectName: string) => {
    setFormState(prev => ({
      ...prev,
      message: `Hola Ezequiel, me interesa conocer más sobre la arquitectura y solicitar una demostración técnica guiada de "${projectName}".`
    }));
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                        <span className="spec-label">PROBLEMA</span>
                        <span className="spec-value">{project.specs.problem}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">SOLUCIÓN</span>
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

        {/* Section Repositorios Protegidos */}
        <section className="section" id="repositorios" style={{ borderTop: 'var(--border-thick)' }}>
          <div className="container">
            <div className="section-heading">
              <h2>Catálogo de Repositorios & Software</h2>
              <p>
                Proyectos de software corporativo y arquitecturas desarrolladas por FVision. El código fuente está protegido bajo acuerdos de propiedad intelectual.
              </p>
            </div>

            {/* Banner de Protección de Código */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              background: '#FFFBEB',
              border: 'var(--border-thick)',
              borderLeft: '6px solid #D97706',
              borderRadius: 'var(--radius-sm)',
              padding: '1rem 1.25rem',
              marginBottom: '2rem',
              boxShadow: 'var(--shadow-flat)'
            }}>
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>🔒</span>
              <div>
                <h4 style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#92400E',
                  marginBottom: '0.25rem'
                }}>
                  Repositorios Privados & Propiedad Intelectual Resguardada
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#78350F', lineHeight: 1.45, fontWeight: 550 }}>
                  Para proteger los activos comerciales y la ventaja competitiva de nuestras soluciones, los repositorios de producción se mantienen en modo privado sin acceso a clonado o descarga directa. Para auditorías de arquitectura o revisión técnica, puedes solicitar una demostración guiada en vivo (screensharing).
                </p>
              </div>
            </div>

            {/* Grid de Repositorios */}
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
              {repositoriesData.map((repo) => (
                <article
                  key={repo.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'var(--paper)',
                    border: 'var(--border-thick)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.6rem',
                    boxShadow: 'var(--shadow-flat)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily: '"Fira Code", monospace',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--muted)',
                      background: 'var(--bg)',
                      padding: '0.2rem 0.55rem',
                      border: '1px solid var(--ink)',
                      borderRadius: 'var(--radius-sm)'
                    }}>
                      Evecchio / {repo.name}
                    </span>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.25rem 0.6rem',
                      border: '1.5px solid var(--ink)',
                      borderRadius: 'var(--radius-sm)',
                      fontFamily: '"Fira Code", monospace',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      boxShadow: '1px 1px 0px 0px var(--ink)',
                      background: repo.isPrivate ? '#FEE2E2' : '#DCFCE7',
                      color: repo.isPrivate ? '#991B1B' : '#166534'
                    }}>
                      {repo.isPrivate ? '🔒 Código Privado' : '🌐 Showcase Público'}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    lineHeight: 1.2,
                    marginBottom: '0.6rem'
                  }}>
                    {repo.displayName}
                  </h3>

                  <p style={{
                    color: 'var(--muted)',
                    fontSize: '0.94rem',
                    lineHeight: 1.5,
                    fontWeight: 550,
                    marginBottom: '1.25rem',
                    flexGrow: 1
                  }}>
                    {repo.description}
                  </p>

                  <div className="tag-list" style={{ marginBottom: '1.25rem' }}>
                    {repo.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1rem',
                    borderTop: 'var(--border-thick)',
                    marginTop: 'auto',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      fontFamily: '"Fira Code", monospace',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}>
                      <span style={{
                        width: '9px',
                        height: '9px',
                        borderRadius: '50%',
                        border: '1px solid var(--ink)',
                        display: 'inline-block',
                        background: 'var(--accent)'
                      }} />
                      {repo.language}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleRequestDemo(repo.displayName)}
                      className="button"
                      style={{
                        padding: '0.45rem 0.9rem',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                    >
                      Solicitar Demo &rarr;
                    </button>
                  </div>
                </article>
              ))}
            </div>
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
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Diagnóstico & Planificación Técnica</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Evaluación integral de la infraestructura existente, análisis de requisitos técnicos y diseño del mapa de ruta para definir la arquitectura ideal antes de comenzar cualquier implementación.</p>
              </div>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--ai-color)', color: '#fff', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>2-4 SEMANAS</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Integración & Despliegue Acelerado</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Implementación, configuración y conexión de la solución en la infraestructura elegida, asegurando pruebas de calidad, cumplimiento de seguridad y un traspaso operativo sin fricciones.</p>
              </div>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--local-color)', color: '#fff', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>CONTINUO</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Acompañamiento & Optimización Continua</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Seguimiento técnico post-despliegue, liderazgo estratégico y optimización constante para garantizar el rendimiento, la escalabilidad y la adaptación a nuevas necesidades.</p>
              </div>
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
