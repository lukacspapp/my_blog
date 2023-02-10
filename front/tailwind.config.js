/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["luxury", "acid"],
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')],
}
