import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
        scrollY: {
          to: {
            transform: "translateY(calc(-50% - 0.5rem))",
          },
        },
        "scrollY-reverse": {
          to: {
            transform: "translateY(calc(50% + 0.5rem))",
          },
        },
        scrollX: {
          to: {
            transform: "translateX(calc(-50% - 0.5rem))",
          },
        },
        "scrollX-reverse": {
          to: {
            transform: "translateX(calc(50% + 0.5rem))",
          },
        },
        enterFromRight: {
          from: {
            opacity: "0",
            transform: "translateX(200px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        enterFromLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-200px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        exitToRight: {
          from: {
            opacity: "1",
            transform: "translateX(0)",
          },
          to: {
            opacity: "0",
            transform: "translateX(200px)",
          },
        },
        exitToLeft: {
          from: {
            opacity: "1",
            transform: "translateX(0)",
          },
          to: {
            opacity: "0",
            transform: "translateX(-200px)",
          },
        },
        enterFromBotton: {
          from: {
            opacity: "0",
            transform: "translateY(100px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "loop-vertically": "scrollY 20s linear infinite",
        "loop-horizontal": "scrollX 60s linear infinite",
        "loop-horizontal-reverse": "scrollX-reverse 50s linear infinite",
        "loop-vertically-reverse": "scrollY-reverse 50s linear infinite",
        enterFromRight: "enterFromRight 0.2s ease-out",
        enterFromLeft: "enterFromLeft 0.2s ease-out",
        exitToRight: "exitToRight 0.2s ease-out",
        exitToLeft: "exitToLeft 0.2s ease-out",
        enterFromBotton: "enterFromBotton 0.2s ease-out",
      },
      colors: {
        primary: {
          DEFAULT: '#06b6d4',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      title: ['Merriweather', 'serif'],
      serif: ['Merriweather', 'serif'],
    },
    
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/container-queries'),

  ],
};
export default config;
