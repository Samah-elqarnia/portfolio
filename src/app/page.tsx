import Navbar         from '@/components/ui/Navbar'
import HeroSection    from '@/components/sections/HeroSection'
import AboutSection   from '@/components/sections/AboutSection'
import SkillsSection  from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import CertificationsSection from '@/components/sections/CertificationsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer         from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="max-w-[1200px] mx-auto px-[8%]">
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <CertificationsSection />
        <SectionDivider />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}

function SectionDivider() {
  return (
    <hr
      className="border-none"
      style={{ borderTop: '0.5px solid rgba(192,128,129,0.15)' }}
    />
  )
}
