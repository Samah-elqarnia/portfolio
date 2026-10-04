import Navbar from '@/components/ui/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import CertificationsSection from '@/components/sections/CertificationsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero - Mustard Yellow */}
      <div className="bg-mustard-light">
        <HeroSection />
      </div>

      {/* About - White */}
      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto px-[8%]">
          <AboutSection />
        </div>
      </div>

      {/* Skills - Cream */}
      <div className="bg-cream">
        <div className="max-w-[1400px] mx-auto px-[8%]">
          <SkillsSection />
        </div>
      </div>

      {/* Projects - Beige */}
      <div className="bg-beige">
        <div className="max-w-[1400px] mx-auto px-[8%]">
          <ProjectsSection />
        </div>
      </div>

      {/* Experience - White */}
      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto px-[8%]">
          <ExperienceSection />
        </div>
      </div>

      {/* Certifications - Cream */}
      <div className="bg-cream">
        <div className="max-w-[1400px] mx-auto px-[8%]">
          <CertificationsSection />
        </div>
      </div>

      {/* Contact - Beige */}
      <div className="bg-beige">
        <div className="max-w-[1400px] mx-auto px-[8%]">
          <ContactSection />
        </div>
      </div>

    </main>
  )
}
