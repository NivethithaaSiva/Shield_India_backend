/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f4f8',
          100: '#e6e8f1',
          200: '#c2c7db',
          300: '#8a93b3',
          400: '#4d567a',
          500: '#23305a',
          600: '#16204a',
          700: '#0a1445',
          800: '#080f2e',
          900: '#050a1a',
        },
        accent: {
          50: '#fef2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f98080',
          500: '#e31b23',
          600: '#c81e1e',
          700: '#9b1c1c',
          800: '#771d1d',
          900: '#491616',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 