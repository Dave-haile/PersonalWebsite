import { Code2, Cpu, Layout, Layers, ShieldCheck, CheckCircle, Database, Zap, Terminal } from 'lucide-react';
import React from 'react';

export const CAPABILITIES = [
  {
    icon: React.createElement(Code2, { className: "w-5 h-5" }),
    title: 'Frontend Engineering',
    focus: 'User experience, performance, and maintainability',
    items: [
      'Building responsive, accessible interfaces',
      'Component-driven architecture with React',
      'Type-safe development using TypeScript',
      'Scalable design systems with TailwindCSS',
      'Predictable state and clean UI logic'
    ]
  },
  {
    icon: React.createElement(Terminal, { className: "w-5 h-5" }),
    title: 'Backend & API Development',
    focus: 'Business logic and data integrity',
    items: [
      'Designing RESTful APIs with Laravel',
      'Authentication and authorization flows',
      'Granular Role-Based Access Control (RBAC)',
      'Robust validation and error handling',
      'Structuring logic for long-term maintainability'
    ]
  },
  {
    icon: React.createElement(Layers, { className: "w-5 h-5" }),
    title: 'System Architecture',
    focus: 'Designing systems that scale beyond MVPs',
    items: [
      'Separating frontend, backend, and data layers',
      'React-Laravel integration (Inertia.js / APIs)',
      'Designing admin-controlled content systems',
      'Architectural planning for institutional scale'
    ]
  },
  {
    icon: React.createElement(Zap, { className: "w-5 h-5" }),
    title: 'Realtime & Interactive Systems',
    focus: 'Live user interaction',
    items: [
      'Real-time communication using Socket.IO',
      'Live status updates and notifications',
      'Interactive analytical dashboards',
      'Synchronizing frontend with backend events'
    ]
  },
  {
    icon: React.createElement(Database, { className: "w-5 h-5" }),
    title: 'Database & Data Modeling',
    focus: 'Reliable data structures',
    items: [
      'Relational modeling (PostgreSQL / MySQL)',
      'Defining strict consistency and constraints',
      'Optimized indexing for growing datasets',
      'Complex query design and data integrity'
    ]
  },
  {
    icon: React.createElement(ShieldCheck, { className: "w-5 h-5" }),
    title: 'Admin & Content Management',
    focus: 'Control and flexibility for organizations',
    items: [
      'Custom-built administrative engines',
      'Granular control over all frontend content',
      'Tenant and role management systems',
      'UX designed for non-technical admins'
    ]
  },
  {
    icon: React.createElement(CheckCircle, { className: "w-5 h-5" }),
    title: 'Project Ownership & Delivery',
    focus: 'End-to-end responsibility',
    items: [
      'Translating requirements into working systems',
      'Iterative improvement and feature expansion',
      'Versioned development mindset',
      'Clear documentation and system structure'
    ]
  }
];

export const SKILLS = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js / GLSL', 'Framer Motion', 'Redux / Zustand']
  },
  {
    category: 'Backend',
    icon: Cpu,
    items: ['Node.js / Express', 'Go (Golang)', 'Python / Django', 'PostgreSQL / MongoDB', 'Redis', 'GraphQL']
  },
  {
    category: 'Architecture',
    icon: Layers,
    items: ['Microservices', 'RESTful APIs', 'Docker / Kubernetes', 'CI/CD Pipelines', 'AWS / GCP', 'WebSockets']
  },
  {
    category: 'Performance',
    icon: ShieldCheck,
    items: ['SEO Optimization', 'Web Core Vitals', 'Unit Testing (Jest)', 'Server-side Rendering', 'Edge Computing']
  }
];

export const PROJECTS = [
  {
    title: 'Nexus OS',
    description: 'A futuristic web-based operating system with window management and custom shader effects.',
    tech: ['Next.js', 'Three.js', 'Tailwind', 'Framer Motion'],
    image: 'https://picsum.photos/seed/nexus/800/600',
    link: '#'
  },
  {
    title: 'Aether Commerce',
    description: 'Headless e-commerce platform with real-time inventory and high-performance checkout flows.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://picsum.photos/seed/aether/800/600',
    link: '#'
  },
  {
    title: 'Cipher Cloud',
    description: 'Encrypted file storage solution focusing on privacy and distributed architecture.',
    tech: ['Go', 'React', 'IPFS', 'WebCrypto API'],
    image: 'https://picsum.photos/seed/cipher/800/600',
    link: '#'
  },
  {
    title: 'Nova Analytics',
    description: 'Enterprise-grade data visualization dashboard with real-time streaming capabilities.',
    tech: ['Python', 'D3.js', 'FastAPI', 'Redis'],
    image: 'https://picsum.photos/seed/nova/800/600',
    link: '#'
  }
];

export const EXPERIENCE = [
  {
    title: 'Dembel City Center Platform',
    context: 'Commercial System · Full-Stack Developer',
    description: 'Designed and developed a web platform for one of the largest shopping malls, serving over 600 tenants and a wide public audience.',
    responsibilities: [
      'Engineered a data-driven architecture for dynamic mall operations',
      'Developed a comprehensive Admin dashboard for granular content management',
      'Implemented role-based content control to secure tenant data',
      'Crafted interfaces for Tenants, Events, Vacancies, and Public Services'
    ],
    tech: ['Laravel', 'React', 'Inertia.js', 'MySQL'],
    period: '2023 - 2024'
  },
  {
    title: 'University Clearance Management System',
    context: 'Academic System · Full-Stack Developer',
    description: 'Digitized a fully manual university clearance process involving multiple departments into a centralized, role-based web system.',
    responsibilities: [
      'Architected backend system design and scalable API logic',
      'Developed robust authentication and cross-departmental role management',
      'Modeled PostgreSQL schemas for complex academic data relationships',
      'Iterative UI/UX refinement based on stakeholder feedback'
    ],
    tech: ['React (TypeScript)', 'Tailwind CSS', 'Laravel', 'PostgreSQL'],
    period: '2022 - 2023'
  }
];
export const EXPLORING = [
  {
    category: "Python Backend",
    items: [
      { name: "Flask", detail: "Minimal backend control and request lifecycles" },
      { name: "Django", detail: "Structured backend systems and full-stack patterns" },
      { name: "FastAPI", detail: "Modern async APIs and performance-oriented services" }
    ]
  },
  {
    category: "Frontend & Meta Frameworks",
    items: [
      { name: "Vue", detail: "Alternative component mental model" },
      { name: "Nuxt", detail: "SSR, routing, and SEO-aware architecture" },
      { name: "Next.js", detail: "Production-grade React and data fetching patterns" }
    ]
  },
  {
    category: "Mobile Development",
    items: [
      { name: "Flutter", detail: "Cross-platform apps; hands-on small projects for learning patterns" },
      { name: "Kotlin", detail: "Native Android basics; explored building simple apps" }
    ]
  },
  {
    category: "Backend & Systems",
    items: [
      { name: "Go", detail: "Performance, concurrency, and system design" },
      { name: "Real-time systems", detail: "WebSockets and event-driven communication" },
      { name: "System design", detail: "API boundaries and architecture decisions" }
    ]
  },
  {
    category: "Infrastructure Awareness",
    items: [
      { name: "Docker fundamentals", detail: "Containerization and local environments" },
      { name: "Deployment workflows", detail: "Dev / Staging / Production environments" }
    ]
  }
];