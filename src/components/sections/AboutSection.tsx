'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader, Badge } from '@/components/ui/Elements'
import { stats } from '@/data/portfolio'

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
          label="À propos"
          title="Ingénieure,"
          italic="curieuse, construite pour résoudre"
        />
        <p className="text-cream-dim text-[15px] leading-[1.9] mb-4">
          Élève ingénieure en 2ème année cycle ingénieur à l'ENSET Mohammedia,
          spécialisation <span className="text-rose-light">Cybersécurité et Confiance Numérique</span>.
          Mon parcours commence à la FST Mohammedia (DEUST 2022-2024) et se poursuit
          avec une ambition claire : concevoir des systèmes qui allient performance,
          sécurité et intelligence artificielle.
        </p>
        <p className="text-cream-dim text-[15px] leading-[1.9] mb-8">
          Je touche à tout ce qui me fascine : du développement full-stack et des
          pipelines RAG, à la finance quantitative et au pentesting. Chaque projet
          est une occasion d'aller plus loin.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge>ENSET Mohammedia</Badge>
          <Badge>2024 → 2026</Badge>
          <Badge>Cycle Ingénieur</Badge>
        </div>
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
