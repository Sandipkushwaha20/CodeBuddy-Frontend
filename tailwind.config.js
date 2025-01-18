/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  }, 
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel", //best
      "fantasy", //b
      "wireframe", //1m b
      "black",
      "luxury", //g
      "dracula",
      "cmyk", //g
      "autumn", //2m g
      "business",
      "acid",
      "lemonade",//3m g
      "night",
      "coffee", //g
      "winter", //g
      "dim",
      "nord", //g
      "sunset", //g
    ],
  },
};