export interface SnapshotItem {
  label: string;
  value: string;
}

export interface EngineeringPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProfileData {
  name: string;
  handle: string;
  role: string;
  headline: string;
  subheadline: string;
  currentRole: string;
  githubUrl: string;
  /**
   * Direct contact email address.
   */
  email: string;
  emailIsPlaceholder: boolean;
  /**
   * LinkedIn profile URL (leave empty to hide the link).
   */
  linkedinUrl: string;
  linkedinIsPlaceholder: boolean;
  /**
   * OPTIONAL: Add a public URL or `/resume.pdf` path to show a Resume link.
   */
  resumeUrl: string;
  snapshot: SnapshotItem[];
  aboutParagraphs: string[];
  principles: EngineeringPrinciple[];
  experience: ExperienceItem[];
  services: ServiceItem[];
}

export const PROFILE: ProfileData = {
  name: 'Mubeen Ilyas',
  handle: 'Mubeen148',
  role: 'Full-Stack Software Engineer & Automation Architect',
  headline:
    'Full-stack web platforms, multi-tenant SaaS, and business workflow automation.',
  subheadline:
    'I design and ship TypeScript and Node.js systems end to end—from relational schemas and API integrations to fast, restrained user interfaces.',
  currentRole: 'Product & Full-Stack Engineering Lead (Private Venture)',
  githubUrl: 'https://github.com/Mubeen148',

  email: 'Mubeenilyas148@gmail.com',
  emailIsPlaceholder: false,
  linkedinUrl: 'https://www.linkedin.com/in/mubeen-ilyas-b4a4601b8/',
  linkedinIsPlaceholder: false,
  resumeUrl: '',

  snapshot: [
    {
      label: 'Focus',
      value: 'Multi-tenant SaaS, full-stack commerce & workflow automation',
    },
    {
      label: 'Core Stack',
      value: 'TypeScript, React 19, Next.js, Node.js, Express & Python',
    },
    {
      label: 'Data & Infra',
      value: 'PostgreSQL (RLS), MySQL, MongoDB, n8n & Docker',
    },
    {
      label: 'Leadership',
      value: 'Product & Full-Stack Engineering Lead (Private Venture)',
    },
  ],

  aboutParagraphs: [
    'I build production web applications and operational tooling where clean architecture directly supports real business workflows. Across client engagements and product work, I have shipped multi-tenant SaaS systems with row-level data isolation, bilingual e-commerce storefronts backed by normalized relational databases, and event-driven middleware linking accounting platforms with messaging APIs.',
    'My work spans the full lifecycle: modeling schemas in PostgreSQL, MySQL, and MongoDB; writing REST services, webhooks, and Python NLP pipelines; building responsive React and Next.js interfaces; and backing critical releases with multi-layer automated test suites and end-to-end QA verification.',
  ],

  principles: [
    {
      number: '01',
      title: 'End-to-End Ownership',
      description:
        'From database normalization, authentication, and RBAC rules to client state, technical SEO, and deployment—systems are designed as cohesive wholes rather than disconnected layers.',
    },
    {
      number: '02',
      title: 'Practical Automation & AI',
      description:
        'Automation and language models belong inside concrete workflows: instant quotation engines, WhatsApp/ERP notification pipelines, and reproducible NLP scoring rather than novelty demos.',
    },
    {
      number: '03',
      title: 'Tested, Maintainable Delivery',
      description:
        'Strong typing, explicit validation, security middleware, and layered testing—from Jest/Supertest API suites to Playwright browser verification—keep production systems dependable as they grow.',
    },
  ],

  experience: [
    {
      role: 'Chief Product Officer & Software Engineer',
      organization: 'AI & Data Engineering Venture (Private)',
      period: 'Current',
      summary:
        'Directing product architecture and engineering delivery across AI-assisted workflows, custom software platforms, and structured data systems.',
      highlights: [
        'Defined product strategy and multi-page web architecture built with Next.js, TypeScript, Tailwind CSS, and interactive 3D/motion tooling.',
        'Shaped service architectures combining language model workflows, reliable data ingestion pipelines, and full-stack operational applications.',
      ],
    },
    {
      role: 'Full-Stack & Automation Engineer',
      organization: 'Independent & Client Engagements',
      period: 'Ongoing',
      summary:
        'Designing and shipping production platforms for B2B service businesses, marketplace operators, and cross-border commerce teams.',
      highlights: [
        'Built a multi-tenant Business Operating System featuring a 60-second quotation/ROI engine, CRM pipeline, RBAC, PostgreSQL RLS schema, and n8n WhatsApp automation.',
        'Delivered full-stack administration and bilingual e-commerce platforms on Next.js, React, Express, Sequelize, MySQL, and MongoDB with 5-layer automated test coverage.',
        'Engineered Node.js webhook middleware integrating Zoho Books billing events with Meta WhatsApp Cloud API delivery.',
      ],
    },
  ],

  services: [
    {
      title: 'Full-Stack Web & SaaS Engineering',
      description:
        'Multi-tenant platforms, internal admin suites, and customer portals engineered with TypeScript, React, Next.js, Node.js, and relational databases.',
      deliverables: [
        'PostgreSQL / MySQL schema & RBAC design',
        'REST APIs, JWT/2FA auth & audit logging',
        'Responsive, accessible UI architecture',
      ],
    },
    {
      title: 'Workflow & API Automation',
      description:
        'Event-driven middleware and n8n pipelines that connect accounting, CRM, and messaging channels to eliminate manual follow-up.',
      deliverables: [
        'WhatsApp Cloud API & webhook handlers',
        'Zoho Books / ERP event synchronization',
        'Automated PDF generation & n8n orchestration',
      ],
    },
    {
      title: 'Commerce & Internal Platforms',
      description:
        'High-contrast storefronts, catalog search, order operations portals, and structured SEO/JSON-LD implementations built for conversion and clarity.',
      deliverables: [
        'Multi-currency & bilingual storefronts',
        'Admin inventory, order & inquiry workflows',
        'Technical SEO, sitemaps & automated QA',
      ],
    },
  ],
};
