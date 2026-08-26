<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# 🚀 FVision Builders

**Official Portfolio & Architecture Blueprints Showcase**

[![Live Demo](https://img.shields.io/badge/Demo-Live_Page-00C7B7?style=for-the-badge&logo=githubpages&logoColor=white)](https://evecchio.github.io/FVision-Builders/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Google GenAI](https://img.shields.io/badge/Gemini_AI-SDK-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

</div>

---

## 🌟 Descripción

**FVision Builders** es el catálogo interactivo y portafolio oficial de soluciones de software de alto impacto y blueprints de arquitectura empresarial desarrollados por Ezequiel Vecchio (FVision). Presenta demostraciones interactivas, casos de negocio reales (CoreStore, AI Operations, Private Data Systems) e integración con Inteligencia Artificial conversacional impulsada por Google Gemini.

---

## ✨ Características Principales

* ⚡ **Performance Extremo**: Construido sobre Vite, React 19 y Tailwind CSS v4 para tiempos de carga instantáneos.
* 🤖 **Asistente IA Integrado**: Chat interactivo conectado a la API de Google Gemini (`@google/genai`) para explorar soluciones y resolver consultas técnicas.
* 📐 **Showcase de Blueprints**: Fichas interactivas de arquitectura de software para Sales, Operations y Private Data Systems.
* 🔥 **Firebase Applet & Firestore**: Reglas y configuración integrada para despliegue y persistencia serverless.
* 🧪 **Testing Integrado**: Suite de pruebas con Vitest.

---

## 🛠️ Stack Tecnológico

* **Frontend:** React 19, TypeScript, Tailwind CSS v4
* **Bundler & Build Tool:** Vite 6
* **Inteligencia Artificial:** Google Gen AI SDK (`@google/genai`)
* **Backend & Hosting:** Firebase Firestore / GitHub Pages
* **Tests:** Vitest

---

## 🚀 Instalación y Ejecución Local

### Prerrequisitos
* Node.js 18+
* Clave de API de Google Gemini (Google AI Studio)

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Evecchio/FVision-Builders.git
   cd FVision-Builders
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Copia el archivo de ejemplo y agrega tu API key:
   ```bash
   cp .env.example .env.local
   ```
   Configura `GEMINI_API_KEY=tu_api_key` en `.env.local`.

4. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Ejecutar pruebas:**
   ```bash
   npm test
   ```

---

## 📁 Estructura del Proyecto

```
FVision-Builders/
├── src/                # Componentes React, hooks, blueprints y servicios IA
├── public/             # Recursos estáticos y assets de marca
├── ezequiel-vecchio/   # Módulos específicos de perfil y presentación
├── firestore.rules     # Reglas de seguridad para Firebase Firestore
├── vite.config.ts      # Configuración de Vite y plugins
└── index.html          # Entrada HTML principal
```

---

## 📄 Licencia

Desarrollado y mantenido por [Ezequiel Vecchio](https://github.com/Evecchio).
