// ─────────────────────────────────────────────────────────────
//  data/portfolio.ts  —  Edit this file to update your content
// ─────────────────────────────────────────────────────────────

export const personalInfo = {
  name:      'Samah EL QARNIA',
  title:     'Software Engineer · Cybersecurity Enthusiast',
  tagline:   'Je construis des expériences numériques élégantes et des systèmes robustes.',
  location:  'Mohammedia, Maroc',
  email:     'elqarniasamah@gmail.com',
  phone:     '+212 770 619 376',
  github:    'https://github.com/Samah-elqarnia',
  linkedin:  'https://linkedin.com/in/samah-el-qarnia',
  cvUrl:     '/cv-samah-elqarnia.pdf',   // Place your CV PDF in /public
  languages: [
    { lang: 'Anglais', level: 'C1', flag: '🇬🇧' },
    { lang: 'Français', level: 'B2', flag: '🇫🇷' },
    { lang: 'Arabe', level: 'Natif', flag: '🇲🇦' },
  ],
}

export const stats = [
  { num: '3+', label: 'Années de dev' },
  { num: '6',  label: 'Projets majeurs' },
  { num: '10+', label: 'Certifications' },
  { num: '3',  label: "Domaines d'expertise" },
]

// ── Skills ────────────────────────────────────────────────────
export const skills = [
  {
    icon: '⬡',
    title: 'Développement Web & Mobile',
    desc: 'Full-stack moderne, de l\'analyse des besoins au déploiement. APIs robustes, UX soignée.',
    tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'React Native', 'Firebase', 'MongoDB', 'MySQL', 'Docker', 'MVC', 'REST API'],
  },
  {
    icon: '◈',
    title: 'Intelligence Artificielle',
    desc: 'Pipelines RAG, agents LLM, automatisation intelligente et intégration de l\'IA dans des systèmes réels.',
    tags: ['LangChain', 'RAG', 'Mistral AI', 'TensorFlow', 'PyTorch', 'scikit-learn', 'n8n', 'Qdrant', 'MCP Server'],
  },
  {
    icon: '◇',
    title: 'Cybersécurité',
    desc: 'Ethical hacking, pentest web & réseau, analyse de vulnérabilités et sécurité des systèmes.',
    tags: ['Kali Linux', 'Pentesting', 'CCNA', 'Bash', 'SSL/TLS', 'Cisco Packet Tracer', 'Nmap', 'Burp Suite'],
  },
  {
    icon: '◻',
    title: 'Finance Quantitative',
    desc: 'Modélisation financière, pricing d\'options, optimisation de portefeuille et backtesting.',
    tags: ['Black-Scholes', 'Delta Hedging', 'Greeks', 'NumPy', 'Pandas', 'Matplotlib', 'backtrader', 'S&P 500'],
  },
  {
    icon: '◉',
    title: 'Langages de Programmation',
    desc: 'Solide base algorithmique et orientée objet, des systèmes embarqués au web.',
    tags: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'C', 'JavaFX', 'Design Patterns', 'POO'],
  },
  {
    icon: '○',
    title: 'Outils & Cloud',
    desc: 'Infrastructure, versioning, CI/CD, design et gestion de projets techniques.',
    tags: ['Git', 'GitHub', 'AWS', 'Linux', 'Jira', 'Figma', 'Cloudinary', 'Stripe', 'Clerk', 'Inngest'],
  },
]

// ── Projects ──────────────────────────────────────────────────
export type Project = {
  id:       string
  name:     string
  subtitle: string
  desc:     string
  tags:     string[]
  category: string
  github:   string
  demo?:    string
  image?:   string   // Put screenshot in /public/projects/
}

export const projects: Project[] = [
  {
    id:       'chatbot-technique',
    name:     'Chatbot Technique d\'Assistance',
    subtitle: 'Gestion d\'Incidents & RAG',
    desc:     'Assistant IA utilisant la RAG pour diagnostiquer les pannes de vannes depuis la documentation technique. Intègre un serveur MCP qui transforme automatiquement les résolutions complexes en tickets Jira.',
    tags:     ['React', 'FastAPI', 'LangChain', 'Mistral AI', 'Qdrant', 'MongoDB', 'MCP Server'],
    category: 'IA · RAG',
    github:   'https://github.com/Samah-elqarnia',
    image:    '/projects/chatbot.png',
  },
  {
    id:       'topauto',
    name:     'TOPAUTO',
    subtitle: 'Website Garage Automobile',
    desc:     'Site complet pour un garage automobile : prise de RDV en ligne, catalogue véhicules, espace administrateur pour la gestion des données et le suivi des opérations.',
    tags:     ['React.js', 'Firebase Auth', 'Firestore', 'Cloudinary'],
    category: 'Web · Firebase',
    github:   'https://github.com/Samah-elqarnia',
    image:    '/projects/topauto.png',
  },
  {
    id:       'luxepedia',
    name:     'Luxepedia',
    subtitle: 'E-commerce Luxe',
    desc:     'Plateforme e-commerce full-stack dédiée au luxe. Paiement Stripe, authentification Clerk, gestion des médias Cloudinary et jobs asynchrones avec Inngest.',
    tags:     ['MERN', 'Stripe', 'Clerk', 'Inngest', 'Cloudinary', 'MongoDB'],
    category: 'E-commerce · MERN',
    github:   'https://github.com/Samah-elqarnia',
    image:    '/projects/luxepedia.png',
  },
  {
    id:       'techplace',
    name:     'TechPlace',
    subtitle: 'E-commerce Tech',
    desc:     'Marketplace tech full-stack avec gestion des produits, panier, commandes et tableau de bord administrateur. De l\'UI au backend, pipeline complet.',
    tags:     ['MERN', 'Firebase', 'Stripe', 'React', 'Node.js'],
    category: 'E-commerce · MERN',
    github:   'https://github.com/Samah-elqarnia',
    image:    '/projects/techplace.png',
  },
  {
    id:       'security-scanner',
    name:     'Website Security Scanner',
    subtitle: 'Détection de Vulnérabilités',
    desc:     'Analyse automatique de sites web à partir d\'une URL : ports ouverts, technologies, config HTTP/HTTPS, certificats SSL. Génère un rapport PDF synthétique téléchargeable.',
    tags:     ['Bash', 'React.js', 'Express.js', 'Node.js', 'PDF Generation'],
    category: 'Cybersécurité',
    github:   'https://github.com/Samah-elqarnia',
    image:    '/projects/security.png',
  },
  {
    id:       'mental-wellness',
    name:     'Mental Wellness',
    subtitle: 'Application Desktop',
    desc:     'Application desktop dédiée au bien-être mental. Suivi de l\'humeur, ressources personnalisées et outils d\'accompagnement pour une santé mentale au quotidien.',
    tags:     ['JavaFX', 'Java', 'MySQL', 'Design Patterns'],
    category: 'Desktop · Java',
    github:   'https://github.com/Samah-elqarnia',
    image:    '/projects/wellness.png',
  },
]

// ── Experience ────────────────────────────────────────────────
export const experiences = [
  {
    date:     'Janv. 2025 → Janv. 2026',
    role:     'Développeur Web & Mobile — Freelance',
    company:  'Indépendant',
    points: [
      'Application mobile de gestion pour une association de protection animale',
      'Projets e-commerce full-stack (Luxepedia, TechPlace) de l\'analyse au déploiement',
      'Stack : MERN, Firebase, Stripe, Clerk, Cloudinary, Inngest',
    ],
  },
  {
    date:     '4 Août → 29 Août 2025',
    role:     'Développeur Web — Stage',
    company:  'TOPAUTO Mohammedia',
    points: [
      'Développement complet du site web : RDV en ligne, catalogue véhicules',
      'Conception de l\'espace administrateur (gestion + suivi des opérations)',
      'Stack : React.js, Firebase (Auth, Firestore), Cloudinary',
    ],
  },
]

export const education = [
  {
    date:    '2024 → 2026',
    role:    'Cycle Ingénieur — Cybersécurité & Confiance Numérique',
    company: 'ENSET Mohammedia',
    points:  ['Spécialisation cybersécurité, réseaux et confiance numérique', 'Projets avancés en IA, développement web et sécurité des systèmes'],
  },
  {
    date:    '2022 → 2024',
    role:    'DEUST Sciences et Techniques',
    company: 'FST Mohammedia',
    points:  ['Diplôme d\'Études Universitaires en Sciences et Techniques'],
  },
  {
    date:    '2021 → 2022',
    role:    'Baccalauréat Sciences Physiques — option Français',
    company: 'Lycée Ibn Yassine, Mohammedia',
    points:  [],
  },
]

// ── Certifications ────────────────────────────────────────────
export const certifications = [
  { name: 'Ethical Hacker',            org: 'Cisco Network Academy' },
  { name: 'Linux Unhatched & Essentials', org: 'Cisco Network Academy' },
  { name: 'CCNA',                       org: 'Cisco Network Academy' },
  { name: 'Python Essentials 1 & 2',   org: 'Cisco Network Academy' },
  { name: 'System Administration 1 & 2', org: 'Red Hat Academy' },
  { name: 'Derivatives & Technical Analysis', org: '325 Financial Analyst' },
  { name: '+10 autres certifications',  org: 'Divers organismes' },
]

// ── Tech Stack ────────────────────────────────────────────────
export const techStack = [
  { name: 'Next.js',    color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'React',      color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'TypeScript', color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'Node.js',    color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'FastAPI',    color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'Python',     color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'MongoDB',    color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'Firebase',   color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'LangChain',  color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'Docker',     color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'Tailwind',   color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
  { name: 'AWS',        color: 'bg-surface2 border-[rgba(192,128,129,0.2)]' },
]
