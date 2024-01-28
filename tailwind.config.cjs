/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '0.5rem',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1100px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#0f766e', //teal-700
        content: 'white',
        'o-bg': 'var(--color-o-bg)',
        'o-text': 'var(--color-o-text)',
        'm-bg': 'var(--color-m-bg)',
        'm-text': 'var(--color-m-text)',
        'a-bg': 'var(--color-a-bg)',
        'a-text': 'var(--color-a-text)',
        'c-plh': 'var(--color-placeholder)',
        'c-bd': 'var(--color-border)',
        'c-sd': 'var(--color-shadow)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionProperty: {
        DEFAULT: 'all',
      },
      boxShadow: {
        a: '1px 2px 3px -1px var(--color-shadow)',
        m: '2px 4px 6px -2px var(--color-shadow)',
      },
      translate: {
        center: '-50%',
      },
      spacing: {
        center: '50%',
      },
      keyframes: {
        ripple: {
          to: {
            transform: 'scale(4)',
            opacity: 0,
          },
        },
      },
      animation: {
        ripple: 'ripple .6s linear',
      },
    },
  },
};
