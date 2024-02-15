import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        'glow' : '0px 0px 10px rgba(255, 255, 255, 0.30)',
      },
      hover: {
        'iconHover': 'transition ease-in-out hover:scale-110 duration-300 hover:cursor-pointer drop-shadow-lg hover:drop-shadow-glow'
      },
      screens: {
        'phone': '480px',
        // => @media (min-width: 480px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'medium': '768px',
        // => @media (min-width: 768px) { ... }

        'large': '1440px',
        // => @media (min-width: 1440px) { ... }

        'xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
