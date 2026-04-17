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
| Déploiement    | Vercel (recommandé)           |

---

## Structure du Projet

```
portfolio/
├── public/
│   ├── cv-samah-elqarnia.pdf     ← Votre CV (à ajouter)
│   └── projects/
│       ├── chatbot.png           ← Screenshots projets (à ajouter)
│       ├── topauto.png
│       ├── luxepedia.png
│       ├── techplace.png
│       ├── security.png
│       └── wellness.png
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
│   │   └── portfolio.ts          ← ⭐ TOUT LE CONTENU EST ICI (facile à éditer)
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

## Installation & Démarrage

```bash
# 1. Cloner ou copier le projet
git clone https://github.com/Samah-elqarnia/portfolio.git
cd portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev
# → http://localhost:3000

# 4. Build de production
npm run build
npm start
```

---

## Personnalisation du Contenu

**Tout le contenu est centralisé dans un seul fichier :**

```
src/data/portfolio.ts
```

Vous pouvez y modifier :
- `personalInfo` — nom, email, GitHub, LinkedIn, CV
- `stats` — les 4 chiffres clés
- `skills` — cartes expertise avec tags
- `projects` — titres, descriptions, technologies, liens GitHub, images
- `experiences` — expériences professionnelles
- `education` — parcours académique
- `certifications` — liste des certifications
- `techStack` — technologies affichées dans le Hero

---

## Ajouter les Screenshots des Projets

1. Faites une capture d'écran de chaque projet (1200×630px idéal)
2. Exportez en `.png` ou `.jpg`
3. Placez dans `public/projects/` avec ces noms :
   - `chatbot.png`
   - `topauto.png`
   - `luxepedia.png`
   - `techplace.png`
   - `security.png`
   - `wellness.png`

Les placeholders disparaîtront automatiquement dès qu'une image est disponible.

---

## Ajouter votre CV

1. Exportez votre CV en PDF
2. Renommez en `cv-samah-elqarnia.pdf`
3. Placez dans `/public/`

Le bouton "Télécharger le CV" dans le Hero fonctionnera automatiquement.

---

## Formulaire de Contact

Le formulaire est prêt côté UI. Pour activer l'envoi réel d'emails,
remplacez le `setTimeout` dans `ContactSection.tsx` par une vraie API :

**Option Formspree (gratuit) :**
```typescript
const response = await fetch('https://formspree.io/f/VOTRE_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**Option Resend (recommandé) :**
```bash
npm install resend
```
Puis créez `src/app/api/contact/route.ts` avec le SDK Resend.

---

## Déploiement sur Vercel

```bash
# Option 1 — CLI Vercel
npm i -g vercel
vercel

# Option 2 — GitHub
# Push sur GitHub → Connecter le repo sur vercel.com → Deploy
```

Variables d'environnement à configurer sur Vercel si vous utilisez une API email :
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

---

## Palette Midnight Orchid

| Variable            | Valeur       | Usage                          |
|---------------------|--------------|--------------------------------|
| `--black`           | `#0A0A0A`    | Fond principal                 |
| `--surface`         | `#141414`    | Cartes                         |
| `--surface2`        | `#1E1E2A`    | Cartes secondaires, stats      |
| `--mauve`           | `#4B0082`    | Accents navigation, dots       |
| `--mauve-light`     | `#6A1FA8`    | Hover mauve                    |
| `--rose`            | `#C08081`    | CTAs, liens, accents           |
| `--rose-light`      | `#D4A0A0`    | Titres, nom, email             |
| `--cream`           | `#F5F5F5`    | Texte principal                |
| `--cream-dim`       | `#E0D8D8`    | Texte secondaire               |

---

*Portfolio conçu avec passion — Samah EL QARNIA © 2026*
