/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#932213',
        secondary: '#2A2A2A',
        accent1: '#D94E1F',
        accent2: '#F1B24A',
        accent3: '#404040',
        dark: {
          100: '#1A1A1A',
          200: '#2A2A2A',
          300: '#3A3A3A',
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      transitionDuration: {
        '300': '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};