'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from '@/components/ui/Elements'
import { certifications } from '@/data/portfolio'

export default function CertificationsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="certifications" className="py-24">
      <SectionHeader
        label="Certifications"
        title="Reconnaissances"
        italic="officielles"
      />

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {certifications.map((cert, i) => (
          <div
            key={cert.name}
            className="flex items-start gap-3 rounded-xl p-4 transition-all duration-500"
            style={{
              background: '#141414',
              border: '0.5px solid rgba(192,128,129,0.15)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${i * 60}ms`,
            }}
          >
            {/* Dot */}
            <div
              className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
              style={{ background: '#C08081' }}
            />
            <div>
              <p className="text-[13px] text-cream-dim leading-snug">{cert.name}</p>
              <p className="text-[11px] text-cream/30 mt-0.5">{cert.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
