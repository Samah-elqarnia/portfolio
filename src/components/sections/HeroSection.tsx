import { personalInfo, techStack } from '@/data/portfolio'
import { Badge, ButtonPrimary, ButtonOutline } from '@/components/ui/Elements'
import Image from 'next/image'
import samahPhoto from '@/data/assets/samahphoto.png'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center
                 pt-24 pb-16 px-[8%] max-w-[1400px] mx-auto overflow-hidden"
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

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full mt-8 lg:mt-0">

        {/* Left side: Text Content */}
        <div className="flex-1 w-full">
          {/* Eyebrow */}
          <p
            className="text-[11px] tracking-[4px] uppercase text-rose mb-6
                       animate-fade-up text-center lg:text-left"
          >
            Ingénieure Informatique · Mohammedia, Maroc
          </p>

          {/* Name */}
          <h1
            className="font-serif leading-none animate-fade-up delay-100 text-center lg:text-left"
            style={{ fontSize: 'clamp(48px, 9vw, 100px)', opacity: 0 }}
          >
            <span className="text-cream">Samah</span>
            <br />
            <span className="text-rose-light italic">EL QARNIA</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-cream-dim text-[clamp(14px,1.8vw,18px)] font-light
                       mt-6 lg:mb-10 mb-4 max-w-xl leading-relaxed tracking-wide
                       animate-fade-up delay-200 mx-auto lg:mx-0 text-center lg:text-left"
            style={{ opacity: 0 }}
          >
            computer science engineering · AI & web Developer · Cybersecurity
          </p>
          <p
            className="text-cream-dim text-[clamp(11px,1.8vw,15px)] font-light
                       mt-2 lg:mb-10 mb-8 max-w-xl leading-relaxed tracking-wide
                       animate-fade-up delay-200 mx-auto lg:mx-0 text-center lg:text-left"
            style={{ opacity: 0 }}
          >
            {personalInfo.tagline}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-4 justify-center lg:justify-start animate-fade-up delay-400"
            style={{ opacity: 0 }}
          >
            <ButtonPrimary href={`mailto:${personalInfo.email}`}>
              Me contacter ↗
            </ButtonPrimary>
            <ButtonOutline href={personalInfo.github} target="_blank">
              GitHub ↗
            </ButtonOutline>
          </div>
        </div>

        {/* Right side: Profile Image */}
        <div
          className="flex-1 flex justify-center lg:justify-end w-full animate-fade-up delay-300"
          style={{ opacity: 0 }}
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-[0.5px] border-rose/30 shadow-[0_0_60px_rgba(192,128,129,0.15)]">
            <Image
              src={samahPhoto}
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 288px, 450px"
            />
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="mt-16 flex items-center gap-3 animate-fade-up delay-600 justify-center lg:justify-start" style={{ opacity: 0 }}>
        <div className="w-8 h-px" style={{ background: 'rgba(245,245,245,0.15)' }} />
        <span className="text-[11px] tracking-[2px] uppercase text-cream/25">
          Scroll pour explorer
        </span>
      </div>
    </section>
  )
}
