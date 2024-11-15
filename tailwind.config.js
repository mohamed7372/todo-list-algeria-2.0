/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#96FBE6",
        },
        gray: {
          100: "#f9fbff",
          200: "#929dc1",
          300: "#1d2c55",
        },
      },
    },
  },
  plugins: [],
};
