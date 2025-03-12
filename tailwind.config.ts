
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        cyberblack: {
          DEFAULT: "#0a0a0a",
          50: "#151515",
          100: "#1a1a1a",
          200: "#232323",
        },
        neonblue: {
          DEFAULT: "#00f2ff",
          50: "rgba(0, 242, 255, 0.05)",
          100: "rgba(0, 242, 255, 0.1)",
          200: "rgba(0, 242, 255, 0.2)",
          500: "rgba(0, 242, 255, 0.5)",
          700: "rgba(0, 242, 255, 0.7)",
        },
        neongreen: {
          DEFAULT: "#39ff14",
          50: "rgba(57, 255, 20, 0.05)",
          100: "rgba(57, 255, 20, 0.1)",
          200: "rgba(57, 255, 20, 0.2)",
          500: "rgba(57, 255, 20, 0.5)",
          700: "rgba(57, 255, 20, 0.7)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f2ff, 0 0 10px #00f2ff, 0 0 15px #00f2ff',
        'neon-green': '0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-neon": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "glow": {
          "0%": { 
            textShadow: "0 0 5px rgba(0, 242, 255, 0.5), 0 0 10px rgba(0, 242, 255, 0.3)"
          },
          "50%": { 
            textShadow: "0 0 15px rgba(0, 242, 255, 0.8), 0 0 25px rgba(0, 242, 255, 0.5), 0 0 35px rgba(0, 242, 255, 0.3)"
          },
          "100%": { 
            textShadow: "0 0 5px rgba(0, 242, 255, 0.5), 0 0 10px rgba(0, 242, 255, 0.3)"
          }
        },
        "glitch": {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        "float": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" }
        },
        "typing": {
          "from": { width: "0" },
          "to": { width: "100%" }
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#00f2ff" }
        },
        "rotate-slow": {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "glitch": "glitch 0.5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "scan-line": "scan-line 4s linear infinite",
        "typing": "typing 3.5s steps(40, end)",
        "blink-caret": "blink-caret .75s step-end infinite",
        "rotate-slow": "rotate-slow 15s linear infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
