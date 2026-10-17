import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2,
  Clock,
  Mail,
  MessageSquare,
  Linkedin
} from "lucide-react";
import { siteConfig } from "./config/site";

const categories = [
  { id: "all", label: "Todas las Prácticas" },
  { id: "data", label: "📊 Ingeniería de Datos & BI" },
  { id: "ai", label: "⚙️ Automatización & Agentes IA" },
  { id: "vision", label: "📄 Procesamiento Documental & Visión" },
  { id: "ml", label: "📈 Modelos Predictivos & RAG" }
] as const;

interface PracticeArea {
  title: string;
  summary: string;
  category: "data" | "ml" | "ai" | "vision";
  tags: string[];
  specs: {
    problem: string;
    solution: string;
    statusLabel: string;
    status: "production" | "beta" | "concept";
  };
}

const practiceAreas: PracticeArea[] = [
  {
    title: "Ingeniería de Datos & Inteligencia Operativa (BI / ETL)",
    summary: "Extracción, normalización y consolidación automatizada de información dispersa (ERP, CRM, sistemas contables y planillas) en almacenes analíticos centralizados con monitoreo de integridad y tableros ejecutivos en tiempo real.",
    category: "data",
    tags: ["Pipelines ETL / ELT", "Calidad & Gobierno de Datos", "Integración ERP / CRM", "PostgreSQL & SQL", "Tableros Ejecutivos BI", "Entrega en 2 a 3 Semanas"],
    specs: {
      problem: "Decisiones demoradas por información fragmentada entre el ERP, el CRM y múltiples hojas de cálculo manuales propensas a error.",
      solution: "Tuberías automatizadas de ingesta y limpieza con contratos de datos validados, alertas de desvío y visualización ejecutiva unificada.",
      statusLabel: "CICLO DE 2 A 3 SEMANAS",
      status: "production"
    }
  },
  {
    title: "Automatización de Procesos & Agentes de IA Operativos",
    summary: "Diseño y despliegue de flujos de trabajo asistidos por agentes de software que conectan tus sistemas actuales por API, procesan solicitudes entrantes, concilian información y operan bajo reglas de negocio estrictas con supervisión humana.",
    category: "ai",
    tags: ["Automatización de Backoffice", "Integración de Sistemas & APIs", "Protocolo MCP & Tool-Calling", "Supervisión Human-in-the-Loop", "Triage de Comunicaciones", "Docker Contenedores"],
    specs: {
      problem: "Equipos calificados perdiendo horas diarias en carga manual de datos, cruce de planillas, seguimiento de correos operativos y tareas repetitivas entre sistemas.",
      solution: "Agentes operativos con contratos de comportamiento deterministas e integración directa a bases de datos y ERPs con puntos de validación humana.",
      statusLabel: "CICLO DE 2 A 4 SEMANAS",
      status: "production"
    }
  },
  {
    title: "Procesamiento Documental Inteligente (OCR) & Visión Computacional",
    summary: "Sistemas automatizados para la lectura, extracción estructurada y validación fiscal de documentos comerciales (facturas, remitos, órdenes de compra), junto con modelos de inspección visual para control de calidad y operaciones en planta.",
    category: "vision",
    tags: ["Extracción Documental (IDP / OCR)", "Validación Fiscal & QR AFIP/ARCA", "Conciliación Contable", "Inspección Visual de Calidad", "YOLOv8 & OpenCV", "Procesamiento Local / Privado"],
    specs: {
      problem: "Cuellos de botella administrativos por carga manual de comprobantes físicos/PDFs, discrepancias de facturación y controles visuales lentos en línea operativa.",
      solution: "Motores de lectura óptica y validación automática listos para imputar en el sistema de gestión, y pipelines de visión artificial calibrados para operación continua.",
      statusLabel: "CICLO DE 3 A 4 SEMANAS",
      status: "production"
    }
  },
  {
    title: "Modelos Predictivos & Sistemas de Conocimiento Privado (RAG)",
    summary: "Modelos estadísticos de Machine Learning orientados al balance financiero (pronóstico de demanda, optimización de stock y retención de clientes) y buscadores corporativos sobre documentación interna alojados en infraestructura privada.",
    category: "ml",
    tags: ["Pronóstico de Demanda & Stock", "Prevención de Fuga (Churn)", "Scoring Comercial B2B", "RAG Corporativo Privado (VPC)", "Cero Fuga de Información", "Scikit-Learn / XGBoost / MLflow"],
    specs: {
      problem: "Compras de inventario reactivas, pérdida imprevista de clientes comerciales e imposibilidad de consultar manuales o contratos sin exponer datos sensibles.",
      solution: "Modelos predictivos supervisados entrenados sobre tu historial operativo y repositorios de consulta semántica con trazabilidad de fuentes en servidores propios.",
      statusLabel: "CICLO DE 3 A 4 SEMANAS",
      status: "production"
    }
  }
];

const teamMembers = [
  {
    name: "Ezequiel Vecchio",
    role: "Client Partner & Project Manager",
    sub: "Dirección de Proyectos, Procesos & Estrategia de Entrega",
    bio: "Licenciado en Administración (UTN FRBA). Especialista en dirección de proyectos tecnológicos de punta a punta, relevamiento funcional (BPMN) y arquitectura de soluciones operativas. Con trayectoria previa gestionando cuentas corporativas en Europa y LATAM (Syntax), lidera el diagnóstico de negocio, la definición de alcance (SOW) y el cumplimiento en tiempo y forma.",
    tags: ["Project Management", "Discovery & Alcance (SOW)", "Procesos BPMN & UAT", "Metodologías Ágiles"]
  },
  {
    name: "Emanuel Vecchio",
    role: "Lead Software Engineer & Computer Vision Specialist",
    sub: "Arquitectura Backend, Sistemas Agénticos & Visión Artificial",
    bio: "Especialista en diseño y desarrollo de arquitecturas backend de alto rendimiento (Python/FastAPI, Node.js), microservicios contenerizados en Docker, orquestación de agentes con integración de herramientas y sistemas de visión computacional y extracción documental (OCR) en producción.",
    tags: ["FastAPI & Python", "Docker & Microservicios", "Computer Vision & OCR", "Integración de Sistemas"]
  },
  {
    name: "Eugenio Rezende",
    role: "Lead Data Scientist & Machine Learning Engineer",
    sub: "Ingeniería de Datos, Modelado Predictivo & Sistemas RAG",
    bio: "Especialista en auditoría de silos de información, diseño de pipelines automatizados de ingesta y calidad de datos (ETL), modelado estadístico y predictivo supervisado (demanda, churn, scoring comercial), buscadores corporativos vectoriales y trazabilidad con MLflow.",
    tags: ["Pipelines ETL & Data Quality", "Machine Learning Supervisado", "RAG Corporativo Privado", "MLflow & Analítica"]
  }
];

const implementationCases = [
  {
    title: "Conciliación Documental & Auditoría Fiscal Automatizada",
    badge: "ADMINISTRACIÓN, FINANZAS & COMPRAS",
    badgeColor: "var(--local-color)",
    desc: "Captura automática de facturas, remitos y comprobantes desde correo o repositorio; extracción estructurada de ítems, validación fiscal automatizada (QR AFIP/ARCA y padrones) y normalización de proveedores para imputación directa en el ERP, reduciendo tiempos de carga y errores humanos en más de un 80%.",
    tags: ["Extracción OCR Estructurada", "Validación Fiscal Automática", "Normalización de Proveedores", "Integración Contable / ERP"]
  },
  {
    title: "Mesa de Entradas Inteligente & Triage Operativo",
    badge: "OPERACIONES, COMERCIAL & LOGÍSTICA",
    badgeColor: "var(--ai-color)",
    desc: "Agentes conectados a las casillas operativas y portales de la empresa que clasifican solicitudes entrantes (órdenes de compra, reclamos, documentación técnica), extraen archivos adjuntos, priorizan urgencias críticas y preparan la acción en el sistema de gestión bajo validación humana (Human-in-the-Loop).",
    tags: ["Triage de Comunicaciones", "Integración Microsoft Graph / IMAP", "Automatización de Backoffice", "Supervisión Humana"]
  },
  {
    title: "Repositorio de Conocimiento Técnico & Legal en Entorno Privado",
    badge: "DIRECCIÓN, LEGALES & OPERACIONES TÉCNICAS",
    badgeColor: "var(--accent)",
    desc: "Centralización e indexación de contratos, pliegos de licitación, manuales operativos y normativas internas en servidores privados (VPC u On-Premise). Permite realizar consultas complejas en lenguaje natural obteniendo respuestas precisas con cita exacta al documento y página original, con cero fuga de datos.",
    tags: ["Enterprise RAG Privado", "Búsqueda Híbrida & Semántica", "Citución Exacta de Fuentes", "Privacidad Corporativa Total"]
  },
  {
    title: "Tablero de Rentabilidad Unitaria & Pronóstico de Demanda",
    badge: "RETAIL, DISTRIBUCIÓN, MANUFACTURA & SERVICIOS",
    badgeColor: "var(--accent-hover)",
    desc: "Unificación automática de ventas, costos logísticos, tiempos operativos e inventario disperso para calcular márgenes reales por línea de producto o servicio en tiempo real, combinando tableros gerenciales con modelos predictivos de reposición de stock y alerta temprana de clientes inactivos.",
    tags: ["Consolidación ERP + Planillas", "Rentabilidad Unitaria Real", "Predicción de Stock & Churn", "Tableros Ejecutivos en Vivo"]
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    const subject = encodeURIComponent(
      `Solicitud de Diagnóstico Técnico — ${formState.company || formState.name}`
    );
    const body = encodeURIComponent(
      `Nombre: ${formState.name}\nEmpresa: ${formState.company || "No especificada"}\nEmail: ${formState.email}\n\nDesafío / Consulta:\n${formState.message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setFormStatus("success");
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hola Ezequiel, visité el sitio de FVision y me gustaría coordinar una sesión de diagnóstico técnico para mi empresa."
  )}`;

  const filteredPractices = selectedCategory === "all"
    ? practiceAreas
    : practiceAreas.filter(p => p.category === selectedCategory);

  const getStatusIcon = (status: PracticeArea["specs"]["status"]) => {
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
            <span className="brand-role">Engineering & Applied AI</span>
          </div>
        </a>

        <div className="header-badge">
          <span className="status-indicator" />
          Consultoría B2B • Ciclos de 2 a 4 Semanas
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container hero">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> 
              Time-to-Value en 2 a 4 Semanas • Alcance Cerrado • Cero Burocracia
            </span>
            <h1>
              <span style={{ display: 'block' }}>Ingeniería de Datos, IA Aplicada</span>
              <span style={{ display: 'block' }}>y Automatización para Operaciones Reales</span>
            </h1>
            <p className="lead">
              Transformamos procesos manuales, documentos dispersos y silos de información en sistemas productivos integrados a la operación de tu empresa. Soluciones de alcance cerrado diseñadas y desplegadas por especialistas senior en ciclos ágiles de 2 a 4 semanas.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#contacto">
                Solicitar Diagnóstico Técnico <ArrowUpRight size={18} />
              </a>
              <a className="button" href="#soluciones">
                Explorar Áreas de Práctica
              </a>
            </div>
          </div>
        </section>

        {/* Section Áreas de Práctica */}
        <section className="section" id="soluciones">
          <div className="container">
            <div className="section-heading">
              <h2>Áreas de Práctica & Servicios de Ingeniería</h2>
              <p>
                Abordamos cuellos de botella operativos y analíticos mediante cuatro áreas de práctica de ingeniería, con entregables productivos, arquitectura contenerizada y retorno de inversión medible desde el primer mes.
              </p>
            </div>

            {/* Tabs de Filtro */}
            <div className="filter-tabs" role="tablist" aria-label="Filtrar por área de práctica">
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
                {filteredPractices.map((practice) => (
                  <motion.article 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="project-card" 
                    key={practice.title}
                  >
                    <div className="card-title-row">
                      <h3>{practice.title}</h3>
                      <span className="status-badge">
                        {getStatusIcon(practice.specs.status)}
                        {practice.specs.statusLabel}
                      </span>
                    </div>
                    
                    <p className="project-summary">{practice.summary}</p>
                    
                    <div className="project-specs">
                      <div className="spec-item">
                        <span className="spec-label">DESAFÍO EMPRESARIAL</span>
                        <span className="spec-value">{practice.specs.problem}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">SOLUCIÓN DE INGENIERÍA</span>
                        <span className="spec-value">{practice.specs.solution}</span>
                      </div>
                    </div>

                    <div className="tag-list">
                      {practice.tags.map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Section Casos de Implementación */}
        <section className="section" id="casos" style={{ background: 'var(--paper)', borderTop: 'var(--border-thick)', borderBottom: 'var(--border-thick)' }}>
          <div className="container">
            <div className="section-heading">
              <h2>Casos de Aplicación & Soluciones Corporativas</h2>
              <p>Arquitecturas probadas y módulos de ingeniería desarrollados por FVision, listos para adaptarse e integrarse a los sistemas de tu organización sin interrumpir la operación diaria.</p>
            </div>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {implementationCases.map((item) => (
                <div key={item.title} style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-md)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: item.badgeColor || 'var(--vision-color)', color: item.badgeColor ? '#fff' : 'inherit', fontFamily: 'monospace', fontSize: '0.72rem', fontWeight: 700, marginBottom: '0.85rem', width: 'fit-content' }}>
                    {item.badge}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>{item.desc}</p>
                  <div className="tag-list" style={{ marginTop: 'auto' }}>
                    {item.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Célula Senior */}
        <section className="section" id="equipo">
          <div className="container">
            <div className="section-heading">
              <h2>Liderazgo & Célula de Consultores Senior</h2>
              <p>Interlocución directa con los responsables del diseño y la ejecución. Sin capas burocráticas ni delegación en perfiles sin experiencia operativa.</p>
            </div>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {teamMembers.map((member) => (
                <div key={member.name} style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-md)', padding: '1.75rem', background: 'var(--paper)', boxShadow: 'var(--shadow-flat)' }}>
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

        {/* Section Metodología de Trabajo */}
        <section className="section" id="metodologia" style={{ background: 'var(--paper)', borderTop: 'var(--border-thick)', borderBottom: 'var(--border-thick)' }}>
          <div className="container">
            <div className="section-heading">
              <h2>Metodología de Trabajo & Compromiso</h2>
              <p>Un proceso transparente estructurado por hitos verificables, diseñado para eliminar la incertidumbre técnica y asegurar entregas puntuales.</p>
            </div>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--vision-color)', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>ETAPA 1: DIAGNÓSTICO</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Auditoría & Viabilidad Técnica</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Sesión ejecutiva de 30 minutos sin cargo para relevar el cuello de botella operativo, auditar la estructura de datos existente y definir la arquitectura de solución con mayor impacto en rentabilidad.</p>
              </div>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--ai-color)', color: '#fff', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>ETAPA 2: EJECUCIÓN (2 A 4 SEMANAS)</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Implementación de Alcance Cerrado</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Trabajo sobre un Anexo Técnico (SOW) con plazos y entregables fijos. Desarrollo modular, integración con tus sistemas actuales, despliegue en contenedores Docker reproducibles y pruebas de aceptación (UAT).</p>
              </div>
              <div style={{ border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', background: 'var(--bg)', boxShadow: 'var(--shadow-flat)' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.6rem', border: 'var(--border-thick)', borderRadius: 'var(--radius-sm)', background: 'var(--local-color)', color: '#fff', fontWeight: 700, fontSize: '0.75rem', marginBottom: '1rem' }}>ETAPA 3: EVOLUCIÓN</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Soporte & Mejora Continua</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.5 }}>Transferencia completa de documentación operativa y opción de acompañamiento mensual (Retainers) para monitoreo de modelos, mantenimiento de integraciones y desarrollo de nuevas capacidades.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contacto */}
        <section className="section" id="contacto">
          <div className="container">
            <div className="contact-panel">
              <span className="eyebrow contact-eyebrow">Diagnóstico Ejecutivo</span>
              <h2>¿Evaluamos una Solución para tu Operación?</h2>
              <p>
                Coordinemos una reunión de diagnóstico técnico de 30 minutos para analizar tu caso de uso, evaluar los datos e infraestructura disponibles y trazar una propuesta de alcance cerrado.
              </p>

              <div className="actions" style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                <a
                  className="button button-primary"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare size={17} style={{ marginRight: '6px' }} />
                  Coordinar por WhatsApp
                </a>
                <a
                  className="button"
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Consulta sobre Servicios de Ingeniería — FVision")}`}
                >
                  <Mail size={17} style={{ marginRight: '6px' }} />
                  Escribir por Correo
                </a>
                <a
                  className="button"
                  href={siteConfig.companyLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={17} style={{ marginRight: '6px' }} />
                  LinkedIn Corporativo
                </a>
              </div>

              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre y Apellido</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="form-input"
                    placeholder="Tu nombre completo"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Empresa y Cargo</label>
                  <input
                    type="text"
                    id="company"
                    className="form-input"
                    placeholder="Ej.: Empresa S.A. — Director de Operaciones"
                    value={formState.company}
                    onChange={(e) => setFormState(prev => ({ ...prev, company: e.target.value }))}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Corporativo</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="form-input"
                    placeholder="nombre@empresa.com"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Desafío Operativo o Proyecto a Evaluar</label>
                  <textarea
                    id="message"
                    required
                    className="form-input form-textarea"
                    placeholder="Comentanos brevemente qué proceso, flujo documental o sistema de datos buscás optimizar..."
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
                  {formStatus === "submitting" ? "Preparando envío..." : "Solicitar Diagnóstico Inicial"}
                </button>

                {formStatus === "success" && (
                  <div className="form-status success" style={{ marginTop: '1rem' }}>
                    Se abrió tu cliente de correo con los datos de la solicitud. También podés contactarnos directamente por WhatsApp para una respuesta inmediata.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer">
        © {new Date().getFullYear()} {siteConfig.name} — Consultoría de Ingeniería de Software, Datos e Inteligencia Artificial Aplicada.
      </footer>
    </div>
  );
}
