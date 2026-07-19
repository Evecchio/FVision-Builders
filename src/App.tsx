const projects = [
  {
    title: "Ivana Design — Tiendanube",
    summary:
      "Personalización y mejora visual de una tienda activa, con trabajo concentrado en la experiencia del carrito y la presentación responsive.",
    work:
      "Jerarquía visual del carrito, alineación de encabezados, claridad de precios y cantidades, acción de eliminación, tarjetas de producto y optimización de recursos CSS.",
    status: "Experiencia aplicada sobre una tienda real. Código y datos comerciales reservados.",
    tags: ["E-commerce", "CSS", "Responsive UI", "Cart UX", "Tiendanube"],
  },
  {
    title: "Personal Virtual Store",
    summary:
      "Construcción de una tienda independiente basada en contenido comercial real, con catálogo, navegación por categorías y flujo de compra.",
    work:
      "Página principal, buscador, categorías, tarjetas y detalle de producto, variantes, precios, promociones, navegación y carrito.",
    status:
      "Interfaz funcional. La integración propia de pagos y envíos está documentada como pendiente.",
    tags: ["Next.js 15", "React 19", "TypeScript", "Catálogo", "Carrito"],
  },
  {
    title: "Expense Tracker",
    summary:
      "Prototipo Android para registrar gastos automáticamente a partir de notificaciones de aplicaciones de pago autorizadas.",
    work:
      "Servicio de lectura de notificaciones, parser de gastos, persistencia local, listado de movimientos y compilación automatizada de APK.",
    status: "Aplicación local con Room y pipeline de compilación mediante GitHub Actions.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Android", "GitHub Actions"],
  },
  {
    title: "Atento",
    summary:
      "Diseño de producto para un asistente financiero personal, privado y offline, pensado para usuarios que gestionan su economía principalmente desde el celular.",
    work:
      "Visión, definición del problema, perfiles de usuario, requisitos, arquitectura, modelo de datos, pila de IA local y hoja de ruta.",
    status: "Etapa de descubrimiento, definición de MVP y validación de mercado.",
    tags: ["Product Discovery", "Local-first", "Arquitectura", "IA local", "Fintech"],
  },
  {
    title: "DRDV Agent Framework",
    summary:
      "Framework para construir agentes y subagentes basados en roles, contratos formales y validación mediante evidencia.",
    work:
      "Runtime, orquestador, protocolos de herramientas y memoria, modelo de eventos, observabilidad, contratos YAML y especificaciones de arquitectura.",
    status: "Arquitectura fundacional en desarrollo bajo el ciclo Design, Review, Decide y Validate.",
    tags: ["Python", "Agent Architecture", "Validation", "Observability", "Protocols"],
  },
  {
    title: "IAO — Agente Ibot",
    summary:
      "Microservicio autónomo y auditable con ejecución local por defecto, memoria RAG y control explícito del acceso externo.",
    work:
      "Runtime local con Ollama, orquestador iterativo, API FastAPI, interfaz de chat, memoria Chroma y política de egress con auditoría.",
    status: "El acceso externo se deniega por defecto y se habilita únicamente mediante whitelist.",
    tags: ["Python", "FastAPI", "Ollama", "RAG", "Chroma", "Auditoría"],
  },
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
];

export default function App() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <nav className="container nav-bar" aria-label="Navegación principal">
          <a className="brand" href="#top">
            Ezequiel Vecchio
          </a>
          <div className="nav-links">
            <a href="#experiencias">Experiencias</a>
            <a href="#tecnologias">Tecnologías</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="container hero">
          <div className="hero-copy">
            <p className="eyebrow">Experiencias y proyectos privados</p>
            <h1>Trabajo técnico documentado.</h1>
            <p className="lead">
              Soy Ezequiel Vecchio. Esta web reúne experiencias reales en comercio electrónico,
              aplicaciones móviles, producto digital, agentes de inteligencia artificial y sistemas
              local-first.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#experiencias">
                Ver experiencias
              </a>
              <a className="button" href="mailto:eivecchio@hotmail.com">
                Contacto
              </a>
            </div>
          </div>

          <aside className="summary-card" aria-label="Resumen profesional">
            <p className="summary-label">Resumen</p>
            <h2>Seis proyectos privados</h2>
            <p>
              Se describen objetivos, responsabilidades, tecnologías y estado sin publicar código,
              credenciales ni información comercial sensible.
            </p>
            <div className="summary-grid">
              <div><strong>Web</strong><span>E-commerce e interfaces</span></div>
              <div><strong>Mobile</strong><span>Android y datos locales</span></div>
              <div><strong>IA</strong><span>Agentes, RAG y Ollama</span></div>
              <div><strong>Producto</strong><span>Descubrimiento y arquitectura</span></div>
            </div>
          </aside>
        </section>

        <section className="section" id="experiencias">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Experiencia verificable</p>
                <h2>Proyectos privados</h2>
              </div>
              <p>
                Los repositorios no se enlazan porque su acceso está restringido. Las descripciones
                se basan en su documentación y su historial de implementación.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="card-title-row">
                    <h3>{project.title}</h3>
                    <span className="private-label">Privado</span>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-detail">
                    <strong>Trabajo realizado</strong>
                    <p>{project.work}</p>
                  </div>
                  <div className="project-detail">
                    <strong>Estado</strong>
                    <p>{project.status}</p>
                  </div>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="tecnologias">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Herramientas utilizadas</p>
                <h2>Tecnologías</h2>
              </div>
              <p>Capacidades observadas directamente en los proyectos incluidos en esta web.</p>
            </div>
            <div className="skills-list">
              {skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="section" id="contacto">
          <div className="container contact-panel">
            <p className="eyebrow contact-eyebrow">Contacto</p>
            <h2>Más información sobre mi experiencia</h2>
            <p>
              Puedo ampliar el contexto de cada proyecto o realizar una demostración controlada sin
              exponer información privada.
            </p>
            <div className="actions contact-actions">
              <a className="button button-light" href="mailto:eivecchio@hotmail.com">
                eivecchio@hotmail.com
              </a>
              <a className="button button-outline-light" href="https://github.com/Evecchio" target="_blank" rel="noreferrer">
                Perfil de GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer">
        © {new Date().getFullYear()} Ezequiel Vecchio. Experiencias basadas en proyectos privados reales.
      </footer>
    </div>
  );
}
