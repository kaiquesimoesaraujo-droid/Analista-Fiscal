/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#17211d",
        paper: "#f8faf9",
        mist: "#e7efec",
        leaf: "#087b5f",
        mint: "#c9f2df",
        coral: "#d94f44",
        saffron: "#f2bc57",
        violet: "#7d5aa6"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"]
      },
      borderRadius: {
        portal: "8px"
      }
    }
  },
  plugins: []
};
