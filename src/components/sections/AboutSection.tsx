'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from '@/components/ui/Elements'
import { stats } from '@/data/portfolio'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal()
  const { t } = useLanguage()

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      {/* Text */}
      <div
        className="transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        }}
      >
        <SectionHeader
          label={t.about.label}
          title={t.about.title}
          italic={t.about.italic}
        />
        <p className="text-cream-dim text-[15px] leading-[1.9] mb-4">
          {t.about.paragraph1}
        </p>
        <p className="text-cream-dim text-[15px] leading-[1.9] mb-8">
          {t.about.paragraph2}
        </p>
      </div>

      {/* Stats grid */}
      <div
        className="grid grid-cols-2 gap-4 transition-all duration-700 delay-200"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
          transitionDelay: '200ms',
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-5"
            style={{
              background: '#1E1E2A',
              border: '0.5px solid rgba(192,128,129,0.15)',
            }}
          >
            <p className="font-serif text-[36px] text-rose-light leading-none mb-1">
              {s.num}
            </p>
            <p className="text-[11px] tracking-[1.5px] uppercase text-cream/40">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
