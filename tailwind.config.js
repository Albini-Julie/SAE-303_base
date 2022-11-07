/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
 colors: {
  "Noir": "#000000",
  "Bleu_marine": "#400089",
  "Bleu_clair": "#5d9cbd",
  "Rose_foncé": "#ed4d6e",
  "Rose_saumon": "#f56475"
 },
 fontSize: {
  "base": "0.8125rem",
  "lg": "1.875rem"
 },
 fontFamily: {
  "albert-sans": "Albert Sans",
  "noto-sans": "Noto Sans"
 },
 borderRadius: {
  "none": "0",
  "xs": "0.9375rem"
 }

    },
  },
  plugins: [],
}