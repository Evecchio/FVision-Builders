#!/usr/bin/env node

/**
 * sync-repos.js
 * Sincroniza metadatos de repositorios de GitHub de Evecchio de forma segura.
 * NO exporta código fuente, tokens ni enlaces de clonado.
 * Usa GitHub CLI ('gh') si está disponible, o GITHUB_TOKEN si está configurado en el entorno.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.resolve(__dirname, '../src/data/repositories.json');

function getExistingData() {
  if (fs.existsSync(DATA_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    } catch (e) {
      console.warn('Advertencia al leer repositories.json existente:', e.message);
    }
  }
  return [];
}

function fetchReposFromGH() {
  try {
    console.log('Consultando repositorios con GitHub CLI (gh)...');
    const raw = execSync('gh repo list Evecchio --limit 100 --json name,description,primaryLanguage,repositoryTopics,isPrivate,updatedAt', {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore']
    });
    return JSON.parse(raw);
  } catch (err) {
    console.warn('No se pudo ejecutar gh CLI:', err.message);
    return null;
  }
}

function sync() {
  const existing = getExistingData();
  const existingMap = new Map(existing.map(r => [r.name.toLowerCase(), r]));

  const ghRepos = fetchReposFromGH();
  if (!ghRepos) {
    console.log('Manteniendo datos existentes sin cambios.');
    return;
  }

  // Filtrar repositorios que no queremos mostrar (ej: el repo del perfil personal o duplicados)
  const ignored = new Set(['evecchio', 'caby-control']);

  const customMeta = {
    'gastoflow-accessibility': {
      displayName: 'GastoFlow Engine & Accessibility',
      description: 'Sistema de automatización y control de gastos local, asistido y 100% automático para Android. Utiliza servicios de accesibilidad, procesamiento en dispositivo (Local-First) y cifrado de datos sin intermediarios ni fuga a la nube.',
      category: 'mobile',
      tags: ['Android SDK', 'Accessibility Service', 'Local-First', 'AES-256', 'Zero-Leak', 'Kotlin'],
      status: 'Producción / Privado'
    },
    'fvision-company': {
      displayName: 'FVision Enterprise Core',
      description: 'Núcleo corporativo y operativo de FVision: arquitectura de microservicios, integración de agentes de IA para flujos de trabajo internos, gobernanza de datos y automatización de procesos empresariales.',
      category: 'ops',
      tags: ['Enterprise Core', 'AI Multi-Agent', 'Microservicios', 'Arquitectura Limpia', 'Docker'],
      status: 'Producción / Privado'
    },
    'cabify-control': {
      displayName: 'Cabify Control & Fleets',
      description: 'Aplicación de telemetría, monitoreo y auditoría automatizada de viajes y finanzas para conductores y flotas. Integración de captura de datos en pantalla y reportes en tiempo real.',
      category: 'mobile',
      tags: ['Android', 'Telemetría', 'Automatización', 'Finanzas & Flotas', 'SQLite / Room'],
      status: 'Producción / Privado'
    },
    'gastomock': {
      displayName: 'GastoMock Suite',
      description: 'Entorno de pruebas y emulación de transacciones financieras para validación de lógica de negocio y testing automatizado en aplicaciones móviles.',
      category: 'ops',
      tags: ['Testing & Mocks', 'Kotlin', 'Android Test', 'CI/CD'],
      status: 'Herramienta Interna / Privado'
    },
    'flowcommerce': {
      displayName: 'FlowCommerce Platform',
      description: 'Ecosistema de comercio digital escalable y de alta conversión con checkout optimizado, integración de pagos directos y panel de administración empresarial.',
      category: 'web',
      tags: ['E-Commerce', 'Checkout Flow', 'Pasarelas de Pago', 'Alta Conversión', 'Next.js'],
      status: 'Activo / Privado'
    },
    'nubeflow': {
      displayName: 'NubeFlow Theme & Engine',
      description: 'Desarrollo frontend especializado para e-commerce corporativo en Tiendanube con diseño a medida, integración de scripts analíticos y optimización de velocidad de carga.',
      category: 'web',
      tags: ['Tiendanube', 'E-Commerce', 'Frontend Custom', 'UI/UX', 'SEO Performance'],
      status: 'Producción / Privado'
    },
    'virtual-org-framework': {
      displayName: 'Virtual Org AI Framework',
      description: 'Framework para la orquestación y coordinación de organizaciones autónomas mediante agentes de IA. Modela roles organizacionales, contratos de ejecución y control humano supervisor.',
      category: 'ops',
      tags: ['AI Orchestration', 'Agentic Workflows', 'Human-in-the-Loop', 'Multi-Agent System'],
      status: 'Investigación & Desarrollo'
    },
    'dropland': {
      displayName: 'DropLand Logistics & Processing',
      description: 'Sistema de automatización de scripts y procesamiento de datos para gestión logística y distribución, integrando APIs de mensajería y sincronización.',
      category: 'data',
      tags: ['Python', 'Automatización', 'Data Pipeline', 'APIs & Integraciones'],
      status: 'Activo / Privado'
    },
    'fvision-builders': {
      displayName: 'FVision Builders Showcase',
      description: 'Plataforma pública oficial y portafolio de FVision, arquitectura de software corporativa, blueprints de soluciones y catálogo de capacidades técnicas.',
      category: 'web',
      tags: ['React', 'TypeScript', 'Vite', 'Neo-Brutalism', 'GitHub Pages'],
      status: 'Público / Showcase'
    }
  };

  const updatedList = ghRepos
    .filter(r => !ignored.has(r.name.toLowerCase()))
    .map(r => {
      const key = r.name.toLowerCase();
      const meta = customMeta[key] || existingMap.get(key) || {};
      const lang = r.primaryLanguage?.name || meta.language || 'Software';
      const topics = (r.repositoryTopics || []).map(t => t.name);
      const tags = meta.tags && meta.tags.length ? meta.tags : (topics.length ? topics : [lang]);

      return {
        name: r.name,
        displayName: meta.displayName || r.name.replace(/[-_]/g, ' '),
        description: meta.description || r.description || 'Solución propietaria de software y arquitectura desarrollada por FVision.',
        category: meta.category || 'ops',
        language: lang,
        tags: tags,
        isPrivate: r.isPrivate !== undefined ? r.isPrivate : true,
        status: meta.status || (r.isPrivate ? 'Producción / Privado' : 'Público / Showcase'),
        updatedAt: r.updatedAt ? r.updatedAt.split('T')[0] : meta.updatedAt || new Date().toISOString().split('T')[0]
      };
    });

  // Guardar archivo JSON actualizado
  fs.writeFileSync(DATA_FILE, JSON.stringify(updatedList, null, 2), 'utf-8');
  console.log(`✓ Repositorios sincronizados con éxito: ${updatedList.length} proyectos guardados en ${DATA_FILE}`);
}

sync();
