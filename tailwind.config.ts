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
        // Brand colors based on PRD
        background: {
          main: "#F7F3ED",     // Warm off-white
          dark: "#EFE4DB",     // Slightly darker
        },
        text: {
          primary: "#272221",   // Deep brown-gray
          secondary: "#6F645E", // Secondary text
        },
        border: "#D8CCC2",      // Lines/borders
        accent: "#C9A27C",      // Champagne gold for buttons/highlights
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['40px', { lineHeight: '120%', fontWeight: '600' }],
        'h2': ['28px', { lineHeight: '130%', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '140%', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '160%' }],
        'caption': ['14px', { lineHeight: '150%' }],
      },
      spacing: {
        'section-lg': '160px',
        'section-md': '120px',
        'section-sm': '80px',
      },
      maxWidth: {
        'content': '1200px',
      },
      borderRadius: {
        'pill': '999px',
      },
    },
  },
  plugins: [],
};
export default config;
