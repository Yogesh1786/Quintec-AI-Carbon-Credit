/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        gooey: "gooey 1s infinite", // Gooey effect animation
        slideDown: "slideDown 0.3s ease-out", // Slide-down animation
        slideInfinite: "slideInfinite 15s linear infinite", // Right-to-left image slider animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        gooey: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.2)", opacity: "0.3" },
          "100%": { transform: "scale(1)", opacity: "0.6" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInfinite: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-500%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Gooey effect class
        ".gooey-effect": {
          position: "relative",
          zIndex: "1",
          filter: "blur() brightness(1.3)", // initial gooey effect
        },
        ".gooey-effect:hover": {
          filter: "blur(1px) brightness(1.6)", // hover gooey effect
        },
        ".gooey-effect::before": {
          content: "''",
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          animation: "gooey 1s infinite",
          transform: "translate(-50%, -50%)",
        },
      });
    },
  ],
};
