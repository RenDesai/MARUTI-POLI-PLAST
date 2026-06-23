/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a1128',
          800: '#152243',
        },
        steel: {
          400: '#8a9ab0',
          500: '#5c6d86',
          900: '#2c3545',
        },
        gold: {
          500: '#d4af37', // A luxury accent color
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'metallic': 'linear-gradient(145deg, #2c3545, #152243)',
      }
    },
  },
  plugins: [],
}
