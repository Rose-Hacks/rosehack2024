/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rosehack: {
          "pink-200": "#ED4F8C",
          "pink-100": "#FF92C5",
          blue: "#68C9FF",
        },
      },
      fontFamily: {
        nasalization: ["nasalization", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        righteous: ["var(--font-righteous)", "sans-serif"],
      },
      dropShadow: {
        "pink-200": "0 0px 9px rgb(252,122,213)",
        blue: "0 0px 9px rgb(104, 201, 255)",
      },
    },
  },
  plugins: [],
};
