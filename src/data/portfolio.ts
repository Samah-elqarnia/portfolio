// ─────────────────────────────────────────────────────────────
//  data/portfolio.ts  —  Edit this file to update your content
// ─────────────────────────────────────────────────────────────
import chatbotImg from './assets/enerasist.png'
import topautoImg from './assets/topauto.png'
import luxepediaImg from './assets/luxepedia.png'
import techplaceImg from './assets/techplace.png'
import securityImg from './assets/website.png'
import wellnessImg from './assets/wellness.png'
import mobileImg from './assets/mobile.png'
import quantImg from './assets/quant.png'

export const personalInfo = {
  name: 'Samah EL QARNIA',
  title: 'Software Engineer · Cybersecurity Enthusiast',
  tagline: 'Je conçois des expériences numériques où l\'esthétique moderne rencontre la rigueur technique. Des landing pages aux applications web complexes, je bâtis des systèmes scalables avec une priorité absolue : la sécurité dès la conception. Mon objectif est de transformer des idées ambitieuses en produits numériques élégants, performants et durablement protégés',
  location: 'Mohammedia, Maroc',
  email: 'elqarniasamah@gmail.com',
  phone: '+212 770 619 376',
  github: 'https://github.com/Samah-elqarnia',
  linkedin: 'https://linkedin.com/in/samah-el-qarnia',
  cvUrl: '/cv-samah-elqarnia.pdf',   // Place your CV PDF in /public
  languages: [
    { lang: 'Anglais', level: 'C1', flag: '🇬🇧' },
    { lang: 'Français', level: 'B2', flag: '🇫🇷' },
    { lang: 'Arabe', level: 'Natif', flag: '🇲🇦' },
  ],
}

export const stats = [
  { num: '3+', label: 'Années de dev' },
  { num: '6', label: 'Projets majeurs' },
  { num: '10+', label: 'Certifications' },
  { num: '3', label: "Domaines d'expertise" },
]

// ── Skills ────────────────────────────────────────────────────
export const skills = [
  {
    icon: '⬡',
    title: 'Développement Web & Mobile',
    desc: 'Full-stack moderne, de l\'analyse des besoins au déploiement. APIs robustes, UX soignée.',
    tags: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'Firebase', 'MongoDB', 'MySQL', 'Docker', 'REST API'],
  },
  {
    icon: '◈',
    title: 'Intelligence Artificielle',
    desc: 'Pipelines RAG, agents LLM, automatisation intelligente et intégration de l\'IA dans des systèmes réels.',
    tags: ['LangChain', 'RAG', 'TensorFlow', 'PyTorch', 'scikit-learn', 'n8n', 'Qdrant'],
  },
  {
    icon: '◇',
    title: 'Cybersécurité',
    desc: 'Ethical hacking, pentest web & réseau, analyse de vulnérabilités et sécurité des systèmes.',
    tags: ['Kali Linux', 'Basic Pentesting', 'CCNA', 'Bash', 'SSL/TLS'],
  },
  {
    icon: '◻',
    title: 'Finance Quantitative',
    desc: 'Modélisation financière, pricing d\'options, optimisation de portefeuille et backtesting.',
    tags: ['Black-Scholes', 'Delta Hedging', 'Greeks', 'NumPy', 'Pandas', 'Matplotlib', 'backtrader'],
  },
  {
    icon: '◉',
    title: 'Langages de Programmation',
    desc: 'Solide base algorithmique et orientée objet, des systèmes embarqués au web.',
    tags: ['Python', 'JavaScript', 'Java', 'C', 'Design Patterns', 'POO'],
  },
  {
    icon: '○',
    title: 'Outils & Cloud',
    desc: 'Infrastructure, versioning , design et gestion de projets techniques.',
    tags: ['Git', 'GitHub', 'AWS', 'Linux', 'Figma', 'Cloudinary', 'Stripe', 'Clerk', 'Inngest'],
  },
]

// ── Projects ──────────────────────────────────────────────────
import type { StaticImageData } from 'next/image'

export type Project = {
  id: string
  name: string
  subtitle: string
  desc: string
  tags: string[]
  category: string
  github: string
  demo?: string
  image?: string | StaticImageData
}

export const projects: Project[] = [
  {
    id: 'chatbot-technique',
    name: 'Enerassist',
    subtitle: 'Chatbot Technique d\'Assistance',
    desc: 'Assistant IA utilisant la RAG pour diagnostiquer les pannes de vannes depuis la documentation technique. Intègre un serveur MCP qui transforme automatiquement les résolutions complexes en tickets Jira pour le support technique.',
    tags: ['React', 'FastAPI', 'LangChain', 'Mistral AI', 'Qdrant', 'MongoDB', 'MCP Server'],
    category: 'IA',
    github: 'https://github.com/Samah-elqarnia',
    image: chatbotImg,
  },
  {
    id: 'topauto',
    name: 'TOPAUTO',
    subtitle: 'Site web pour un concessionnaire automobile',
    desc: 'Site complet pour un concessionnaire automobile : prise de RDV en ligne, catalogue véhicules, espace administrateur pour la gestion des données et le suivi des opérations.',
    tags: ['React.js', 'Firebase Auth', 'Firestore', 'Cloudinary'],
    category: 'Web',
    github: 'https://github.com/Samah-elqarnia',
    image: topautoImg,
  },

  {
    id: 'quant',
    name: 'pipeline de construction quantitative du portfolio',
    subtitle: 'Pipeline quantitative',
    desc: 'Full quantitative asset selection and portfolio optimization workflow using S&P 500 stocks, factor models, clustering, and modern portfolio theory.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'ML'],
    category: 'Finance quantitative',
    github: 'https://github.com/Samah-elqarnia',
    image: quantImg,
  },
  {
    id: 'luxepedia',
    name: 'Luxepedia',
    subtitle: 'site web E-commerce',
    desc: 'Site e-commerce haut de gamme inspiré des magazines de mode, offrant une vitrine raffinée et une gestion dynamique des collections en temps réel en utilisant MERN stack ',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'multer'],
    category: 'Web',
    github: 'https://github.com/Samah-elqarnia',
    image: luxepediaImg,
  },
  {
    id: 'techplace',
    name: 'TechPlace',
    subtitle: 'site web E-commerce',
    desc: 'Marketplace tech full-stack avec gestion des produits, panier, commandes et tableau de bord administrateur.Paiement Stripe, authentification Clerk, gestion des médias Cloudinary et jobs asynchrones avec Inngest.',
    tags: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Clerk', 'Inngest', 'Cloudinary'],
    category: 'Web',
    github: 'https://github.com/Samah-elqarnia',
    image: techplaceImg,
  },
  {
    id: 'security-scanner',
    name: 'Website Security Scanner',
    subtitle: 'Détection de Vulnérabilités',
    desc: 'Analyse automatique de sites web à partir d\'une URL : ports ouverts, technologies, config HTTP/HTTPS, certificats SSL etc... Génère un rapport PDF synthétique téléchargeable.',
    tags: ['Bash', 'React.js', 'Express.js', 'Node.js', 'PDF Generation'],
    category: 'Cybersécurité',
    github: 'https://github.com/Samah-elqarnia',
    image: securityImg,
  },
  {
    id: 'mental-wellness',
    name: 'Mental Wellness',
    subtitle: 'Application Desktop',
    desc: 'Application desktop dédiée au bien-être mental. Suivi de l\'humeur, ressources personnalisées et outils d\'accompagnement pour une santé mentale au quotidien.',
    tags: ['JavaFX', 'Java', 'MySQL'],
    category: 'Desktop',
    github: 'https://github.com/Samah-elqarnia',
    image: wellnessImg,
  },
  {
    id: 'animal-mobile',
    name: 'application mobile pour gestion des animaux',
    subtitle: 'Application mobile',
    desc: 'Application mobile dédiée aux associations pour assurer le suivi centralisé, la gestion de santé et l\'automatisation des fiches d\'adoption des animaux.',
    tags: ['React native', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'Mobile',
    github: 'https://github.com/Samah-elqarnia',
    image: mobileImg,
  }
]

// ── Experience ────────────────────────────────────────────────
export const experiences = [
  {
    date: 'Janv. 2025 → Janv. 2026',
    role: 'Développeur Web & Mobile — Freelance',
    company: 'Indépendant',
    points: [
      'Application mobile de gestion pour une association de protection animale',
      'Projets e-commerce full-stack (Luxepedia, TechPlace) de l\'analyse au déploiement',
      'Stack : MERN, Firebase, Stripe, Clerk, Cloudinary, Inngest',
    ],
  },
  {
    date: '4 Août → 29 Août 2025',
    role: 'Développeur Web — Stage',
    company: 'TOPAUTO Mohammedia',
    points: [
      'Développement complet du site web : RDV en ligne, catalogue véhicules',
      'Conception de l\'espace administrateur (gestion + suivi des opérations)',
      'Stack : React.js, Firebase (Auth, Firestore), Cloudinary',
    ],
  },
]

export const education = [
  {
    date: '2024 → 2026',
    role: 'Cycle Ingénieur : ingenierie informatique - Cybersécurité & Confiance Numérique',
    company: 'ENSET Mohammedia',
    points: [],
  },
  {
    date: '2022 → 2024',
    role: 'DEUST Sciences et Techniques',
    company: 'FST Mohammedia',
    points: [],
  },
  {
    date: '2021 → 2022',
    role: 'Baccalauréat Sciences Physiques — option Français',
    company: 'Lycée Ibn Yassine, Mohammedia',
    points: [],
  },
]

// ── Certifications ────────────────────────────────────────────
export const certifications = [
  { name: 'Ethical Hacker', org: 'Cisco Network Academy' },
  { name: 'Linux Unhatched & Essentials', org: 'Cisco Network Academy' },
  { name: 'CCNA', org: 'Cisco Network Academy' },
  { name: 'Python Essentials 1 & 2', org: 'Cisco Network Academy' },
  { name: 'System Administration 1 & 2', org: 'Red Hat Academy' },
  { name: 'Derivatives & Technical Analysis', org: '325 Financial Analyst' },
  { name: '+10 autres certifications', org: 'Divers organismes' },
]

// ── Tech Stack ────────────────────────────────────────────────
export const techStack = [
  { name: 'Next.js', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'React', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'TypeScript', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'Node.js', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'FastAPI', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'Python', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'MongoDB', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'Firebase', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'LangChain', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'Docker', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'Tailwind', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'AWS', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
]
