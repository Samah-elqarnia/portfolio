# Samah EL QARNIA — Portfolio

Portfolio professionnel construit avec **Next.js 14**, **TypeScript** et **Tailwind CSS**.
Thème : *Midnight Orchid* — Noir · Mauve profond · Rose poudré.

---

## Stack Technologique

| Couche         | Technologie                   |
|----------------|-------------------------------|
| Framework      | Next.js 14 (App Router)       |
| Langage        | TypeScript                    |
| Styling        | Tailwind CSS v3               |
| Typographie    | Playfair Display + Inter      |
| Images         | next/image (Cloudinary-ready) |
| Animations     | CSS keyframes + IntersectionObserver |
| Déploiement    | Vercel           |
| contact form   | EmailJS          |

---

## Structure du Projet

```
portfolio/
│
├── src/
│   ├── app/
│   │   ├── globals.css           ← Styles globaux + variables CSS
│   │   ├── layout.tsx            ← Root layout + metadata SEO
│   │   └── page.tsx              ← Page principale (assemble les sections)
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Navbar.tsx        ← Navigation fixe avec scroll detection
│   │   │   ├── Footer.tsx        ← Pied de page
│   │   │   └── Elements.tsx      ← Badge, Tag, Card, ButtonPrimary, ButtonOutline
│   │   │
│   │   └── sections/
│   │       ├── HeroSection.tsx         ← Nom, tagline, badges, CTAs, stack
│   │       ├── AboutSection.tsx        ← Présentation + stats
│   │       ├── SkillsSection.tsx       ← 6 cartes expertise
│   │       ├── ProjectsSection.tsx     ← Grille 6 projets avec images
│   │       ├── ExperienceSection.tsx   ← Timeline pro + formation
│   │       ├── CertificationsSection.tsx ← Grille certifications
│   │       └── ContactSection.tsx      ← Formulaire + liens sociaux
│   │
│   ├── data/
│   │   └── portfolio.ts          ← TOUT LE CONTENU EST ICI 
│   │
│   ├── hooks/
│   │   └── useScrollReveal.ts    ← Hook IntersectionObserver pour animations
│   │
│   └── lib/
│       └── utils.ts              ← Helper cn() pour clsx
│
├── tailwind.config.js            ← Palette Midnight Orchid + animations
├── next.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

