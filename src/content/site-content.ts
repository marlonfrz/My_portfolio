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
        "Portfolio de Marlon Farizo: desarrollo full-stack, automatización e inteligencia artificial aplicada.",
    },
    navigation: {
      menu: "Navegación",
      sections: [
        { id: "introduction", label: "Introducción" },
        { id: "about", label: "Descripción" },
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
      eyebrow: "Desarrollo de producto · Tenerife, España",
      title: "Software que conecta ideas, procesos y personas.",
      subtitle: "Desarrollador de Software",
      description:
        "Construyo productos full-stack, automatizaciones y herramientas con IA aplicada. Desde la lógica de negocio hasta una experiencia que se pueda usar, medir y mantener.",
      projectsCta: "Explorar proyectos",
      contactCta: "Hablemos",
      availability: "Disponible para nuevos retos",
    },
    about: {
      eyebrow: "01 · Descripción",
      title: "Un perfil transversal, con el producto como punto de encuentro.",
      paragraphs: [
        "Trabajo entre frontend, backend y automatización para convertir necesidades reales en herramientas completas. Mi stack principal combina Python y FastAPI con React, Next.js y TypeScript.",
        "Integro modelos de IA cuando aportan valor concreto, manteniendo permisos, validación y reglas de negocio fuera del modelo. También trabajo con testing, scraping, Docker, servidores y procesos de despliegue.",
      ],
      principles: [
        { label: "Enfoque", value: "Producto end-to-end" },
        { label: "Backend", value: "Python · FastAPI" },
        { label: "Frontend", value: "React · Next.js" },
        { label: "Especialidad", value: "Automatización · IA aplicada" },
      ],
    },
    projects: {
      eyebrow: "02 · Proyectos",
      title: "Productos reales, explicados sin ruido.",
      description:
        "Una selección de aplicaciones completas. Puedes revisar sus decisiones técnicas o entrar directamente en una demo aislada.",
      viewProject: "Ver proyecto",
      openDemo: "Abrir demo",
      demoSoon: "Demo próximamente",
      viewAll: "Ver todos los proyectos",
      catalogueTitle: "Archivo de proyectos",
      catalogueDescription:
        "Productos, herramientas y experimentos construidos para resolver problemas concretos.",
      backHome: "Volver al portfolio",
      overview: "Visión general",
      capabilities: "Capacidades principales",
      architecture: "Arquitectura y decisiones",
    },
    experience: {
      eyebrow: "03 · Experiencia y datos",
      title: "Del producto al despliegue, más allá del stack.",
      description:
        "Desarrollo aplicaciones web, APIs, automatizaciones y herramientas internas, y preparo cómo llegan a producción: testing de navegador, contenedores, flujos CI/CD y despliegues en servidores.",
      metrics: [
        { value: "2", label: "CFGS: DAW + ASIR" },
        { value: "E2E", label: "Producto, automatización y despliegue" },
        { value: "ES / EN", label: "Trabajo bilingüe" },
      ],
      stackTitle: "Stack principal",
    },
    contact: {
      eyebrow: "04 · Contacto",
      title: "¿Construimos algo que merezca existir?",
      description:
        "Estoy abierto a conversar sobre producto, desarrollo full-stack, automatización e integraciones de IA.",
      email: "Escribir un email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: "Diseñado y construido por Marlon Farizo.",
    projectsData: [
      {
        ...sharedProjects.ticketing,
        name: "Ticketing Platform",
        category: "Producto full-stack",
        status: "Demo en preparación",
        summary:
          "Plataforma integral para eventos, pedidos, pagos, entradas y validación con distintos roles operativos.",
        description:
          "Una plataforma de ticketing construida de extremo a extremo, con reglas de dominio para administrar eventos, controlar stock, procesar pedidos y validar entradas.",
        capabilities: [
          "Autenticación JWT y permisos para administración, promotores y validadores.",
          "Gestión de eventos, tipos de entrada, disponibilidad, pedidos y tickets.",
          "Flujos de Stripe Checkout y estados consistentes de pago y pedido.",
          "Validación operativa de entradas y control de casos límite.",
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
        "Marlon Farizo's portfolio: full-stack development, automation, and applied artificial intelligence.",
    },
    navigation: {
      menu: "Navigation",
      sections: [
        { id: "introduction", label: "Introduction" },
        { id: "about", label: "About" },
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
      eyebrow: "Product development · Tenerife, Spain",
      title: "Software that connects ideas, processes, and people.",
      subtitle: "Software Developer",
      description:
        "I build full-stack products, automations, and applied AI tools—from business logic to an experience people can use, measure, and maintain.",
      projectsCta: "Explore projects",
      contactCta: "Let's talk",
      availability: "Open to new opportunities",
    },
    about: {
      eyebrow: "01 · About",
      title: "A cross-functional profile, with product at the center.",
      paragraphs: [
        "I work across frontend, backend, and automation to turn real needs into complete tools. My primary stack combines Python and FastAPI with React, Next.js, and TypeScript.",
        "I integrate AI models where they create concrete value, keeping permissions, validation, and business rules outside the model. I also work with testing, scraping, Docker, servers, and deployment workflows.",
      ],
      principles: [
        { label: "Approach", value: "End-to-end product" },
        { label: "Backend", value: "Python · FastAPI" },
        { label: "Frontend", value: "React · Next.js" },
        { label: "Focus", value: "Automation · Applied AI" },
      ],
    },
    projects: {
      eyebrow: "02 · Projects",
      title: "Real products, explained without noise.",
      description:
        "A selection of complete applications. Review their technical decisions or open an isolated interactive demo.",
      viewProject: "View project",
      openDemo: "Open demo",
      demoSoon: "Demo coming soon",
      viewAll: "View all projects",
      catalogueTitle: "Project archive",
      catalogueDescription:
        "Products, tools, and experiments built to solve concrete problems.",
      backHome: "Back to portfolio",
      overview: "Overview",
      capabilities: "Core capabilities",
      architecture: "Architecture and decisions",
    },
    experience: {
      eyebrow: "03 · Experience and data",
      title: "From product to deployment, beyond the stack.",
      description:
        "I develop web applications, APIs, automations, and internal tools, and prepare how they reach production through browser testing, containers, CI/CD pipelines, and server deployments.",
      metrics: [
        { value: "2", label: "Higher VET degrees: DAW + ASIR" },
        { value: "E2E", label: "Product, automation, and deployment" },
        { value: "ES / EN", label: "Bilingual work" },
      ],
      stackTitle: "Primary stack",
    },
    contact: {
      eyebrow: "04 · Contact",
      title: "Shall we build something worth using?",
      description:
        "I am open to conversations about product, full-stack development, automation, and AI integrations.",
      email: "Send an email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: "Designed and built by Marlon Farizo.",
    projectsData: [
      {
        ...sharedProjects.ticketing,
        name: "Ticketing Platform",
        category: "Full-stack product",
        status: "Demo in progress",
        summary:
          "An end-to-end platform for events, orders, payments, tickets, and validation across operational roles.",
        description:
          "A ticketing platform built end to end, with domain rules for event management, stock control, order processing, and ticket validation.",
        capabilities: [
          "JWT authentication and permissions for administrators, promoters, and validators.",
          "Events, ticket types, availability, orders, and issued tickets.",
          "Stripe Checkout flows with consistent payment and order states.",
          "Operational ticket validation and edge-case handling.",
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
