'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader, Tag, Card } from '@/components/ui/Elements'
import { skills } from '@/data/portfolio'
import { translations } from '@/data/translations'

export default function SkillsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="skills" className="py-24">
      <SectionHeader label={translations.skills.label} title={translations.skills.title} italic={translations.skills.italic} />

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skills.map((skill, i) => (
          <Card
            key={skill.title}
            className="transition-all duration-700 hover:border-mustard"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
              transitionDelay: `${i * 80}ms`,
              borderColor: 'rgba(212,160,23,0.18)',
            } as React.CSSProperties}
          >
            {/* Icon */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center
                         text-lg mb-4"
              style={{
                background: 'rgba(212,160,23,0.15)',
                border: '0.5px solid rgba(212,160,23,0.25)',
              }}
            >
              {skill.icon}
            </div>

            <h3 className="font-serif text-[18px] text-black mb-2">
              {skill.title}
            </h3>
            <p className="text-[13px] text-black/45 leading-relaxed mb-4">
              {skill.desc}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {skill.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
