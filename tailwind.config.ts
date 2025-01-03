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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        reenie: ['var(--font-reenie-beanie)', 'cursive'],
      },
      animation : {
        "loop-scroll" : "loop-scroll 10s linear infinite",
        'loop-scroll-back': 'loop-scroll-back 10s linear infinite',
      },
      keyframes : {
        "loop-scroll" : {
          from : { transform : "translateX(0)" },
          to : { transform : "translateX(-100%)" },
        },
        "loop-scroll-back" : {
          from : { transform : "translateX(-100%)" },
          to : { transform : "translateX(0)" },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;