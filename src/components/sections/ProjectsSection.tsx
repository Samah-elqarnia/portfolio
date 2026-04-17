'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader, Tag } from '@/components/ui/Elements'
import { projects, type Project } from '@/data/portfolio'

const categoryEmoji: Record<string, string> = {
  'IA · RAG':         '🤖',
  'Web · Firebase':   '🚗',
  'E-commerce · MERN':'🛒',
  'Cybersécurité':    '🔐',
  'Desktop · Java':   '🧠',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.08 })

  return (
    <div
      ref={ref}
      className="flex flex-col rounded-2xl overflow-hidden transition-all duration-700
                 hover:-translate-y-1"
      style={{
        background: '#141414',
        border: '0.5px solid rgba(192,128,129,0.18)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Image area */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: '190px',
          background: '#1E1E2A',
          borderBottom: '0.5px solid rgba(192,128,129,0.12)',
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover opacity-80 hover:opacity-100
                       transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          /* Placeholder — replace with <Image> when screenshot is ready */
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <span className="text-4xl opacity-20">
              {categoryEmoji[project.category] ?? '📁'}
            </span>
            <p className="text-[11px] tracking-[2px] uppercase text-cream/20">
              screenshot à venir
            </p>
          </div>
        )}

        {/* Category pill */}
        <span
          className="absolute bottom-3 right-3 text-[9px] tracking-[1.5px]
                     uppercase px-3 py-1 rounded-full text-rose-light"
          style={{
            background: 'rgba(75,0,130,0.75)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-serif text-[18px] text-cream mb-1">{project.name}</h3>
        <p className="text-[11px] tracking-[1.5px] uppercase text-rose mb-3">
          {project.subtitle}
        </p>
        <p className="text-[13px] text-cream/45 leading-relaxed flex-1 mb-4">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[2px] uppercase text-rose
                       inline-flex items-center gap-1.5
                       hover:gap-3 transition-all duration-200"
          >
            GitHub →
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[2px] uppercase text-cream/30
                         hover:text-cream/60 transition-colors duration-200"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <SectionHeader label="Réalisations" title="Mes" italic="projets" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <p className="mt-8 text-[12px] text-cream/25 text-center">
        💡 Pour ajouter vos screenshots — placez les images dans{' '}
        <code className="text-rose/50">/public/projects/</code> et renseignez le champ{' '}
        <code className="text-rose/50">image</code> dans{' '}
        <code className="text-rose/50">src/data/portfolio.ts</code>
      </p>
    </section>
  )
}
