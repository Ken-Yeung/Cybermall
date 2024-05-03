import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        night1: "#1D1D1D",
        night2: "#2E2E2E",
        night3: "#363636",
      },
      textColor: {
        night1: "#E4E4E4",
        night2: "#C2C2C2",
        night3: "#A9A9A9",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
