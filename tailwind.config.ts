import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00C853",
          dark: "#00863A",
          light: "#69F0AE",
        },
        background: "#FFFFFF",
        foreground: "#1A1A1A",
        "green-dark": "#1a5f3f",
        "green-mid-t": "#2a7a52",
        "green-glow": "#e8f5ee",
        gold: "#c9a84c",
        "gold-light": "#f5e9c8",
        "off-white": "#f8f6f1",
        "warm-white": "#fdfcf9",
        charcoal: "#1a1a1a",
        mid: "#4a4a4a",
        muted: "#8a8a8a",
      },
      fontFamily: {
        sans: ["DM Sans", "Albert Sans", "var(--font-geist-sans)", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
