const projects = [
  {
    title: "Tiendanube UX & Front-End Optimizer",
    summary:
      "Solución de optimización de interfaz y experiencia de usuario (UX) especializada para tiendas montadas sobre la plataforma Tiendanube.",
    work:
      "Diseño y desarrollo de la jerarquía visual del carrito de compras, optimización de diseño adaptable (responsive), visualización clara de precios y cantidades, simplificación de la acción de eliminación, y optimización de archivos CSS.",
    status: "Implementado con éxito en producción para el cliente Ivana Design. Datos comerciales reservados.",
    tags: ["E-commerce", "CSS", "Responsive UI", "UX/UI", "Tiendanube"],
  },
  {
    title: "Modular Headless eCommerce Engine",
    summary:
      "Desarrollo de una solución de tienda virtual independiente y flexible, diseñada para personalizarse de acuerdo a las necesidades de la marca sin depender de plataformas cerradas.",
    work:
      "Implementación del catálogo dinámico, motor de búsqueda rápida, detalle y variantes de producto, persistencia de carrito de compras y diseño modular de checkout.",
    status: "Prototipo funcional listo para integración con APIs de pago y logística externa.",
    tags: ["Next.js 15", "React 19", "TypeScript", "B2C Storefront", "Modular Shopping Cart"],
  },
  {
    title: "Local-First Android Expense Parser",
    summary:
      "Aplicación móvil nativa para automatizar el registro de finanzas personales mediante la lectura e interpretación de notificaciones del sistema.",
    work:
      "Servicio en segundo plano de escucha de notificaciones, lógica de parseo de datos financieros con Regex, almacenamiento persistente local seguro (Room) y flujo automatizado de integración y compilación (GitHub Actions).",
    status: "Prototipo totalmente compilable para Android con base de datos local y offline.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Android", "GitHub Actions"],
  },
  {
    title: "Offline Personal Finance System (Discovery)",
    summary:
      "Consultoría de descubrimiento de producto y arquitectura para un asistente financiero personal enfocado en la privacidad de datos mediante arquitectura local.",
    work:
      "Definición del MVP, estudio de perfil de usuarios, arquitectura técnica, modelado de base de datos relacional local, y viabilidad para procesamiento con modelos de lenguaje integrados de forma nativa en el dispositivo (Local LLM).",
    status: "Documentación estratégica de producto y modelo de datos definidos.",
    tags: ["Product Discovery", "Local-first", "Arquitectura", "IA local", "Fintech"],
  },
  {
    title: "DRDV: Contract-Based AI Agent Framework",
    summary:
      "Framework de desarrollo para construir sistemas multi-agente guiados por contratos de comportamiento explícitos y validación basada en evidencias.",
    work:
      "Runtime de ejecución de agentes y subagentes, orquestador de herramientas, observabilidad del ciclo de ejecución, y diseño técnico bajo el ciclo DRDV (Design, Review, Decide, Validate).",
    status: "Arquitectura base diseñada con contratos escritos y runtime funcional.",
    tags: ["Python", "Agent Architecture", "Validation", "Observability", "YAML Contracts"],
  },
  {
    title: "IAO: Air-Gapped Local Chat Agent",
    summary:
      "Microservicio de chat autónomo y privado con procesamiento de lenguaje local y recuperación de información basada en bases vectoriales (RAG).",
    work:
      "Integración de LLM offline con Ollama, base de datos de embeddings (Chroma DB) para recuperar contexto específico de documentos, API con FastAPI, y políticas estrictas de seguridad de red con listas blancas de salida de datos (egress whitelist).",
    status: "Solución de microservicio de IA local completamente funcional y configurable.",
    tags: ["Python", "FastAPI", "Ollama", "RAG", "Chroma DB", "Seguridad"],
  },
];

const testimonials = [
  {
    quote: "La optimización del flujo del carrito y la UI responsive redujeron significativamente la tasa de abandono. Excelente atención al detalle técnico y velocidad de respuesta.",
    client: "Ivana Design — E-commerce de Moda & Lencería (Tiendanube)",
    impact: "Reducción de fricción en carrito y 100% de paridad visual en móviles"
  },
  {
    quote: "Logró automatizar la captura de gastos bancarios directamente desde las notificaciones del móvil sin depender de servidores de terceros, priorizando la privacidad local.",
    client: "Líder de Finanzas Personales (Android & Local-first)",
    impact: "100% de automatización en importación de gastos con procesamiento offline"
  },
  {
    quote: "Desarrolló una arquitectura de microservicio de IA local y privada sumamente robusta, garantizando aislamiento perimetral estricto según las políticas de egreso corporativas.",
    client: "Director de Arquitectura & Inteligencia Artificial",
    impact: "Despliegue local y seguro de RAG con Ollama y Egress Whitelist"
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
            <a href="#testimonios">Casos de Éxito</a>
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

        <section className="section testimonials-section" id="testimonios">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Resultados medibles</p>
                <h2>Casos de Éxito & Testimonios</h2>
              </div>
              <p>
                Citas de clientes y métricas de impacto real logradas a través de las soluciones
                técnicas implementadas.
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((t, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="quote-mark">“</div>
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-meta">
                    <p className="testimonial-client">{t.client}</p>
                    <div className="testimonial-impact">
                      <strong>Impacto destacado</strong>
                      <span>{t.impact}</span>
                    </div>
                  </div>
                </div>
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
