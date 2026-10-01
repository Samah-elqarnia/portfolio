'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from '@/components/ui/Elements'
import { stats } from '@/data/portfolio'
import { translations } from '@/data/translations'

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal()

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
          label={translations.about.label}
          title={translations.about.title}
          italic={translations.about.italic}
        />
        <p className="text-black-light text-[15px] leading-[1.9] mb-4">
          {translations.about.paragraph1}
        </p>
        <p className="text-black-light text-[15px] leading-[1.9] mb-8">
          {translations.about.paragraph2}
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
              background: '#F5EFE7',
              border: '0.5px solid rgba(212,160,23,0.15)',
            }}
          >
            <p className="font-serif text-[36px] text-mustard-light leading-none mb-1">
              {s.num}
            </p>
            <p className="text-[11px] tracking-[1.5px] uppercase text-black/40">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
