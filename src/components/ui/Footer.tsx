'use client'

import { personalInfo } from '@/data/portfolio'
import { translations } from '@/data/translations'

export default function Footer() {
  return (
    <footer
      className="text-center py-8 px-[8%] mt-0"
      style={{ borderTop: '0.5px solid rgba(0, 0, 0, 0.12)' }}
    >
      <p className="text-[11px] tracking-[2px] uppercase text-black/20">
        {translations.footer.copyright.replace('{year}', String(new Date().getFullYear()))}
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-widest uppercase text-black/20
                     hover:text-mustard transition-colors duration-200"
        >
          {translations.footer.github}
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] tracking-widest uppercase text-black/20
                     hover:text-mustard transition-colors duration-200"
        >
          {translations.footer.linkedin}
        </a>
      </div>
    </footer>
  )
}
