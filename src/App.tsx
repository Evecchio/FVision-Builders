import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2,
  Clock,
  Database,
  LineChart,
  Bot,
  Eye,
  ShieldCheck,
  Zap,
  Smartphone,
  Layers
} from "lucide-react";
import { siteConfig } from "./config/site";

const categories = [
  { id: "all", label: "Todas las Soluciones" },
  { id: "data", label: "📊 Ingeniería de Datos" },
  { id: "ai", label: "🤖 Soluciones de IA" }
] as const;

interface Solution {
  title: string;
  summary: string;
  category: "data" | "ai";
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
    title: "Pipelines de Datos & Data Quality",
    summary: "Extracción, limpieza y consolidación de datos dispersos (ERP, CRM, hojas de cálculo) en almacenes centralizados con monitoreo de integridad y tableros ejecutivos en tiempo real.",
    category: "data",
    tags: ["ETL / ELT", "Data Quality", "PostgreSQL / ClickHouse", "Python & SQL", "Dashboards Ejecutivos", "Integración ERP/CRM"],
    specs: {
      problem: "Silos de información desactualizada, reportes manuales lentos y toma de decisiones comerciales a ciegas.",
      solution: "Tuberías automatizadas de extracción y limpieza, validación semántica de datos, alertas automáticas y dashboards analíticos interactivos.",
      statusLabel: "Ingeniería & Calidad",
      status: "production"
    }
  },
  {
    title: "Soluciones de Inteligencia Artificial: Automatización & Agentes",
    summary: "Agentes de IA que coordinan y ejecutan tareas operativas complejas conectados a ERPs/CRMs bajo contratos estrictos de comportamiento y supervisión humana (Human-in-the-Loop).",
    category: "ai",
    tags: ["Tool-Calling", "LangGraph / LlamaIndex", "Human-in-the-Loop", "RAG Privado (VPC/Local)", "Cero Fuga de Datos", "Docker"],
    specs: {
      problem: "Procesos manuales repetitivos entre sistemas; riesgo de alucinaciones y fuga de datos en herramientas de IA genéricas.",
      solution: "Agentes ejecutores con Tool-Calling, orquestación contenerizada en Docker y RAG corporativo privado en VPC u On-Premise con cifrado AES-256.",
      statusLabel: "Sistemas Autónomos",
      status: "production"
    }
  },
  {
    title: "Soluciones de Inteligencia Artificial: Modelos Predictivos",
    summary: "Modelos supervisados orientados al impacto en el balance financiero: pronóstico de demanda, prevención de fuga de clientes (churn) y calificación algorítmica de prospectos comerciales.",
    category: "ai",
    tags: ["Pronóstico de Demanda", "Customer Churn", "Lead Scoring", "FastAPI", "Scikit-Learn / XGBoost", "MLflow"],
    specs: {
      problem: "Pérdida imprevista de clientes, capital inmovilizado por compras erróneas de stock y horas comerciales desperdiciadas.",
      solution: "Modelos estadísticos y de ensamble entrenados con datos del cliente, expuestos mediante endpoints API REST (FastAPI) y con observabilidad en MLflow.",
      statusLabel: "Modelos Validados",
      status: "production"
    }
  }
];

const teamMembers = [
  {
    name: "Ezequiel Vecchio",
    role: "Client Partner & Project Manager",
    sub: "Liderazgo Comercial, Relación & Gestión Ágil",
    bio: "Liderazgo comercial, prospección B2B, calificación técnica en Discovery Calls (30 min), redacción de Statements of Work (SOWs) de alcance cerrado, gestión de cronograma y cobranzas 50/50, actuando como único punto de contacto oficial (SPOC).",
    tags: ["Liderazgo Comercial", "Discovery & Scoping", "SOWs & Entregables", "Gestión Ágil"]
  },
  {
    name: "Emanuel Vecchio",
    role: "Software Engineer & Solutions Architect",
    sub: "Arquitectura Cloud, APIs & Soluciones de IA",
    bio: "Diseño y desarrollo de arquitecturas cloud/backend en Python (FastAPI) y Node.js, microservicios en Docker, orquestación de sistemas de IA con Tool-Calling, APIs de alto rendimiento e integración con infraestructura empresarial.",
    tags: ["FastAPI & Python", "Docker & Microservicios", "Soluciones de IA", "Arquitectura Cloud"]
  },
  {
    name: "Eugenio Rezende",
    role: "Data Scientist & Machine Learning Lead",
    sub: "Pipelines, Modelado Matemático & RAG",
    bio: "Auditoría de silos de datos, pipelines automatizados de ingesta y calidad (Data Quality), modelado predictivo supervisado (demanda, churn, scoring comercial), sistemas RAG vectoriales y observabilidad rigurosa con MLflow.",
    tags: ["Pipelines & Data Quality", "Machine Learning Supervisado", "Embeddings & RAG", "MLflow"]
  }
];

const showcases = [
  {
    title: "InsightDoc AI",
    badge: "SOLUCIONES DE IA & RAG PRIVADO",
    badgeColor: "var(--accent)",
    desc: "Plataforma corporativa de inteligencia artificial para análisis documental y búsqueda semántica avanzada. Procesa contratos, manuales y normativas complejas en servidor privado (VPC/Local) con citación de fuentes y cero fuga de información confidencial.",
    tags: ["RAG Corporativo Privado", "Búsqueda Semántica", "Cero Fuga de Datos (VPC)", "FastAPI & Python"]
  },
  {
    title: "OpsAgent Core",
    badge: "SOLUCIONES DE IA & AUTOMATIZACIÓN",
    badgeColor: "var(--ai-color)",
    desc: "Squad de agentes de inteligencia artificial que coordinan la conciliación operativa entre sistemas: cruzan órdenes de compra, validan comprobantes fiscales con registros bancarios y preparan asientos contables bajo supervisión humana (Human-in-the-Loop).",
    tags: ["LangGraph Multi-Agente", "Tool-Calling", "Integración ERP/CRM", "Human-in-the-Loop"]
  },
  {
    title: "DataPulse Predictor",
    badge: "INGENIERÍA DE DATOS & IA PREDICTIVA",
    badgeColor: "var(--local-color)",
    desc: "Pipeline de ingesta automatizada que alimenta modelos de inteligencia artificial supervisados para predicción de quiebre de stock y desvío de clientes (Churn Scoring), con monitoreo continuo de métricas en producción.",
    tags: ["XGBoost & Scikit-Learn", "Pipelines ETL", "MLflow Observabilidad", "Scoring Predictivo"]
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
            <span className="brand-name">FVision</span>
            <span className="brand-role">Data & AI Solutions</span>
          </div>
        </a>

        <div className="header-badge">
          <span className="status-indicator" />
          Disponible para Consultoría
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container hero">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> 
              Consultoría Boutique • Software & Soluciones de IA
            </span>
            <h1>Ingeniería de Datos & Soluciones de Inteligencia Artificial</h1>
            <p className="lead">
              Diseñamos e integramos soluciones de software de alto impacto empresarial: pipelines de datos automatizados, modelos predictivos orientados al balance financiero, agentes autónomos supervisados y asistentes privados de conocimiento.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#contacto">
                Agendar Consulta Técnica <ArrowUpRight size={18} />
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
              <h2>Servicios & Soluciones Oficiales</h2>
              <p>
                Soluciones unificadas de software y tecnología estructuradas en dos disciplinas estratégicas: Ingeniería de Datos de alta fidelidad y Soluciones de Inteligencia Artificial para el negocio.
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

        {/* Section Célula Senior */}
        <section className="section" id="equipo" style={{ background: 'var(--paper)', borderTop: 'var(--border-thick)', borderBottom: 'var(--border-thick)' }}>
          <div className="container">
            <div className="section-heading">
              <h2>Célula de Consultores Senior</h2>
              <p>Alta densidad de talento sin sobrecostos burocráticos. Tres consultores senior especializados articulados para resolver desafíos técnicos de punta a punta.</p>
            </div>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {teamMembers.map((member) => (
                <div key={member.name} style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-md)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                  <div style={{ marginBottom: '1rem', borderBottom: 'var(--border-thick)', paddingBottom: '0.85rem' }}>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.2 }}>{member.name}</h3>
                    <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent)', marginTop: '0.25rem', display: 'block', textTransform: 'uppercase' }}>{member.role}</span>
                    <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--muted)', marginTop: '0.2rem', display: 'block' }}>{member.sub}</span>
                  </div>
                  <p style={{ fontSize: '0.94rem', color: 'var(--ink)', lineHeight: 1.5, marginBottom: '1.25rem' }}>{member.bio}</p>
                  <div className="tag-list">
                    {member.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Showcases */}
        <section className="section" id="showcases">
          <div className="container">
            <div className="section-heading">
              <h2>Showcases Tecnológicos de Demostración</h2>
              <p>Sistemas reales desarrollados internamente por FVision, disponibles para demostración técnica uno a uno (screensharing) de su arquitectura, código y rendimiento operativo.</p>
            </div>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {showcases.map((s) => (
                <div key={s.title} style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-md)', padding: '1.75rem', background: 'var(--paper)', boxShadow: 'var(--shadow-flat)', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: s.badgeColor || 'var(--vision-color)', color: s.badgeColor ? '#fff' : 'inherit', fontFamily: 'monospace', fontSize: '0.72rem', fontWeight: 700, marginBottom: '0.85rem', width: 'fit-content' }}>
                    {s.badge}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>{s.desc}</p>
                  <div className="tag-list" style={{ marginTop: 'auto' }}>
                    {s.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Metodología de Trabajo */}
        <section className="section" id="metodologia" style={{ background: 'var(--paper)', borderTop: 'var(--border-thick)', borderBottom: 'var(--border-thick)' }}>
          <div className="container">
            <div className="section-heading">
              <h2>Metodología de Trabajo & Integración</h2>
              <p>Un proceso transparente y estructurado por fases, diseñado para garantizar previsibilidad técnica y resultados tangibles sin atarte a plazos forzados.</p>
            </div>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--vision-color)', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>FASE 1: DIAGNÓSTICO</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Auditoría & Viabilidad Técnica</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Sesión Discovery de 30 minutos sin cargo para auditar las fuentes de datos, procesos e infraestructura, evaluar la viabilidad técnica y trazar la arquitectura objetivo antes de iniciar.</p>
              </div>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--ai-color)', color: '#fff', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>FASE 2: EJECUCIÓN</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Implementación Modular por Hitos</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Construcción de la solución acordada, integración a los sistemas existentes (ERP/CRM/Cloud), pruebas rigurosas en staging y despliegue productivo con documentación técnica y alcance cerrado.</p>
              </div>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--local-color)', color: '#fff', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>FASE 3: CONTINUIDAD</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Acompañamiento & Retainers de Evolución</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Pólizas flexibles de horas mensuales para monitoreo preventivo de salud en pipelines, detección de drift en modelos y soporte evolutivo de nuevas capacidades técnicas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contacto */}
        <section className="section" id="contacto">
          <div className="container">
            <div className="contact-panel">
              <span className="eyebrow contact-eyebrow">Diagnóstico Inicial</span>
              <h2>¿Querés Evaluar una Solución para tu Empresa?</h2>
              <p>
                Coordinemos una sesión de diagnóstico técnico de 30 minutos (Discovery Call) para analizar tu caso de uso, datos disponibles y arquitectura ideal.
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
                    placeholder="¿En qué solución o proyecto estás interesado?"
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
                    ¡Consulta enviada con éxito! Te responderemos a la brevedad.
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="form-status error" style={{ marginTop: '1rem' }}>
                    Ocurrió un error al enviar. Intentá de nuevo o contactanos vía LinkedIn.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer">
        © {new Date().getFullYear()} {siteConfig.name} — Consultora Boutique de Ingeniería de Datos & Soluciones de Inteligencia Artificial.
      </footer>
    </div>
  );
}
