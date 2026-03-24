/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F1E8D8",
        gold: "#C9B27B",
        black: "#050505"
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        hero: "-0.04em"
      }
    }
  },
  plugins: []
};
