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
        primary: "#dddddd",
        secondary: "#f9f3f3",
        tertiary: "#f7d9d9",
        quaternary: "#f25287",
      },
      height: {
        navbar: "4rem",
        cards: "11rem",
      },
    },
  },
  plugins: [],
};
export default config;
