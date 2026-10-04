'use client'

import { translations } from '@/data/translations'
import { personalInfo } from '@/data/portfolio'
import { ButtonPrimary, ButtonOutline } from '@/components/ui/Elements'
import Image from 'next/image'
import samahPhoto from '@/data/assets/samah1.jpg'

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
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,160,23,0.10) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 40% 30% at 80% 50%, rgba(217,165,102,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full mt-8 lg:mt-0">

        {/* Left side: Text Content */}
        <div className="flex-1 w-full">
          {/* Eyebrow */}
          <p
            className="text-[16px] tracking-[4px] uppercase text-white mb-6
                       animate-fade-up text-center lg:text-left"
          >
            {translations.hero.eyebrow}
          </p>

          {/* Name */}
          <h1
            className="font-serif leading-none animate-fade-up delay-100 text-center lg:text-left"
            style={{ fontSize: 'clamp(48px, 9vw, 100px)', opacity: 0 }}
          >
            <span className="text-white">Samah</span>
            <br />
            <span className="text-white italic">EL QARNIA</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-white/90 text-[clamp(14px,1.8vw,18px)] font-light
                       mt-6 lg:mb-10 mb-4 max-w-xl leading-relaxed tracking-wide
                       animate-fade-up delay-200 mx-auto lg:mx-0 text-center lg:text-left"
            style={{ opacity: 0 }}
          >
            {translations.hero.tagline}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-4 justify-center lg:justify-start animate-fade-up delay-400"
            style={{ opacity: 0 }}
          >
            <ButtonPrimary href={`mailto:${personalInfo.email}`}>
              {translations.hero.contact}
            </ButtonPrimary>
            <ButtonOutline href={personalInfo.github} target="_blank">
              {translations.hero.github}
            </ButtonOutline>
          </div>
        </div>

        {/* Right side: Profile Image */}
        <div
          className="flex-1 flex justify-center lg:justify-end w-full animate-fade-up delay-300"
          style={{ opacity: 0 }}
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-[0.5px] border-white/30 shadow-[0_0_60px_rgba(255,255,255,0.2)]">
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

    </section>
  )
}
