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
        // ── Midnight Orchid Palette ──────────────────────────────
        black:        '#0A0A0A',
        surface:      '#141414',
        surface2:     '#1E1E2A',
        mauve: {
          DEFAULT:    '#4B0082',
          light:      '#6A1FA8',
          deep:       '#2D0050',
        },
        rose: {
          DEFAULT:    '#C08081',
          light:      '#D4A0A0',
          pale:       '#F5E6E6',
          muted:      '#A06060',
        },
        cream: {
          DEFAULT:    '#F5F5F5',
          dim:        '#E0D8D8',
          faint:      '#B0A8A8',
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
        rose:  'rgba(192,128,129,0.2)',
        mauve: 'rgba(75,0,130,0.35)',
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
        'mauve-glow':
          'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(75,0,130,0.15) 0%, transparent 70%)',
        'rose-glow':
          'radial-gradient(ellipse 40% 30% at 80% 50%, rgba(192,128,129,0.08) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
