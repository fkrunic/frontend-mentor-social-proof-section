/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      'league-spartan': 'League Spartan, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

