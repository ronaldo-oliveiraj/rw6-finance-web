import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "azul-escuro": "#0C2A4A",
        azul: "#0C447C",
        "azul-claro": "#E6F1FB",
        "cinza-claro": "#F4F5F7",
        "cinza-borda": "#E4E6EA",
        laranja: "#D85A30",
      },
    },
  },
  plugins: [],
};
export default config;
