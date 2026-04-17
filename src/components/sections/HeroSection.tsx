import { personalInfo, techStack } from '@/data/portfolio'
import { Badge, ButtonPrimary, ButtonOutline } from '@/components/ui/Elements'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center
                 pt-24 pb-16 px-[8%] max-w-[1200px] mx-auto overflow-hidden"
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(75,0,130,0.15) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 40% 30% at 80% 50%, rgba(192,128,129,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Eyebrow */}
      <p
        className="text-[11px] tracking-[4px] uppercase text-rose mb-6
                   animate-fade-up"
      >
        Ingénieure Informatique · Mohammedia, Maroc
      </p>

      {/* Name */}
      <h1
        className="font-serif leading-none animate-fade-up delay-100"
        style={{ fontSize: 'clamp(48px, 9vw, 100px)', opacity: 0 }}
      >
        <span className="text-cream">Samah</span>
        <br />
        <span className="text-rose-light italic">EL QARNIA</span>
      </h1>

      {/* Tagline */}
      <p
        className="text-cream-dim text-[clamp(14px,1.8vw,18px)] font-light
                   mt-6 mb-10 max-w-xl leading-relaxed tracking-wide
                   animate-fade-up delay-200"
        style={{ opacity: 0 }}
      >
        Software Engineer · Cybersecurity Enthusiast · IA & Full Stack Developer.
        <br />
        {personalInfo.tagline}
      </p>

      {/* Badges */}
      <div
        className="flex flex-wrap gap-2 mb-10 animate-fade-up delay-300"
        style={{ opacity: 0 }}
      >
        <Badge>React · Node.js · FastAPI</Badge>
        <Badge>LangChain · RAG · n8n</Badge>
        <Badge>Ethical Hacking</Badge>
        <Badge>Quant Finance</Badge>
        {personalInfo.languages.map((l) => (
          <span
            key={l.lang}
            className="inline-flex items-center gap-1.5 text-[11px] tracking-[1px]
                       uppercase px-3 py-1.5 rounded-full text-rose-light"
            style={{
              background: 'rgba(75,0,130,0.15)',
              border: '0.5px solid rgba(75,0,130,0.35)',
            }}
          >
            {l.flag} {l.lang} {l.level}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div
        className="flex flex-wrap gap-4 mb-16 animate-fade-up delay-400"
        style={{ opacity: 0 }}
      >
        <ButtonPrimary href={`mailto:${personalInfo.email}`}>
          Me contacter ↗
        </ButtonPrimary>
        <ButtonOutline href={personalInfo.cvUrl} download>
          Télécharger le CV ↓
        </ButtonOutline>
        <ButtonOutline href={personalInfo.github} target="_blank">
          GitHub ↗
        </ButtonOutline>
      </div>

      {/* Tech Stack strip */}
      <div
        className="animate-fade-up delay-500"
        style={{ opacity: 0 }}
      >
        <p className="text-[10px] tracking-[3px] uppercase text-cream/30 mb-3">
          Stack technologique
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t.name}
              className="text-[11px] tracking-[0.5px] px-3 py-1 rounded-md
                         text-cream/40 hover:text-rose-light transition-colors duration-200"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '0.5px solid rgba(255,255,255,0.06)',
              }}
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="mt-16 flex items-center gap-3 animate-fade-up delay-600" style={{ opacity: 0 }}>
        <div className="w-8 h-px" style={{ background: 'rgba(245,245,245,0.15)' }} />
        <span className="text-[11px] tracking-[2px] uppercase text-cream/25">
          Scroll pour explorer
        </span>
      </div>
    </section>
  )
}
