/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        primary: "#0b1120",
        secondary: "#1a1f3a",
        tertiary: "#252d48",
        accent: "#2563eb",
        accentLight: "#60a5fa",
        accentDark: "#1d4ed8",
        dark: "#0f172a",
        text: "#e5e7eb",
        textMuted: "#9ca3af",

        // Light mode colors
        lightBg: "#f8f9fa",
        lightBgSecondary: "#f0f2f5",
        lightCard: "#ffffff",
        lightText: "#1f2937",
        lightTextMuted: "#6b7280",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(37, 99, 235, 0.3)",
        glowLg: "0 0 40px rgba(37, 99, 235, 0.4)",
        glowXl: "0 0 60px rgba(37, 99, 235, 0.5)",
        glow2xl: "0 0 80px rgba(37, 99, 235, 0.6)",
        card: "0 10px 30px rgba(0, 0, 0, 0.3)",
        cardLight: "0 4px 15px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      dropShadow: {
        glow: "0 0 10px rgba(37, 99, 235, 0.4)",
        glowLg: "0 0 20px rgba(37, 99, 235, 0.6)",
        glowXl: "0 0 30px rgba(37, 99, 235, 0.8)",
      },
      animation: {
        'shimmer': 'shimmer 3s infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-up': 'float-up 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(37, 99, 235, 0.6)' },
        },
        'float-up': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}