import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E51D25',
          dark: '#8A181C',
          mid: '#B32228',
          light: '#FF3B43',
        },
        burgundy: {
          950: '#140507',
          900: '#23080B',
          800: '#3D0E13',
          700: '#5F141D',
          600: '#8A181C',
        },
        background: '#08090C',
        surface: '#111319',
        'surface-2': '#171923',
        'surface-3': '#1E212E',
        foreground: '#F0F3F8',
        muted: 'rgba(240,243,248,0.60)',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #FF3843 0%, #E51D25 50%, #8A181C 100%)',
      },
    },
  },
  plugins: [],
}

export default config
