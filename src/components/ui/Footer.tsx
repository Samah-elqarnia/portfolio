import { personalInfo } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer
      className="text-center py-8 px-[8%] mt-0"
      style={{ borderTop: '0.5px solid rgba(192,128,129,0.12)' }}
    >
      <p className="text-[11px] tracking-[2px] uppercase text-cream/20">
        © {new Date().getFullYear()} · Samah EL QARNIA · Mohammedia, Maroc
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-widest uppercase text-cream/20
                     hover:text-rose transition-colors duration-200"
        >
          GitHub
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-widest uppercase text-cream/20
                     hover:text-rose transition-colors duration-200"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
