export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: ["class", "light"],
    extend: {
      colors: {
        "dark-red": "#9A031E",
        "white-custom": "#DEFBFF",
      },
      fontFamily: {
        "poppins-reg": ["poppins-reg", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fade: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        "pop-in": {
          "0%": { opacity: 0, transform: "scale(0.5)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "fade-in": "fade 500ms ease-in-out",
        "pop-in": "pop-in 500ms ease-out",
      },
    },
  },
  plugins: [],
};
