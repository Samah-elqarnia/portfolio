import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samah EL QARNIA — AI Engineer & data scientist',
  description:
    'Portfolio of Samah EL QARNIA — Computer Science Engineer specializing in machine learning and AI engineering ',
  keywords: [
    'Samah EL QARNIA',
    'Software Engineer',
    'AI Engineer',
    'Data Scientist',
    'Machine Learning',
    'Artificial Intelligence',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Samah EL QARNIA', url: 'https://github.com/Samah-elqarnia' }],
  openGraph: {
    title: 'Samah EL QARNIA — Software Engineer',
    description: 'Computer Science Engineer —  data science · AI',
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
