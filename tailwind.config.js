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
        'white': '#e7e8d4',
        'black': '#1f272f',
    },
  },
  plugins: [],
}
}