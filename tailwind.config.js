/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Honey & Cream Palette ────────────────────────────────
        white:        '#FFFFFF',
        cream:        '#FAF8F5',
        beige:        '#F5EFE7',
        surface:      '#F8F3EE',
        surface2:     '#F2E9E1',
        mustard: {
          DEFAULT:    '#D4A017',
          light:      '#E3B448',
          dark:       '#B8860B',
        },
        warm: {
          DEFAULT:    '#D9A566',
          light:      '#E8C4A0',
          pale:       '#F5E8D8',
          muted:      '#C89850',
        },
        rose: {
          DEFAULT:    '#C08081',
          light:      '#D6A7A8',
          pale:       '#EAD8D8',
        },
        black: {
          DEFAULT:    '#1A1A1A',
          light:      '#4A4A4A',
          pale:       '#707070',
        },
      },
      fontFamily: {
        serif:  ['Playfair Display', 'Georgia', 'serif'],
        sans:   ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        '10': '10px',
        '11': '11px',
      },

      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      borderColor: {
        mustard: 'rgba(212,160,23,0.25)',
        warm:    'rgba(217,165,102,0.2)',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'slide-left': 'slideLeft 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float':      'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideLeft: {
          '0%':   { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'mustard-glow':
          'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,160,23,0.08) 0%, transparent 70%)',
        'warm-glow':
          'radial-gradient(ellipse 40% 30% at 80% 50%, rgba(217,165,102,0.06) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
