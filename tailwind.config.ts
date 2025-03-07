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
        darkbluegray: "#a9b3c1",
        lightbluegray: "#dfe3e9",
        verylightblue : "#f1f5f9",
        input: "hsl(var(--input))",},
        height: {
          '108': '27rem',
          '112': '28rem',
          '120': '30rem',
          '136': '34rem',
          '140': '35rem',
          '148': '37rem',
        },
        maxHeight: {
          '108': '27rem',
          '112': '28rem',
          '116': '29rem',
          '120': '30rem',
          '124': '31rem',
          '128': '32rem',
          '132': '33rem',
          '136': '34rem',
          '140': '35rem',
          '144': '36rem',
          '148': '37rem',
        },
        minHeight: {
          '108': '27rem',
          '112': '28rem',
          '116': '29rem',
          '120': '30rem',
          '124': '31rem',
          '128': '32rem',
          '132': '33rem',
          '136': '34rem',
          '140': '35rem',
          '144': '36rem',
          '148': '37rem',
          '180': '60rem',
          '65rem': '65rem',
          '75rem': '75rem',
          '85rem': '85rem',
          '95rem': '95rem',
        },
        width: {
          '108': '27rem',
          '112': '28rem',
          '116': '29rem',
          '120': '30rem',
          '124': '31rem',
          '128': '32rem',
          '132': '33rem',
          '136': '34rem',
          '140': '35rem',
          '144': '36rem',
          '148': '37rem',
        },
        maxWidth: {
          '108': '27rem',
          '112': '28rem',
          '116': '29rem',
          '120': '30rem',
          '124': '31rem',
          '128': '32rem',
          '132': '33rem',
          '136': '34rem',
          '140': '35rem',
          '144': '36rem',
          '148': '37rem',
        },
        margin: {
          '29': '7.1rem',
          '29.5': '7.2rem',
          '30': '7.3rem',
          '30.5': '7.4rem',
          '31': '7.5rem',
          '31.5': '7.6rem',
          '31.8': '7.8rem',
          '31.9': '7.9rem',
          
        },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
