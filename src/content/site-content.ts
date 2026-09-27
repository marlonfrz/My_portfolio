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
        "Portfolio de Marlon Farizo: productos full-stack con Python, FastAPI, React y Next.js, automatización, IA aplicada y despliegue.",
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
      eyebrow: "Full-stack · Automatización · IA aplicada · Tenerife",
      title: "Software para operar mejor.",
      subtitle: "Desarrollador de Software",
      description:
        "Diseño productos completos: desde el modelo de datos y las APIs hasta la interfaz, la automatización, el testing y el despliegue. Integro IA solo cuando mejora el proceso de forma concreta.",
      projectsCta: "Ver proyectos",
      contactCta: "Hablemos de tu reto",
      availability: "Disponible para nuevos retos",
    },
    about: {
      eyebrow: "01 · Perfil",
      title: "Entiendo el producto completo para tomar mejores decisiones técnicas.",
      paragraphs: [
        "Mi perfil une desarrollo de software y sistemas. Puedo traducir una necesidad de negocio a un modelo de datos, una API, una interfaz usable y una arquitectura que el equipo pueda mantener.",
        "Trabajo principalmente con Python, FastAPI, React, Next.js y TypeScript. Los combino con automatización, scraping, testing, modelos de IA, Docker y despliegues en servidores según lo que realmente necesite el producto.",
      ],
      principles: [
        { label: "Forma de trabajar", value: "Del problema a producción" },
        { label: "Backend", value: "Python · FastAPI" },
        { label: "Frontend", value: "React · Next.js" },
        { label: "Áreas clave", value: "Automatización · IA · Sistemas" },
      ],
    },
    projects: {
      eyebrow: "02 · Proyectos",
      title: "Software que coordina operaciones, datos y personas.",
      description:
        "Cada proyecto aborda un flujo de negocio completo, con usuarios, permisos, datos y decisiones técnicas reales. Puedes conocer qué problema resuelve, cómo está construido y explorar su demo cuando esté disponible.",
      viewProject: "Ver proyecto",
      openDemo: "Abrir demo",
      demoSoon: "Demo próximamente",
      viewAll: "Ver todos los proyectos",
      catalogueTitle: "Productos construidos de extremo a extremo",
      catalogueDescription:
        "Aplicaciones completas en las que negocio, experiencia de usuario, backend e infraestructura forman parte de una misma solución.",
      backHome: "Volver al portfolio",
      overview: "El reto y la solución",
      capabilities: "Qué permite hacer",
      architecture: "Cómo está construido",
    },
    experience: {
      eyebrow: "03 · Cómo trabajo",
      title: "Construir es solo una parte: también hay que probar, desplegar y mantener.",
      description:
        "Trabajo a lo largo de todo el ciclo: analizo el problema, implemento frontend y backend, automatizo tareas, valido los flujos y preparo entornos reproducibles para llevar el software a servidores con confianza.",
      metrics: [
        { value: "2", label: "Titulaciones técnicas: DAW + ASIR" },
        { value: "E2E", label: "Producto, desarrollo y despliegue" },
        { value: "ES / EN", label: "Trabajo y documentación bilingüe" },
      ],
      stackTitle: "Tecnologías principales",
    },
    contact: {
      eyebrow: "04 · Contacto",
      title: "¿Tienes un problema que merece una solución bien construida?",
      description:
        "Si buscas a alguien capaz de entender el contexto, construir el producto completo y explicar con criterio sus decisiones técnicas, estaré encantado de conocer el reto.",
      email: "Cuéntame tu proyecto",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: "Diseñado, desarrollado y desplegado por Marlon Farizo.",
    projectsData: [
      {
        ...sharedProjects.ticketing,
        name: "Ticketing Platform",
        category: "Plataforma transaccional",
        status: "Demo controlada en preparación",
        summary:
          "Gestiona el ciclo completo de un evento: catálogo, aforo, venta, pagos, emisión y validación de entradas, con permisos específicos para cada rol.",
        description:
          "Un sistema transaccional diseñado para coordinar la operación completa de un evento sin separar la venta de lo que ocurre antes y después: configuración, disponibilidad, pago, emisión y acceso.",
        capabilities: [
          "Define eventos, tipos de entrada, aforo, disponibilidad y reglas de venta.",
          "Coordina pedidos, pagos con Stripe y emisión de entradas sin perder consistencia entre estados.",
          "Separa permisos y herramientas para administración, promotores y personal de validación.",
          "Valida accesos y contempla duplicados, reintentos y otros casos límite de la operación real.",
        ],
        architecture: [
          "Next.js y TypeScript para una interfaz rápida y diferenciada por rol.",
          "FastAPI y SQLAlchemy para concentrar las reglas de dominio fuera de la interfaz.",
          "PostgreSQL como fuente de verdad, con Redis y RabbitMQ para procesos de apoyo.",
          "Docker Compose para reproducir el entorno y simplificar su despliegue.",
        ],
      },
      {
        ...sharedProjects.crm,
        name: "CRM Platform",
        category: "CRM multiempresa con IA aplicada",
        status: "Demo controlada en preparación",
        summary:
          "Centraliza clientes, equipos, actividades y tareas en un entorno aislado por organización, con auditoría e IA integrada bajo reglas explícitas.",
        description:
          "Un CRM modular pensado para organizaciones que necesitan control sobre sus datos, permisos por departamento y trazabilidad, sin renunciar a automatizaciones e IA cuando aportan una ventaja concreta.",
        capabilities: [
          "Organiza clientes, contactos, responsables, actividades y tareas en un mismo flujo de trabajo.",
          "Limita el acceso mediante roles, departamentos y alcance organizativo explícito.",
          "Mantiene historial y auditoría para entender qué cambió, quién lo hizo y cuándo.",
          "Genera resúmenes y detecta próximas acciones con proveedores de IA intercambiables.",
        ],
        architecture: [
          "Los permisos y la selección de datos se resuelven antes de invocar cualquier modelo.",
          "FastAPI, SQLAlchemy, PostgreSQL y Alembic para un backend modular y trazable.",
          "Next.js, React y TypeScript para separar claramente áreas y flujos del producto.",
          "Vitest, Pytest y Docker para validar el comportamiento y reproducir el despliegue.",
        ],
      },
    ],
  },
  en: {
    metadata: {
      title: "Marlon Farizo — Software Developer",
      description:
        "Marlon Farizo's portfolio: full-stack products built with Python, FastAPI, React, and Next.js, plus automation, applied AI, and deployment.",
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
      eyebrow: "Full-stack · Automation · Applied AI · Tenerife",
      title: "Software built for better operations.",
      subtitle: "Software Developer",
      description:
        "I design complete products: from data models and APIs to interfaces, automation, testing, and deployment. I use AI only when it creates a concrete improvement in the process.",
      projectsCta: "View projects",
      contactCta: "Let's discuss your challenge",
      availability: "Open to new opportunities",
    },
    about: {
      eyebrow: "01 · Profile",
      title: "I understand the whole product so I can make better technical decisions.",
      paragraphs: [
        "My background brings software development and systems together. I can translate a business need into a data model, an API, a usable interface, and an architecture a team can maintain.",
        "I work primarily with Python, FastAPI, React, Next.js, and TypeScript, combining them with automation, scraping, testing, AI models, Docker, and server deployments whenever the product calls for them.",
      ],
      principles: [
        { label: "Way of working", value: "From problem to production" },
        { label: "Backend", value: "Python · FastAPI" },
        { label: "Frontend", value: "React · Next.js" },
        { label: "Core areas", value: "Automation · AI · Systems" },
      ],
    },
    projects: {
      eyebrow: "02 · Projects",
      title: "Software that coordinates operations, data, and people.",
      description:
        "Each project tackles a complete business workflow with real users, permissions, data, and technical decisions. See the problem it solves, how it is built, and explore its demo when available.",
      viewProject: "View project",
      openDemo: "Open demo",
      demoSoon: "Demo coming soon",
      viewAll: "View all projects",
      catalogueTitle: "Products built from end to end",
      catalogueDescription:
        "Complete applications where business logic, user experience, backend, and infrastructure form a single solution.",
      backHome: "Back to portfolio",
      overview: "The challenge and solution",
      capabilities: "What it enables",
      architecture: "How it is built",
    },
    experience: {
      eyebrow: "03 · How I work",
      title: "Building is only part of the job: software also needs testing, deployment, and maintenance.",
      description:
        "I work across the entire cycle: understanding the problem, implementing frontend and backend, automating tasks, validating critical flows, and preparing reproducible environments for confident server deployments.",
      metrics: [
        { value: "2", label: "Technical qualifications: DAW + ASIR" },
        { value: "E2E", label: "Product, development, and deployment" },
        { value: "ES / EN", label: "Bilingual work and documentation" },
      ],
      stackTitle: "Core technologies",
    },
    contact: {
      eyebrow: "04 · Contact",
      title: "Do you have a problem that deserves a well-built solution?",
      description:
        "If you need someone who can understand the context, build the complete product, and explain the technical decisions behind it, I would be glad to hear about the challenge.",
      email: "Tell me about your project",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: "Designed, developed, and deployed by Marlon Farizo.",
    projectsData: [
      {
        ...sharedProjects.ticketing,
        name: "Ticketing Platform",
        category: "Transactional platform",
        status: "Controlled demo in progress",
        summary:
          "Manages the complete event lifecycle: catalogue, capacity, sales, payments, ticket issuance, and validation, with purpose-built permissions for every role.",
        description:
          "A transactional system designed to coordinate the entire event operation without separating the sale from what happens before and after it: configuration, availability, payment, issuance, and access.",
        capabilities: [
          "Define events, ticket types, capacity, availability, and sales rules.",
          "Coordinate orders, Stripe payments, and ticket issuance while keeping every state consistent.",
          "Separate permissions and tools for administrators, promoters, and validation staff.",
          "Validate access while accounting for duplicates, retries, and other real operational edge cases.",
        ],
        architecture: [
          "Next.js and TypeScript for a fast, role-specific user experience.",
          "FastAPI and SQLAlchemy to keep domain rules outside the interface.",
          "PostgreSQL as the source of truth, supported by Redis and RabbitMQ.",
          "Docker Compose to reproduce the environment and streamline deployment.",
        ],
      },
      {
        ...sharedProjects.crm,
        name: "CRM Platform",
        category: "Multi-company CRM with applied AI",
        status: "Controlled demo in progress",
        summary:
          "Brings clients, teams, activities, and tasks together in an organization-isolated environment with auditability and AI governed by explicit rules.",
        description:
          "A modular CRM for organizations that need control over their data, department-level permissions, and traceability without giving up useful automation and AI capabilities.",
        capabilities: [
          "Organize clients, contacts, owners, activities, and tasks in a single workflow.",
          "Restrict access through explicit roles, departments, and organizational scope.",
          "Preserve history and audit trails to understand what changed, who changed it, and when.",
          "Generate summaries and identify next actions through interchangeable AI providers.",
        ],
        architecture: [
          "Permissions and data selection are resolved before any model is invoked.",
          "FastAPI, SQLAlchemy, PostgreSQL, and Alembic for a modular, traceable backend.",
          "Next.js, React, and TypeScript to clearly separate product areas and workflows.",
          "Vitest, Pytest, and Docker to validate behavior and reproduce deployment.",
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
