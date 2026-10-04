'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeader, Tag } from '@/components/ui/Elements'
import { projects, type Project } from '@/data/portfolio'
import { translations } from '@/data/translations'

const categoryEmoji: Record<string, string> = {
  'IA · RAG': '🤖',
  'Web · Firebase': '🚗',
  'E-commerce · MERN': '🛒',
  'Fintech': '💳',
  'Desktop · Java': '🧠',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.08 })

  return (
    <div
      ref={ref}
      className="flex flex-col rounded-2xl overflow-hidden transition-all duration-700
                 hover:-translate-y-1"
      style={{
        background: '#FFFFFF',
        border: '0.5px solid rgba(212,160,23,0.18)',
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
          background: '#F5EFE7',
          borderBottom: '0.5px solid rgba(212,160,23,0.12)',
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
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <span className="text-4xl opacity-20">
              {categoryEmoji[project.category] ?? '📁'}
            </span>
            <p className="text-[11px] tracking-[2px] uppercase text-black/20">
              {translations.projects.screenshotPlaceholder}
            </p>
          </div>
        )}

        {/* Category pill */}
        <span
          className="absolute bottom-3 right-3 text-[9px] tracking-[1.5px]
                     uppercase px-3 py-1 rounded-full text-white"
          style={{
            background: 'rgba(212,160,23,0.85)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-serif text-[18px] text-black mb-1">{project.name}</h3>
        <p className="text-[11px] tracking-[1.5px] uppercase text-mustard mb-3">
          {project.subtitle}
        </p>
        <p className="text-[13px] text-black/45 leading-relaxed flex-1 mb-4">
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
            className="text-[11px] tracking-[2px] uppercase text-mustard
                       inline-flex items-center gap-1.5
                       hover:gap-3 transition-all duration-200"
          >
            {translations.projects.github}
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[2px] uppercase text-black/30
                         hover:text-black/60 transition-colors duration-200"
            >
              {translations.projects.demo}
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
      <SectionHeader label={translations.projects.label} title={translations.projects.title} italic={translations.projects.italic} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
