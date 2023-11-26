import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pinky: {
          "50": "#fff0f8",
          "100": "#ffe3f4",
          "200": "#ffc6ea",
          "300": "#ff98d6",
          "400": "#ff58b9",
          "500": "#ff279c",
          "600": "#ff0075",
          "700": "#df005a",
          "800": "#b8004b",
          "900": "#980341",
          "950": "#5f0022",
        },
        navy: {
          "50": "#ebf4ff",
          "100": "#daecff",
          "200": "#bcd9ff",
          "300": "#93beff",
          "400": "#6997ff",
          "500": "#4671ff",
          "600": "#2545ff",
          "700": "#1a35e8",
          "800": "#1830bb",
          "900": "#172774",
          "950": "#111b55",
        },
        "pastel-green": {
          "50": "#f3fcf1",
          "100": "#e1f9df",
          "200": "#c5f2c0",
          "300": "#94e78e",
          "400": "#77d970",
          "500": "#38b82f",
          "600": "#289821",
          "700": "#23771e",
          "800": "#1f5f1c",
          "900": "#1b4e19",
          "950": "#082b08",
        },
        gallery: {
          "50": "#f8f8f8",
          "100": "#eeeeee",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
        },
      },
    },
    plugins: [],
  },
};
export default config;
