/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        ivar: ["IvarTextHydro"],
      },
      screens: {
        "xl-custom": "1200px", // Define a custom breakpoint at 1200px
      },
    },
  },
  plugins: [],
};
