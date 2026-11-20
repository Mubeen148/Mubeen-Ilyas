export type ProjectCategory =
  | 'all'
  | 'saas'
  | 'automation-ai'
  | 'commerce'
  | 'open-source';

export type ProjectVisibility =
  | 'Private Product'
  | 'Private / Client Work'
  | 'Private / Venture'
  | 'Private / Applied AI'
  | 'Open Source';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  visibility: ProjectVisibility;
  category: Exclude<ProjectCategory, 'all'>;
  featured: boolean;
  summary: string;
  problem: string;
  architectureHighlights: string[];
  stack: string[];
  impact: string;
  githubUrl?: string;
  secondaryGithubUrl?: {
    label: string;
    url: string;
  };
}

export const PROJECT_FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'saas', label: 'SaaS & Systems' },
  { id: 'automation-ai', label: 'Automation & AI' },
  { id: 'commerce', label: 'E-Commerce & Web' },
  { id: 'open-source', label: 'Open Source' },
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'multi-tenant-business-os',
    title: 'Multi-Tenant Business Operating System',
    subtitle: 'Instant Quotation Engine, CRM Pipeline & Workflow Automation Suite',
    visibility: 'Private Product',
    category: 'saas',
    featured: true,
    summary:
      'Multi-tenant B2B/B2C Business Operating System uniting a 60-second instant quote & ROI calculator, CRM pipeline, project boards, HRM, and WhatsApp follow-up automation.',
    problem:
      'High-ticket service contractors often lose leads due to slow manual quoting, fragmented spreadsheets, and inconsistent follow-ups across sales and field operations.',
    architectureHighlights: [
      'Engineered an 8-table PostgreSQL / Supabase schema with Row-Level Security (RLS) isolating tenants, quotes, CRM deals, contact activity timelines, automation sequences, RBAC roles, and audit logs.',
      'Built dual-market (PKR / USD) instant estimation across solar, remodeling, clinic, and contractor verticals alongside dynamic tenant-slug quote portals.',
      'Implemented an importable n8n WhatsApp/Twilio webhook workflow, automated PDF playbook generation via pdfkit, and end-to-end Playwright QA verification scripts.',
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'PostgreSQL / RLS',
      'n8n',
      'Playwright',
      'PDFKit',
    ],
    impact:
      'Unifies quoting, CRM deal tracking, RBAC team security, and automated lead recovery within a single multi-tenant architecture.',
  },
  {
    id: 'ev-marketplace-admin',
    title: 'EV Marketplace Administration Suite',
    subtitle: 'Full-Stack Vehicle Registry, Dealer Portal & Analytics Platform',
    visibility: 'Private / Client Work',
    category: 'saas',
    featured: true,
    summary:
      'Full-stack administration platform built for an electric vehicle marketplace, covering vehicle inventory, dealer oversight, charging station directories, and inquiry pipelines.',
    problem:
      'Managing multi-brand EV listings, dealership onboarding, public infrastructure directories, and role-restricted operations required a unified, auditable admin system.',
    architectureHighlights: [
      'Paired a React 19 + TypeScript + Vite dashboard (with Recharts analytics, rich text tooling, and Gemini API integration) with a Node.js, Express, Sequelize, and MySQL backend.',
      'Enforced defense-in-depth security using 6-role RBAC, JWT sessions, bcrypt hashing, TOTP two-factor authentication (otplib), Helmet headers, express-validator, and rate limiting.',
      'Verified reliability with a 5-layer Jest & Supertest test suite spanning white-box unit, black-box integration, gray-box, functional, and non-functional testing plus PM2 deployment.',
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Node.js',
      'Express',
      'Sequelize',
      'MySQL',
      'Jest & Supertest',
      'Recharts',
    ],
    impact:
      'Centralizes marketplace operations across six access tiers with documented multi-layer automated test verification.',
  },
  {
    id: 'bilingual-fresh-food-commerce',
    title: 'Bilingual Fresh-Food E-Commerce Platform',
    subtitle: 'Cross-Border Next.js Storefront & Operations Portal',
    visibility: 'Private / Client Work',
    category: 'commerce',
    featured: true,
    summary:
      'Cross-border full-stack e-commerce platform supporting real-time PKR/SAR currency switching, bilingual English/Arabic catalogs, and an 8-table MySQL operations backend.',
    problem:
      'Serving regional customers across Pakistan and Saudi Arabia demanded localized catalogs, transparent cold-chain product details, fast search, and strict inventory/order tracking.',
    architectureHighlights: [
      'Built on Next.js (App Router), React 19, TypeScript, and Tailwind CSS with dual light/dark themes, instant keyboard search (⌘K), slide-out cart drawer, and delivery-threshold tracking.',
      'Designed an 8-table normalized MySQL (mysql2, utf8mb4) schema storing localized product attributes, store settings, SEO/AEO/GEO metadata, orders, order items, admin users, and audit logs.',
      'Integrated a dedicated store operations portal alongside dynamic sitemap.xml, robots.txt, and Schema.org JSON-LD structured data.',
    ],
    stack: [
      'Next.js',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'MySQL',
      'mysql2',
      'JSON-LD SEO',
    ],
    impact:
      'Delivers localized cross-border shopping with structured relational persistence and full audit visibility.',
  },
  {
    id: 'whatsapp-zoho-integration',
    title: 'WhatsApp Cloud API & Zoho Books Integration',
    subtitle: 'Event-Driven Accounting & Customer Messaging Middleware',
    visibility: 'Private / Client Work',
    category: 'automation-ai',
    featured: true,
    summary:
      'Node.js integration service connecting Zoho Books accounting events with Meta’s WhatsApp Cloud API for automated invoicing, receipts, overdue reminders, and customer replies.',
    problem:
      'Finance and operations teams needed invoice PDFs, credit notes, payment confirmations, and overdue alerts delivered automatically on WhatsApp rather than via manual follow-ups.',
    architectureHighlights: [
      'Implemented dedicated Zoho Books webhook endpoints covering invoice creation, payment receipts, credit note issuance, and scheduled overdue reminders with public/signed PDF attachment delivery.',
      'Built Meta WhatsApp Cloud API webhook verification, inbound multi-media message ingestion (text, image, video, audio, document), and multi-recipient broadcast endpoints.',
      'Structured modular Express routing, Axios API clients, and service health monitoring ready for containerized or cloud deployment.',
    ],
    stack: [
      'Node.js 18+',
      'Express',
      'Meta WhatsApp Cloud API',
      'Zoho Books Webhooks',
      'Axios',
      'REST APIs',
    ],
    impact:
      'Automates end-to-end billing notifications and payment follow-ups directly inside customers’ primary messaging channel.',
  },
  {
    id: 'ai-engineering-studio-platform',
    title: 'AI & Data Engineering Studio Platform',
    subtitle: 'Multi-Route Next.js Architecture, Interactive 3D & Inquiry Pipeline',
    visibility: 'Private / Venture',
    category: 'saas',
    featured: true,
    summary:
      'Multi-page digital platform for an AI, software, and data engineering studio showcasing system architecture, data pipelines, capability scenarios, and inquiry routing.',
    problem:
      'Communicating complex AI workflows, streaming data architectures, and full-stack delivery principles clearly without relying on vague claims or generic marketing templates.',
    architectureHighlights: [
      'Architected a multi-route Next.js 16 (App Router) and TypeScript web application with Tailwind CSS v4, dedicated architecture/pipeline/process pages, and custom SEO routes.',
      'Combined interactive Three.js graphics, GSAP, Framer Motion, and Lenis smooth scrolling with restrained editorial typography and clean component boundaries.',
      'Implemented an API-backed contact inquiry route via Nodemailer alongside structured Open Graph and canonical metadata across every page.',
    ],
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Three.js',
      'GSAP',
      'Framer Motion',
      'Nodemailer',
    ],
    impact:
      'Presents technical capabilities, engineering principles, and system architectures through a fast, cohesive web platform.',
  },
  {
    id: 'ai-nlp-toolkit',
    title: 'AI NLP Analysis & Text Processing Toolkit',
    subtitle: 'Transformer Classification, Perplexity Scoring & Semantic Search',
    visibility: 'Private / Applied AI',
    category: 'automation-ai',
    featured: true,
    summary:
      'Python NLP workbench uniting RoBERTa sequence classification, GPT-2 perplexity/burstiness analysis, semantic similarity checks, and multi-format document ingestion.',
    problem:
      'Evaluating text provenance, sentence-level statistical predictability, and semantic overlap across uploaded documents required combining multiple transformer models in one reproducible tool.',
    architectureHighlights: [
      'Combined roberta-base-openai-detector classification with sliding-window GPT-2 log-likelihood perplexity and sentence-level burstiness variance metrics via NLTK tokenization.',
      'Integrated all-MiniLM-L6-v2 Sentence-Transformers embeddings for semantic similarity and plagiarism matching across web-retrieved snippets.',
      'Added multi-format parsing for TXT, PDF (PyPDF2), and DOCX (python-docx) files with interactive Plotly visualizations in Streamlit.',
    ],
    stack: [
      'Python',
      'PyTorch',
      'Hugging Face Transformers',
      'Sentence-Transformers',
      'Streamlit',
      'NLTK',
      'Plotly',
    ],
    impact:
      'Consolidates transformer inference, statistical text analysis, and document parsing into an interactive research interface.',
  },
  {
    id: 'ethereum-supply-chain-dapp',
    title: 'Ethereum Supply Chain Smart Contract & dApp',
    subtitle: 'Solidity Provenance Contract, Hardhat 3 & MetaMask UI',
    visibility: 'Open Source',
    category: 'open-source',
    featured: false,
    summary:
      'Solidity smart contract tracking product registration and custody transfers across Manufactured, In_Transit, and Delivered states with timestamped on-chain history and a React/MetaMask interface.',
    problem:
      'Demonstrating verifiable, tamper-resistant custody transitions between manufacturers and downstream owners without centralized intermediaries.',
    architectureHighlights: [
      'Wrote the SupplyChain Solidity contract (^0.8.0) enforcing manufacturer-only registration, current-owner transfer authorization, and immutable on-chain History[] logs.',
      'Configured Hardhat 3 Beta with Ethers.js v6, TypeScript, Mocha/Chai test tooling, and Ignition deployment modules.',
      'Connected a lightweight React frontend using MetaMask wallet detection (window.ethereum) and Ethers.js contract address binding.',
    ],
    stack: ['Solidity', 'Hardhat 3', 'Ethers.js v6', 'TypeScript', 'React', 'Mocha & Chai'],
    impact:
      'Provides an auditable on-chain supply chain provenance reference implementation with automated deployment setup.',
    githubUrl: 'https://github.com/Mubeen148/Hardhat',
  },
  {
    id: 'apparel-ecommerce-monorepo',
    title: 'Full-Stack Apparel E-Commerce Monorepo',
    subtitle: 'MERN Storefront, REST API & Unified Build Pipeline',
    visibility: 'Private / Client Work',
    category: 'commerce',
    featured: false,
    summary:
      'End-to-end MERN monorepo pairing an Express + MongoDB/Mongoose REST API (JWT auth, bcrypt, Joi validation) with a React + Redux storefront and single-command cloud build scripts.',
    problem:
      'Coordinating product catalog management, user authentication, and single-server static + API deployment for a direct-to-consumer apparel storefront.',
    architectureHighlights: [
      'Structured separate backend/ and frontend/ workspaces orchestrated from a root monorepo script for concurrent dev execution, database seeding, and unified builds.',
      'Built Express REST routes for auth, categories, products, and users backed by MongoDB/Mongoose schemas, Joi validation, bcrypt password hashing, and JWT middleware.',
      'Implemented state management with React, Redux, Redux Thunk, React Router, Axios, and Sass styling.',
    ],
    stack: ['MongoDB', 'Mongoose', 'Express', 'React', 'Redux', 'Node.js', 'Joi', 'JWT', 'Sass'],
    impact:
      'Streamlines full-stack storefront deployment from a single unified Node/Express runtime.',
  },
  {
    id: 'industrial-automation-site',
    title: 'Industrial Automation Corporate Platform',
    subtitle: 'B2B Engineering Presence & Structured Schema.org SEO',
    visibility: 'Private / Client Work',
    category: 'commerce',
    featured: false,
    summary:
      'Fast, SEO-structured corporate web platform for an industrial electrical engineering and PLC/SCADA automation contractor.',
    problem:
      'Presenting specialized industrial services—switchgear manufacturing, MCC panels, BMS architecture, and VFD systems—with strong search discoverability and clean mobile access.',
    architectureHighlights: [
      'Engineered a lightweight React 18 + Vite web application optimized for fast load times and clean typography.',
      'Embedded comprehensive Schema.org LocalBusiness and OfferCatalog JSON-LD structured data alongside Open Graph and canonical tags.',
    ],
    stack: ['React 18', 'JavaScript', 'Vite', 'JSON-LD SEO', 'HTML5', 'CSS3'],
    impact:
      'Establishes an accessible, search-engine-ready digital presence for industrial automation buyers.',
  },
  {
    id: 'whatsapp-webhook-n8n-cloud',
    title: 'WhatsApp Webhook Receiver & Self-Hosted n8n Cloud',
    subtitle: 'Open-Source Messaging Listener & Containerized Automation Node',
    visibility: 'Open Source',
    category: 'open-source',
    featured: false,
    summary:
      'Lightweight Express.js Meta webhook verification/event receiver paired with a Dockerized self-hosted n8n workflow automation container.',
    problem:
      'Providing minimal, inspectable building blocks for verifying Meta WhatsApp Cloud API webhooks and self-hosting n8n automation workflows.',
    architectureHighlights: [
      'Implemented GET challenge verification against environment verify tokens and structured POST event payload logging in Express (Waapi).',
      'Configured a clean Dockerfile built on n8nio/n8n:latest for portable self-hosted workflow orchestration (my-n8n-cloud).',
    ],
    stack: ['Node.js', 'Express', 'Meta Webhooks', 'Docker', 'n8n'],
    impact:
      'Serves as reusable starter infrastructure for webhook-driven automation pipelines.',
    githubUrl: 'https://github.com/Mubeen148/Waapi',
    secondaryGithubUrl: {
      label: 'my-n8n-cloud',
      url: 'https://github.com/Mubeen148/my-n8n-cloud',
    },
  },
];
