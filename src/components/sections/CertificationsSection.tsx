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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {certifications.map((cert, i) => (
          <div
            key={cert.name}
            className="rounded-xl p-4 transition-all duration-500 hover:scale-105"
            style={{
              background: '#141414',
              border: '0.5px solid rgba(192,128,129,0.15)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${i * 60}ms`,
            }}
          >
            {/* Image Placeholder - Space reserved for certificate image */}
            <div className="w-full h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-gray-700">
              {cert.image ? (
                <img
                  src={typeof cert.image === 'string' ? cert.image : cert.image.src}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full text-gray-500">
                  <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">Image à ajouter</span>
                </div>
              )}
            </div>
            {/* Details */}
            <div>
              <p className="text-[13px] text-cream-dim leading-snug font-medium">{cert.name}</p>
              <p className="text-[11px] text-cream/30 mt-1">{cert.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
