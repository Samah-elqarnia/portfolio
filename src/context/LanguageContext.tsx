'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Locale, translations } from '@/data/translations'

type LanguageContextValue = {
  locale: Locale
  toggleLocale: () => void
  t: typeof translations[Locale]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('fr')

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-locale') as Locale | null
    if (saved === 'fr' || saved === 'en') {
      setLocale(saved)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('portfolio-locale', locale)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      toggleLocale: () => setLocale((prev) => (prev === 'fr' ? 'en' : 'fr')),
      t: translations[locale],
    }),
    [locale]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
