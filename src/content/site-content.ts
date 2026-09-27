import type { Locale } from "@/lib/i18n/locale";

export type ProjectSlug = "ticketing" | "crm";

export type Project = {
  slug: ProjectSlug;
  index: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  description: string;
  technologies: string[];
  capabilities: string[];
  architecture: string[];
};

export type SiteContent = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    menu: string;
    sections: Array<{ id: string; label: string }>;
  };
  language: {
    label: string;
    spanish: string;
    english: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    projectsCta: string;
    contactCta: string;
    availability: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    principles: Array<{ label: string; value: string }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    viewProject: string;
    openDemo: string;
    demoSoon: string;
    viewAll: string;
    catalogueTitle: string;
    catalogueDescription: string;
    backHome: string;
    overview: string;
    capabilities: string;
    architecture: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: Array<{ value: string; label: string }>;
    stackTitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    email: string;
    github: string;
    linkedin: string;
  };
  footer: string;
  projectsData: Project[];
};

const sharedProjects = {
  ticketing: {
    slug: "ticketing" as const,
    index: "01",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Stripe",
      "Docker",
    ],
  },
  crm: {
    slug: "crm" as const,
    index: "02",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Ollama",
      "OpenAI",
      "Docker",
      "Pytest",
    ],
  },
};

const content: Record<Locale, SiteContent> = {
  es: {
    metadata: {
      title: "Marlon Farizo — Desarrollador de Software",
      description:
        "Portfolio de Marlon Farizo, desarrollador de software especializado en productos full-stack, automatización, IA aplicada y despliegue.",
    },
    navigation: {
      menu: "Navegación",
      sections: [
        { id: "introduction", label: "Introducción" },
        { id: "about", label: "Perfil" },
        { id: "projects", label: "Proyectos" },
        { id: "experience", label: "Experiencia" },
        { id: "contact", label: "Contacto" },
      ],
    },
    language: {
      label: "Idioma",
      spanish: "ES",
      english: "EN",
    },
    hero: {
      eyebrow: "Software · Automatización · IA aplicada · Tenerife",
      title: "Software que conecta ideas, procesos y personas.",
      subtitle: "Desarrollador de Software",
      description:
        "Desarrollo de productos digitales, automatizaciones y soluciones con IA aplicada, cubriendo lógica de negocio, experiencia de usuario, testing y despliegue.",
      projectsCta: "Explorar proyectos",
      contactCta: "Contactar",
      availability: "Disponible para nuevas oportunidades",
    },
    about: {
      eyebrow: "01 · Perfil",
      title: "Crear, automatizar y poner en marcha soluciones digitales.",
      paragraphs: [
        "Frontend, backend y automatización se combinan para convertir necesidades reales en herramientas completas. El stack principal reúne Python y FastAPI con React, Next.js y TypeScript.",
        "La integración de modelos de IA amplía las capacidades de los productos, optimiza procesos y permite crear automatizaciones más potentes. Testing, scraping, Docker, servidores y despliegue completan el alcance técnico.",
      ],
      principles: [
        { label: "Enfoque", value: "Soluciones listas para funcionar" },
        { label: "Backend", value: "Python · FastAPI" },
        { label: "Frontend", value: "React · Next.js" },
        { label: "Especialidad", value: "Automatización · IA aplicada" },
      ],
    },
    projects: {
      eyebrow: "02 · Proyectos",
      title: "Mis productos destacados.",
      description:
        "Una selección de aplicaciones propias en las que se puede conocer el problema resuelto, sus capacidades y las decisiones técnicas que hay detrás.",
      viewProject: "Ver proyecto",
      openDemo: "Abrir demo",
      demoSoon: "Demo próximamente",
      viewAll: "Ver todos los proyectos",
      catalogueTitle: "Mis proyectos",
      catalogueDescription:
        "Aplicaciones y herramientas propias, creadas para resolver necesidades operativas concretas.",
      backHome: "Volver al portfolio",
      overview: "Visión general",
      capabilities: "Capacidades principales",
      architecture: "Arquitectura y decisiones",
    },
    experience: {
      eyebrow: "03 · Experiencia técnica",
      title: "Del producto al despliegue, más allá del stack.",
      description:
        "Experiencia en aplicaciones web, APIs, automatizaciones y herramientas internas, incluyendo integración de modelos de IA, testing de navegador, contenedores, CI/CD y despliegues en servidores.",
      metrics: [
        { value: "2", label: "Titulaciones técnicas: DAW + ASIR" },
        { value: "E2E", label: "Producto, desarrollo y despliegue" },
        { value: "ES / EN", label: "Trabajo bilingüe" },
      ],
      stackTitle: "Stack principal",
    },
    contact: {
      eyebrow: "04 · Contacto",
      title: "El siguiente paso puede empezar con una conversación.",
      description:
        "Disponible para colaborar con equipos y empresas que busquen desarrollo de software, automatización e integración de IA con un enfoque práctico y orientado a resultados.",
      email: "Contactar por email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: "Diseñado y construido por Marlon Farizo.",
    projectsData: [
      {
        ...sharedProjects.ticketing,
        name: "Ticketing Platform",
        category: "Gestión de eventos y ticketing",
        status: "Demo en preparación",
        summary:
          "Plataforma integral para gestionar eventos, ventas, pagos, emisión y validación de entradas, coordinando en un mismo entorno a los distintos perfiles operativos.",
        description:
          "Sistema transaccional con reglas de dominio para administrar eventos, controlar disponibilidad, procesar pedidos y validar entradas.",
        capabilities: [
          "Autenticación JWT y permisos para administración, promotores y validadores.",
          "Gestión de eventos, tipos de entrada, disponibilidad, pedidos y tickets.",
          "Flujos de Stripe Checkout y estados consistentes de pago y pedido.",
          "Validación de accesos y gestión de duplicados, estados inconsistentes y otras incidencias operativas.",
        ],
        architecture: [
          "Next.js y TypeScript para la experiencia de usuario.",
          "FastAPI, SQLAlchemy y PostgreSQL para dominio y persistencia.",
          "Redis y RabbitMQ como servicios de apoyo.",
          "Entorno reproducible mediante Docker Compose.",
        ],
      },
      {
        ...sharedProjects.crm,
        name: "CRM Platform",
        category: "Producto con IA aplicada",
        status: "Demo en preparación",
        summary:
          "CRM modular con aislamiento por organización, permisos por departamento, auditoría e IA opcional.",
        description:
          "CRM privado diseñado para desplegarse de forma aislada por organización, con un modelo de permisos explícito y una capa de IA que nunca toma decisiones de autorización.",
        capabilities: [
          "Clientes, contactos, departamentos, responsables, actividades y tareas.",
          "Roles, alcance departamental, historial y registros de auditoría.",
          "Resúmenes estructurados y detección de acciones pendientes mediante IA.",
          "Proveedores configurables: Ollama, OpenAI, Claude y Gemini.",
        ],
        architecture: [
          "Permisos y selección de datos validados antes de invocar modelos.",
          "FastAPI, SQLAlchemy, PostgreSQL y migraciones con Alembic.",
          "Frontend modular con Next.js, React y TypeScript.",
          "Pruebas con Vitest y Pytest, y despliegue con Docker.",
        ],
      },
    ],
  },
  en: {
    metadata: {
      title: "Marlon Farizo — Software Developer",
      description:
        "Marlon Farizo's portfolio: software development, full-stack applications, automation, applied AI, and deployment.",
    },
    navigation: {
      menu: "Navigation",
      sections: [
        { id: "introduction", label: "Introduction" },
        { id: "about", label: "Profile" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
      ],
    },
    language: {
      label: "Language",
      spanish: "ES",
      english: "EN",
    },
    hero: {
      eyebrow: "Software · Automation · Applied AI · Tenerife",
      title: "Software that connects ideas, processes, and people.",
      subtitle: "Software Developer",
      description:
        "Digital products, automations, and applied AI solutions covering business logic, user experience, testing, and deployment.",
      projectsCta: "Explore projects",
      contactCta: "Contact",
      availability: "Open to new opportunities",
    },
    about: {
      eyebrow: "01 · Profile",
      title: "Build, automate, and launch digital solutions.",
      paragraphs: [
        "Frontend, backend, and automation come together to turn real needs into complete tools. The core stack combines Python and FastAPI with React, Next.js, and TypeScript.",
        "AI model integration expands product capabilities, streamlines processes, and enables more powerful automations. Testing, scraping, Docker, servers, and deployment complete the technical scope.",
      ],
      principles: [
        { label: "Approach", value: "Solutions ready to launch" },
        { label: "Backend", value: "Python · FastAPI" },
        { label: "Frontend", value: "React · Next.js" },
        { label: "Focus", value: "Automation · Applied AI" },
      ],
    },
    projects: {
      eyebrow: "02 · Projects",
      title: "My featured products.",
      description:
        "A selection of my applications, covering the problems they solve, their capabilities, and the technical decisions behind them.",
      viewProject: "View project",
      openDemo: "Open demo",
      demoSoon: "Demo coming soon",
      viewAll: "View all projects",
      catalogueTitle: "My projects",
      catalogueDescription:
        "Applications and tools created to solve concrete operational needs.",
      backHome: "Back to portfolio",
      overview: "Overview",
      capabilities: "Core capabilities",
      architecture: "Architecture and decisions",
    },
    experience: {
      eyebrow: "03 · Technical experience",
      title: "From product to deployment, beyond the stack.",
      description:
        "Experience in web applications, APIs, automations, and internal tools, including AI model integration, browser testing, containers, CI/CD, and server deployments.",
      metrics: [
        { value: "2", label: "Technical qualifications: DAW + ASIR" },
        { value: "E2E", label: "Product, development, and deployment" },
        { value: "ES / EN", label: "Bilingual work" },
      ],
      stackTitle: "Primary stack",
    },
    contact: {
      eyebrow: "04 · Contact",
      title: "The next step can start with a conversation.",
      description:
        "Available to collaborate with teams and companies looking for software development, automation, and AI integration with a practical, results-driven approach.",
      email: "Contact by email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: "Designed and built by Marlon Farizo.",
    projectsData: [
      {
        ...sharedProjects.ticketing,
        name: "Ticketing Platform",
        category: "Event management and ticketing",
        status: "Demo in progress",
        summary:
          "A comprehensive platform for managing events, sales, payments, ticket issuance, and validation, bringing different operational roles together in one environment.",
        description:
          "A transactional system with domain rules for managing events, controlling availability, processing orders, and validating tickets.",
        capabilities: [
          "JWT authentication and permissions for administrators, promoters, and validators.",
          "Events, ticket types, availability, orders, and issued tickets.",
          "Stripe Checkout flows with consistent payment and order states.",
          "Access validation and handling of duplicates, inconsistent states, and other operational incidents.",
        ],
        architecture: [
          "Next.js and TypeScript for the user experience.",
          "FastAPI, SQLAlchemy, and PostgreSQL for domain and persistence.",
          "Redis and RabbitMQ as supporting services.",
          "A reproducible environment with Docker Compose.",
        ],
      },
      {
        ...sharedProjects.crm,
        name: "CRM Platform",
        category: "Applied AI product",
        status: "Demo in progress",
        summary:
          "A modular CRM with organization isolation, department permissions, auditability, and optional AI.",
        description:
          "A private CRM designed for isolated deployments per organization, with explicit permissions and an AI layer that never makes authorization decisions.",
        capabilities: [
          "Clients, contacts, departments, owners, activities, and tasks.",
          "Roles, department scope, history, and audit records.",
          "Structured summaries and pending-action detection with AI.",
          "Configurable providers: Ollama, OpenAI, Claude, and Gemini.",
        ],
        architecture: [
          "Permissions and data selection validated before model calls.",
          "FastAPI, SQLAlchemy, PostgreSQL, and Alembic migrations.",
          "Modular frontend with Next.js, React, and TypeScript.",
          "Vitest and Pytest coverage with Docker-based delivery.",
        ],
      },
    ],
  },
};

export function getSiteContent(locale: Locale): SiteContent {
  return content[locale];
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  return content[locale].projectsData.find((project) => project.slug === slug);
}
