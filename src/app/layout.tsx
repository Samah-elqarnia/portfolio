import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samah EL QARNIA — Software Engineer & Cybersecurity',
  description:
    'Portfolio de Samah EL QARNIA — Ingénieure en informatique spécialisée en Cybersécurité, développement Full Stack et Intelligence Artificielle. ENSET Mohammedia.',
  keywords: [
    'Samah EL QARNIA',
    'Software Engineer',
    'Cybersecurity',
    'Full Stack Developer',
    'React',
    'FastAPI',
    'LangChain',
    'ENSET Mohammedia',
    'Maroc',
  ],
  authors: [{ name: 'Samah EL QARNIA', url: 'https://github.com/Samah-elqarnia' }],
  openGraph: {
    title: 'Samah EL QARNIA — Software Engineer',
    description: 'Ingénieure informatique — Cybersécurité · Full Stack · IA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="grain-overlay">
      <body>
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" />
        {children}
      </body>
    </html>
  )
}
