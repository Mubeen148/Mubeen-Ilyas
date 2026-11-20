export interface SkillCategory {
  title: string;
  description: string;
  items: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & Interfaces',
    description: 'Accessible, responsive web applications and design systems.',
    items: [
      'TypeScript',
      'JavaScript (ES2023)',
      'React 19',
      'Next.js (App Router)',
      'Tailwind CSS v3 / v4',
      'Vite',
      'Redux',
      'Framer Motion / GSAP',
      'Three.js',
      'Recharts',
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'REST services, authentication, webhooks, and middleware.',
    items: [
      'Node.js',
      'Express',
      'Next.js API Routes',
      'Sequelize ORM',
      'Mongoose',
      'JWT & TOTP 2FA',
      'bcrypt & Helmet',
      'Joi / express-validator',
      'Nodemailer',
    ],
  },
  {
    title: 'Databases & Architecture',
    description: 'Normalized schemas, multi-tenancy, and access isolation.',
    items: [
      'PostgreSQL',
      'Supabase (RLS)',
      'MySQL (mysql2)',
      'MongoDB',
      'Multi-Tenant RBAC',
      'Audit Logging',
      'Database Seeding',
    ],
  },
  {
    title: 'Automation, AI & NLP',
    description: 'Workflow orchestration, messaging APIs, and ML pipelines.',
    items: [
      'n8n Workflows',
      'Meta WhatsApp Cloud API',
      'Zoho Books Webhooks',
      'Python',
      'PyTorch',
      'Hugging Face Transformers',
      'Sentence-Transformers',
      'Streamlit & Plotly',
      'Gemini API (@google/genai)',
      'PDFKit',
    ],
  },
  {
    title: 'Web3 & Smart Contracts',
    description: 'EVM contract development and wallet integration.',
    items: [
      'Solidity',
      'Hardhat 3',
      'Ethers.js v6',
      'Hardhat Ignition',
      'MetaMask Integration',
    ],
  },
  {
    title: 'Testing, DevOps & SEO',
    description: 'Multi-layer verification, deployment, and search readiness.',
    items: [
      'Jest & Supertest',
      'Playwright E2E QA',
      'Mocha & Chai',
      'Docker',
      'PM2',
      'Vercel',
      'ESLint & Prettier',
      'JSON-LD / Schema.org',
      'Dynamic Sitemaps & GEO/AEO',
    ],
  },
];
