/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'gasoek': ['GasoekOne', 'sans-serif'],
      },
      colors: {
        'white': '#f7ce50',
        'black': '#130001',
        'accent' : '#5a1520',
    },
  },
  plugins: [],
}
}