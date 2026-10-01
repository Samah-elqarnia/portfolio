'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from '@/components/ui/Elements'
import { experiences, education } from '@/data/portfolio'
import { translations } from '@/data/translations'

type TimelineItem = {
  date: string
  role: string
  company: string
  points: string[]
}

function TimelineCard({
  item,
  index,
  accent = false,
}: {
  item: TimelineItem
  index: number
  accent?: boolean
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className="relative pl-8 pb-12 last:pb-0 transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Dot */}
      <div
        className="absolute left-0 top-1 w-3.5 h-3.5 rounded-full z-10"
        style={{
          background: accent ? '#D9A566' : '#D4A017',
          border: `2px solid ${accent ? '#E8C4A0' : '#D9A566'}`,
        }}
      />

      <p className="text-[11px] tracking-[2px] uppercase text-mustard mb-1.5">
        {item.date}
      </p>
      <h3 className="font-serif text-[19px] text-black mb-1">{item.role}</h3>
      <p className="text-[13px] italic text-black-light/60 mb-3">{item.company}</p>

      {item.points.length > 0 && (
        <ul className="space-y-1.5">
          {item.points.map((pt, i) => (
            <li
              key={i}
              className="text-[13px] text-black/45 leading-relaxed
                         pl-4 relative"
            >
              <span
                className="absolute left-0 top-0 text-mustard/40 font-light"
              >
                —
              </span>
              {pt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <SectionHeader label={translations.experience.label} title={translations.experience.title} italic={translations.experience.italic} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left — Professional */}
        <div>
          <p className="text-[11px] tracking-[3px] uppercase text-black/30 mb-8">
            {translations.experience.professional}
          </p>
          <div
            className="relative pl-6 timeline-line"
            style={{ borderLeft: '0.5px solid rgba(212,160,23,0.3)' }}
          >
            {experiences.map((exp, i) => (
              <TimelineCard key={i} item={exp} index={i} accent />
            ))}
          </div>
        </div>

        {/* Right — Education */}
        <div>
          <p className="text-[11px] tracking-[3px] uppercase text-black/30 mb-8">
            {translations.experience.education}
          </p>
          <div
            className="relative pl-6"
            style={{ borderLeft: '0.5px solid rgba(212,160,23,0.3)' }}
          >
            {education.map((edu, i) => (
              <TimelineCard key={i} item={edu} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
