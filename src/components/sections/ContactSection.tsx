'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from '@/components/ui/Elements'
import { personalInfo } from '@/data/portfolio'

// ── Social link pill ──────────────────────────────────────────
function ContactPill({
  href,
  icon,
  label,
  target,
}: {
  href: string
  icon: React.ReactNode
  label: string
  target?: string
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 text-[13px] text-cream-dim
                 px-6 py-3 rounded-full transition-all duration-200
                 hover:text-rose"
      style={{
        background: '#1E1E2A',
        border: '0.5px solid rgba(192,128,129,0.18)',
      }}
    >
      {icon}
      {label}
    </a>
  )
}

// ── Contact form ──────────────────────────────────────────────
function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    // ── Replace with your preferred form API (Formspree, Resend, etc.) ──
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('done')
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle: React.CSSProperties = {
    background: '#141414',
    border: '0.5px solid rgba(192,128,129,0.2)',
    borderRadius: '10px',
    color: '#F5F5F5',
    fontSize: '14px',
    padding: '12px 16px',
    outline: 'none',
    width: '100%',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.2s',
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[11px] tracking-[2px] uppercase text-cream/40 block mb-2">
            Nom
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) =>
              (e.target.style.borderColor = 'rgba(192,128,129,0.5)')
            }
            onBlur={(e) =>
              (e.target.style.borderColor = 'rgba(192,128,129,0.2)')
            }
          />
        </div>
        <div>
          <label className="text-[11px] tracking-[2px] uppercase text-cream/40 block mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="votre@email.com"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) =>
              (e.target.style.borderColor = 'rgba(192,128,129,0.5)')
            }
            onBlur={(e) =>
              (e.target.style.borderColor = 'rgba(192,128,129,0.2)')
            }
          />
        </div>
      </div>

      <div>
        <label className="text-[11px] tracking-[2px] uppercase text-cream/40 block mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Votre message..."
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={(e) =>
            (e.target.style.borderColor = 'rgba(192,128,129,0.5)')
          }
          onBlur={(e) =>
            (e.target.style.borderColor = 'rgba(192,128,129,0.2)')
          }
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending' || status === 'done'}
        className="w-full py-3.5 rounded-full text-[12px] tracking-[2px]
                   uppercase font-semibold transition-all duration-200
                   disabled:opacity-60"
        style={{
          background: status === 'done' ? '#3B6D11' : '#C08081',
          color: status === 'done' ? '#EAF3DE' : '#0A0A0A',
        }}
      >
        {status === 'idle' && 'Envoyer le message →'}
        {status === 'sending' && 'Envoi en cours…'}
        {status === 'done' && '✓ Message envoyé !'}
      </button>

      <p className="text-[11px] text-cream/20 text-center">
        Vous pouvez aussi écrire directement à{' '}
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-rose/60 hover:text-rose transition-colors"
        >
          {personalInfo.email}
        </a>
      </p>
    </form>
  )
}

// ── Main Section ──────────────────────────────────────────────
export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="contact" className="py-24">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        ref={ref}
      >
        {/* Left */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <SectionHeader
            label="Contact"
            title="Travaillons"
            italic="ensemble"
          />
          <p className="text-cream-dim text-[15px] leading-relaxed mb-8">
            Ouverte aux opportunités de stage, collaboration ou freelance.
            N'hésitez pas — je réponds toujours.
          </p>

          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-serif text-[clamp(14px,2.2vw,22px)] text-rose-light
                       block mb-8 hover:text-cream transition-colors duration-200"
          >
            {personalInfo.email}
          </a>

          {/* Social pills */}
          <div className="flex flex-wrap gap-3">
            <ContactPill
              href={personalInfo.linkedin}
              target="_blank"
              label="LinkedIn"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              }
            />
            <ContactPill
              href={personalInfo.github}
              target="_blank"
              label="GitHub"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              }
            />
            <ContactPill
              href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
              label={personalInfo.phone}
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Right — form */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '200ms',
          }}
        >
          <p className="text-[11px] tracking-[3px] uppercase text-cream/30 mb-6">
            Formulaire de contact
          </p>
          {/* Note: Replace with Formspree or Resend for production email delivery */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
