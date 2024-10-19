/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f196d6",
          "primary-content": "#f196d6",
          secondary: "#f6d860",
          "secondary-content": "#f196d6",
          accent: "#37cdbe",
          "accent-content": "#f196d6",
          neutral: "#3d4451",
          "neutral-content": "#f196d6",
          "base-100": "#ffffff",
          "base-content": "#f196d6",
        },
      },
    ],
  },
};
