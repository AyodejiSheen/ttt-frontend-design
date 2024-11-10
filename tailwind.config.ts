import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#0DBBFC",
        green: "#65E4A3",
        "light-gray": "#F1F1F1",
        "dark-blue": "#0A2640",
        "blue-gray": "#8FB6D5",
        gray: "#777777",
      },

      fontFamily: {
        manrope: ["var(--font-manrope)"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["3rem", { lineHeight: "55px" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "70px" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "90px" }], // 72px
        "8xl": ["6rem", { lineHeight: "1" }], // 96px
        "9xl": ["8rem", { lineHeight: "1" }], // 128px
        "7.5rem": ["7.5rem", { lineHeight: "1" }], // Custom size 120px
      },
    },
  },
  plugins: [],
} satisfies Config;
