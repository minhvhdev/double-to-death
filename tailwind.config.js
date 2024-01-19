/** @type {import('tailwindcss').Config} */

export const mode = 'jit';
export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const theme = {
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
      primary: '#ff6464',
      light: '#eff2fa',
      dark: '#2d2b29',
      danger: 'red',
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
};
export const plugins = [];
