// ─────────────────────────────────────────────────────────────
//  data/portfolio.ts  —  Edit this file to update your content
// ─────────────────────────────────────────────────────────────
import chatbotImg from './assets/enerasist.png'
import topautoImg from './assets/topauto.png'
import quantImg from './assets/quant.png'
import newsImg from './assets/newsai.png'
import FraudImg from './assets/fraud.png'
import python1 from './assets/python1.png'
import python2 from './assets/python2.png'
import ccna from './assets/CCNA.png'
import AI from './assets//AI.png'
import mongodb from './assets/mongodb.png'
import mcp from './assets/MCP.png'
import ml from './assets/ml.png'
import datascience from './assets/datascience.png'
import analysis from './assets/analysis.png'
import derivatives from './assets/derivatives.png'
import admin1 from './assets/admin1.png'
import linux from './assets/linux.png'
import advancedmcp from './assets/advancedmcp.png'
import awsfound from './assets/awsfound.png'
import awssec from './assets/awssec.png'
import scientist from './assets/python.png'
import agent from './assets/agent.jpg'
import history from './assets/history.png'


export const personalInfo = {
  name: 'Samah EL QARNIA',
  title: 'AI Engineer & data scientist ',
  tagline: 'Ingénieure IA passionnée par la création de systèmes intelligents . J\'intègre l\'IA et le ML nativement dans des architectures Full Stack pour construire des produits numériques  qui résolvent des problèmes complexes.',
  location: 'Maroc',
  email: 'elqarniasamah@gmail.com',
  phone: '+212 770 619 376',
  github: 'https://github.com/Samah-elqarnia',
  linkedin: 'https://www.linkedin.com/in/samah-el-qarnia-676811354',
  languages: [
    { lang: 'Anglais', level: 'C2', flag: '🇬🇧' },
    { lang: 'Français', level: 'B2', flag: '🇫🇷' },
    { lang: 'Arabe', level: 'Natif', flag: '🇲🇦' },
  ],
}

export const stats = [
  { num: '4+', label: 'Years in Tech' },
  { num: '6', label: 'Big projects'},
  { num: '10+', label: 'Certifications' },
]

// ── Skills ────────────────────────────────────────────────────
export const skills = [
  {
    icon: '◉',
    title: 'Langages de Programmation',
    desc: 'Solide base algorithmique et orientée objet',
    tags: ['Python', 'Java', 'C', 'SQL', 'POO'],
  },
  {
    icon: '◇',
    title: 'Data Science',
    desc: 'Analyse de données et machine learning pour extraire des insights et construire des modèles prédictifs.',
    tags: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Seaborn', 'TensorFlow', 'Keras'],
  },
  {
    icon: '◈',
    title: 'Intelligence Artificielle',
    desc: 'Pipelines RAG, agents LLM et intégration de l\'IA dans des systèmes réels.',
    tags: ['LangChain', 'RAG', 'LangGraph', 'LLMs', 'MCP'], 
  },
  {
    icon: '◻',
    title: 'Finance Quantitative',
    desc: 'Modélisation quantitative des actifs financiers, optimisation de portefeuille et backtesting de stratégies',
    tags: ['pricing', 'Monte Carlo', 'Factor Models', 'Modern Portfolio Theory', 'Backtesting'],
  },
  {
    icon: '○',
    title: 'Cloud & Virtualisation',
    desc: 'Versioning et déploiement d\'applications web et de modèles ML/IA.',
    tags: ['Git', 'GitHub', 'AWS', 'Linux', 'Docker'],
  },
  {
    icon: '⬡',
    title: 'Développement web',
    desc: 'De l\'analyse des besoins au déploiement. APIs robustes, UX soignée.',
    tags: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'Firebase', 'MongoDB', 'MySQL'],
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
    id: 'news-dashboard',
    name: 'AI powered financial news bias dashboard',
    subtitle: 'application web de signaux de sentiment de marché',
    desc: 'Un dashboard intégrant l\'IA qui analyse les articles d\'actualité financière pour générer des signaux (haussiers, baissiers ou neutres) pour diverses classes d\'actifs.',
    tags: ['React.js', 'Mistral AI', 'mySQL', 'RAG','fastAPI'],
    category: 'IA',
    github: 'https://github.com/Samah-elqarnia',
    image: newsImg,
  },
  {
    id: 'multi agent trading ',
    name: 'CasaInvest',
    subtitle: 'Système de Trading Multi-Agents pour le Marché Marocain',
    desc: 'un système de décision multi-agents basé sur des LLM analysant la Bourse de Casablanca, avec des agents spécialisés en analyse fondamentale/macroéconomique, analyse technique, analyse d\'actualités et trading, orchestrés avec LangGraph.intégré des flux de données provenant de la CSE, de Bank Al-Maghrib et de sources d\'actualités marocaines via une couche API personnalisé',
    tags: ['LangGraph', 'LangChain', 'Python','Pydantic','Docker'],
    category: 'IA',
    github: 'https://github.com/Samah-elqarnia',
    image: agent,
  },
  
  {
    id: 'quant',
    name: 'pipeline de construction quantitative du portfolio',
    subtitle: 'Pipeline quantitative',
    desc: 'Full quantitative asset selection and portfolio optimization workflow using S&P 500 stocks, factor models, k-means clustering, and modern portfolio theory.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'ML'],
    category: 'machine learning & quant',
    github: 'https://github.com/Samah-elqarnia',
    image: quantImg,
  },
//  ML for trading 
  {
    id: 'quant',
    name: 'Machine Learning for SPY Trading ',
    subtitle: 'comparative study of Random Forest and CatBoost ML algos for SPY trading',
    desc: 'Empirical study on training data requirements for ML trading algorithms. Shows CatBoost outperforms Random Forest (+221% vs +164%) with full market ▎ history (1993-2026) but fails catastrophically with limited data, highlighting robustness vs performance tradeoffs.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'ML'],
    category: 'machine learning & quant',
    github: 'https://github.com/Samah-elqarnia',
    image: history,
  },
  //  AWS and wazuh project SIEM 
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
    id: 'fraud',
    name: 'detection de fraud sur les transactions bancaires',
    subtitle: 'application web de detection de fraud',
    desc: 'Interface web qui analyse les transactions en temps réel et détecte si une transaction est légitime ou frauduleuse grâce au modèle de régression logistique.',
    tags: ['React.js', 'FastApi', 'Scikit-learn'],
    category: 'machine learning',
    github: 'https://github.com/Samah-elqarnia',
    image: FraudImg,
  },
]

// ── Experience ────────────────────────────────────────────────
export const experiences = [
   {
    date: 'Juin 2026 -> Juillet 2026',
    role: 'stage ingénierie IA ',
    company: 'ESFPP',
    points: [
      'Conçu et intégré une architecture avancée de Génération Augmentée par Récupération (RAG) ainsi qu\'une API dans un chatbot pédagogique propulsé par l\'IA, intégré au tableau de bord pedagogique de l\'école.',
      'Stack : Python,LangChain, Mistral AI, Qdrant,React.js, FastAPI',
    ],
  },
  {
    date: 'Juin 2026',
    role: 'Stage virtuel en Recherche Quantitative',
    company: 'JP Morgan Chase ',
    points: [
      'Conception d\'un modèle d\'estimation des prix et développement d\'une fonction de valorisation de contrats de stockage respectant les contraintes d\'injection, de retrait et de capacité.',
      'Développement d\'un modèle de régression logistique pour estimer la probabilité de défaut et la perte attendue, et mise en œuvre d\'une segmentation du score FICO par clustering k-means',
      'Stack : Pythons (NumPy, Pandas, Matplotlib, Scikit-learn)',
    ],
  },
  {
    date: 'Août 2025 → Septembre 2025',
    role: 'Développeur Web Full stack — Stage',
    company: 'TOPAUTO Mohammedia',
    points: [
      'Développement complet du site web permettant au clients de prendre des RDV en ligne, consulter du catalogue véhicules et obtenir des informations sur les offres disponibles',
      'Conception de l\'espace administrateur pour la gestion des données et le suivi des opérations',
      'Stack : React.js, Firebase (Auth, Firestore), Cloudinary',
    ],
  },
]

export const education = [
  {
    date: '2024 → 2027',
    role: 'Cycle Ingénieur : ingenierie informatique ',
    company: 'ENSET Mohammedia',
    points: [],
  },
  {
    date: '2022 → 2024',
    role: 'DEUST Sciences et Techniques',
    company: 'Faculté des Sciences et Techniques, Mohammedia',
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
  // cloud 
  { name: 'AWS security foundations', org: 'AWS', image: awssec },
  { name: 'AWS foundations ', org: 'AWS', image: awsfound },
  // language 
  { name: 'english certificate (C2 proficient)', org: 'EF SET ', image: admin1 },
  // data , python and AI 
  { name: 'Python Essentials 1', org: 'Cisco Network Academy', image: python1 },
  { name: 'Python Essentials 2', org: 'Cisco Network Academy', image: python2 },
  { name: 'Machine Learning Scientist in Python', org: 'Datacamp', image: ml},
  { name: 'machine learning', org: '325 Financial Analyst', image: ml },
  { name: 'AI fundamentals with IBM', org: 'cisco network academy', image: AI },
  { name: 'Introduction to MCP', org: 'Anthropic', image: mcp },
  { name: 'MCP : Advanced topics', org: 'Anthropic', image: advancedmcp },
  { name: 'introduction to data science', org: 'Cisco Network Academy', image: datascience },
  
  // finance 
  { name: 'Derivatives', org: '325 Financial Analyst', image: derivatives },
  { name: 'Technical Analysis', org: '325 Financial Analyst', image: analysis },
  // reseau and OS 
  { name: 'Linux Unhatched & Essentials', org: 'Cisco Network Academy', image: linux },
  { name: 'CCNA', org: 'Cisco Network Academy', image: ccna },
  { name: 'System Administration 1', org: 'Red Hat Academy', image: admin1 },
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
