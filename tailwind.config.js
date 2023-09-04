/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    colors: {
      'very-dark-magenta': 'hsl(300, 43%, 22%)',
      'soft-pink': 'hsl(333, 80%, 67%)',
      'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
      'light-grayish-magenta': 'hsl(300, 24%, 96%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      'league-spartan': 'League Spartan, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

