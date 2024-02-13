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
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
