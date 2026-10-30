import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10231d",
        emerald: { 50: "#effcf5", 100: "#d7f8e6", 500: "#12b878", 600: "#079669", 700: "#087b59" },
        lime: "#baf35c",
      },
      fontFamily: { sans: ["var(--font-plus-jakarta)", "sans-serif"] },
      boxShadow: { soft: "0 18px 50px rgba(16, 35, 29, .08)" },
    },
  },
  plugins: [forms],
};

export default config;
