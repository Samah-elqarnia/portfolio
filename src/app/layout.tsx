import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samah EL QARNIA — Software Engineer & Fintech',
  description:
    'Portfolio of Samah EL QARNIA — Computer Science Engineer specializing in Fintech, Full Stack Development and Artificial Intelligence. ENSET Mohammedia.',
  keywords: [
    'Samah EL QARNIA',
    'Software Engineer',
    'Fintech',
    'Full Stack Developer',
    'React',
    'FastAPI',
    'LangChain',
    'ENSET Mohammedia',
    'Morocco',
  ],
  authors: [{ name: 'Samah EL QARNIA', url: 'https://github.com/Samah-elqarnia' }],
  openGraph: {
    title: 'Samah EL QARNIA — Software Engineer',
    description: 'Computer Science Engineer — Fintech · Full Stack · AI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="grain-overlay">
      <body>
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" />
        {children}
      </body>
    </html>
  )
}
