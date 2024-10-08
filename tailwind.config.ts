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
        background: "var(--background)",
        background2: "var(--background2)",
        background3: "var(--background3)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'chatbox': '0 4px 12px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
};
export default config;
