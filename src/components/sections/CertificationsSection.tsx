'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader } from '@/components/ui/Elements'
import { certifications } from '@/data/portfolio'
import { translations } from '@/data/translations'

export default function CertificationsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="certifications" className="py-24">
      <SectionHeader
        label={translations.certifications.label}
        title={translations.certifications.title}
        italic={translations.certifications.italic}
      />

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {certifications.map((cert, i) => (
          <div
            key={cert.name}
            className="rounded-xl p-4 transition-all duration-500 hover:scale-105"
            style={{
              background: '#FAF8F5',
              border: '0.5px solid rgba(212,160,23,0.15)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${i * 60}ms`,
            }}
          >
            {/* Image Placeholder - Space reserved for certificate image */}
            <div className="w-full h-40 bg-gradient-to-br from-beige to-cream rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-mustard/20">
              {cert.image ? (
                <img
                  src={typeof cert.image === 'string' ? cert.image : cert.image.src}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full text-black/40">
                  <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">{translations.certifications.imagePlaceholder}</span>
                </div>
              )}
            </div>
            {/* Details */}
            <div>
              <p className="text-[13px] text-black-light leading-snug font-medium">{cert.name}</p>
              <p className="text-[11px] text-black/30 mt-1">{cert.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
