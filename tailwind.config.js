/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-superior': "url('./public/images/RickAndMorty_Superior')",
        'background-inferior': "url('./public/images/RickAndMorty_Inferior')"
      }
    },
  },
  plugins: [],
}