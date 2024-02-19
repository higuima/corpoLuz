/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      "baby-blue": "#B0C3C6",
      "beige-10": "#FCF6EE",
      "beige-20": "#E9DAC3",
      "brown-10": "#B99772",
      "brown-15": "#CB8F72",
      "brown-20": "#C17B48",
      "brown-50": "#86503B",
      "green-10": "#E2E4D7",
      "green-20": "#868077",
      "green-30": "#AFB695",
    },
    backgroundImage: () => ({
      "gradient-greenish": "linear-gradient(90deg, #D9D9D999 0%, #D1DBABB2 100%)",
      "mobile-home": "url('./assets/yoga.png')",
    }),
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      ysabeau: ['Ysabeau Infant', "sans-serif"],
    },
    content: {
      'clinica-frente': "url('./assets/clinica_frente.png')",
      'logo-minimalista': "url('./assets/logo_Minimalista.png')",
      'logo-castanho': "url('./assets/logo_castanho.png')",
      'logo-marrom': "url('./assets/logo_marrom.png')",
      'yoga': "url('./assets/yoga.png')",
      'aula_yoga': "url('./assets/aula_yoga.jpg')",
    },
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
  },
};
export const plugins = [];