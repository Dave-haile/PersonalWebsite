import { Cpu, Layout, Layers, ShieldCheck, Database, Zap, CheckCircle2, Settings, Monitor, Server } from 'lucide-react';

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
export const SKILLS_SYSTEMS = [
  {
    category: 'Frontend',
    items: [
      'JavaScript', 'TypeScript', 'React (TS) / Next.js', 'TailwindCSS', 'Framer Motion & gsap', 'Three.js'
    ],
    accent: '#3b82f6'
  },
  {
    category: 'Backend',
    items: [
      'PHP', 'Laravel', 'Node.js', 'REST API Design', 'Authentication & RBAC'
    ],
    accent: '#06b6d4'
  },
  {
    category: 'Database',
    items: [
      'PostgreSQL', 'MySQL', 'Relational Data Modeling', 'Schema Design & Constraints'
    ],
    accent: '#6366f1'
  },
  {
    category: 'Realtime & Infra',
    items: [
      'Docker', 'Socket.io', 'Event-Driven Updates', 'API Integration Patterns', 'Performance Monitoring'
    ],
    accent: '#a855f7'
  },
  {
    category: 'Mobile (Foundational)',
    items: [
      'Flutter', 'Kotlin', 'Mobile UI Design'
    ],
    accent: '#ec4899'
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
    description: 'Designed and built a full-scale web platform for one of the largest shopping malls in the region, supporting over 600 tenants and a high-traffic public-facing site.',
    responsibilities: [
      'Designed a structured backend architecture to support dynamic mall content and operations',
      'Built a custom admin dashboard enabling non-technical staff to manage tenants, events, vacancies, and site content',
      'Implemented role-based access control to secure tenant data and administrative actions',
      'Developed public-facing interfaces for tenants, events, vacancy listings, and mall services'
    ],
    tech: ['Laravel', 'React', 'Inertia.js', 'MySQL'],
    period: '2025'
  },
  {
    title: 'University Clearance Management System',
    context: 'Academic System · Full-Stack Developer',
    description: 'Designed and implemented a centralized web system to replace a fully manual university clearance process involving multiple departments and approval stages.',
    responsibilities: [
      'Designed backend architecture and API structure to support multi-department approval workflows',
      'Implemented authentication and role-based access control for students, staff, and administrators',
      'Designed PostgreSQL schemas to handle complex academic relationships and clearance states',
      'Refined UI and workflows through iterative feedback from academic staff and users'
    ],
    tech: ['React (TypeScript)', 'Tailwind CSS', 'Laravel', 'PostgreSQL'],
    period: '2025'
  }
];
export const EXPLORING = [
  {
    category: "Python Backend",
    items: [
      { name: "Flask", detail: "Building lightweight APIs and understanding request-response cycles" },
      { name: "Django", detail: "Designing structured, maintainable backend systems with full-stack patterns" },
      { name: "FastAPI", detail: "Developing high-performance async APIs with modern Python frameworks" }
    ]
  },
  {
    category: "Frontend & Meta Frameworks",
    items: [
      { name: "Vue", detail: "Exploring Vue’s reactive component architecture and state management" },
      { name: "Nuxt", detail: "Implementing server-side rendering, routing, and SEO-optimized frontend apps" },
      { name: "Next.js", detail: "Building production-ready React applications with advanced data-fetching strategies" }
    ]
  },
  {
    category: "Mobile Development",
    items: [
      { name: "Flutter", detail: "Developing cross-platform apps to understand component and state management patterns" },
      { name: "Kotlin", detail: "Learning native Android development and building foundational apps" }
    ]
  },
  {
    category: "Backend & Systems",
    items: [
      { name: "Go", detail: "Designing high-performance concurrent systems and scalable APIs" },
      { name: "Real-time systems", detail: "Implementing real-time, event-driven communication for collaborative systems" },
      { name: "System design", detail: "Structuring APIs and designing resilient system architectures" }
    ]
  },
  {
    category: "Infrastructure Awareness",
    items: [
      { name: "Docker fundamentals", detail: "Containerizing applications and managing local development environments" },
      { name: "Deployment workflows", detail: "Implementing Dev → Staging → Production deployment pipelines" }
    ]
  }
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Evolution', href: '#evolution' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Experience', href: '#experience' },
  { name: 'Exploring', href: '#exploring' },
  { name: 'Contact', href: '#contact' },
];
export const CAPABILITY_GROUPS = [
  {
    title: 'Frontend Engineering',
    focus: 'User experience, performance, and maintainability',
    icon: Monitor,
    items: [
      'Designing responsive and accessible user interfaces',
      'Component-driven architecture with clear boundaries',
      'Type-safe frontend logic using TypeScript',
      'Scalable styling systems with TailwindCSS',
      'Predictable state and UI behavior'
    ],    
    accentColor: 'hsl(217, 91%, 60%)'
  },
  {
    title: 'Backend & API Development',
    focus: 'Business logic and data integrity',
    icon: Server,
    items: [
      'Designing RESTful APIs with Laravel, Node, Go',
      'Authentication and authorization flows',
      'Role-based access control (RBAC)',
      'Validation, error handling, and data flow',
      'Structuring logic for long-term maintainability'
    ],
    accentColor: 'hsl(270, 60%, 55%)'
  },
  {
    title: 'System Architecture',
    focus: 'Designing systems that scale beyond MVPs',
    icon: Layers,
    items: [
      'Separating frontend, backend, and data layers',
      'Integrating React with Laravel via Inertia.js, axios',
      'Designing admin-controlled and content-controlled systems',
      'Planning for scalability in large multi-user platforms'
    ],
    accentColor: 'hsl(330, 70%, 55%)'
  },
  {
    title: 'Realtime & Interactive Systems',
    focus: 'Live user interaction',
    icon: Zap,
    items: [
      'Real-time communication using Socket.IO',
      'Live status updates and notifications',
      'Interactive dashboards and data sync',
      'Synchronizing frontend state with backend events'
    ],
    accentColor: 'hsl(45, 95%, 55%)'
  },
  {
    title: 'Database & Data Modeling',
    focus: 'Reliable data structures',
    icon: Database,
    items: [
      'PostgreSQL schema design',
      'Relational data modeling',
      'Data consistency and constraints',
      'Query optimization for growing systems'
    ],
    accentColor: 'hsl(160, 70%, 45%)'
  },
  {
    title: 'Admin & Content Management',
    focus: 'Control and flexibility for organizations',
    icon: Settings,
    items: [
      'Custom admin dashboards',
      'Full control over frontend content',
      'Managing tenants, users, and roles',
      'Supporting non-technical administrators'
    ],
    accentColor: 'hsl(180, 70%, 50%)'
  },
  {
    title: 'Project Ownership & Delivery',
    focus: 'End-to-end responsibility',
    icon: CheckCircle2,
    items: [
      'Translating requirements into working systems',
      'Iterative improvement and UI refinement',
      'Versioned development mindset',
      'Clear documentation and structure'
    ],
    accentColor: 'hsl(25, 95%, 55%)'
  }
];