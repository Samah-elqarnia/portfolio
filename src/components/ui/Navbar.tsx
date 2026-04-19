'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { personalInfo } from '@/data/portfolio'

const navLinks = [
  { href: '#about',          label: 'À propos' },
  { href: '#skills',         label: 'Skills' },
  { href: '#projects',       label: 'Projets' },
  { href: '#experience',     label: 'Parcours' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact',        label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '0.5px solid rgba(192,128,129,0.15)' : 'none',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-[8%] h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="font-serif text-[17px] tracking-[2px] text-rose-light">
          S. EL QARNIA
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[1.5px] uppercase text-cream-dim
                         hover:text-rose transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.cvUrl}
            download
            className="text-[11px] tracking-[1.5px] uppercase font-medium
                       px-4 py-2 rounded-full border text-rose-light
                       hover:bg-rose hover:text-black transition-all duration-200"
            style={{ borderColor: 'rgba(192,128,129,0.4)' }}
          >
            CV ↓
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className="block w-5 h-px bg-cream-dim transition-all duration-200"
            style={{ transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none' }}
          />
          <span
            className="block w-5 h-px bg-cream-dim transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-cream-dim transition-all duration-200"
            style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t flex flex-col px-[8%] py-6 gap-5"
          style={{
            background: 'rgba(10,10,10,0.98)',
            borderColor: 'rgba(192,128,129,0.15)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[12px] tracking-[2px] uppercase text-cream-dim
                         hover:text-rose transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
