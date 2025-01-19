/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "Very-Dark-Grayish-Blue": "hsl(217, 19%, 35%)",
      "Desaturated-Dark-Blue": "hsl(214, 17%, 51%)",
      "Grayish-Blue": "hsl(212, 23%, 69%)",
      "Light-Grayish-Blue": "hsl(210, 46%, 95%)",
      transparent: 'transparent',
      white: 'white',
    },
    extend: {},
  },
  plugins: [],
};
