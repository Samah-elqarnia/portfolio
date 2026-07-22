import type { Metadata } from 'next'
import Script from 'next/script'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samah EL QARNIA — Software Engineer & Fintech',
  description:
    'Portfolio de Samah EL QARNIA — Ingénieure en informatique orientée Fintech, développement Full Stack et Intelligence Artificielle. ENSET Mohammedia.',
  keywords: [
    'Samah EL QARNIA',
    'Software Engineer',
    'Fintech',
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
    description: 'Ingénieure informatique — Fintech · Full Stack · IA',
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
