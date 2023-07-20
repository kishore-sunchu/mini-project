/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/Photos/1.jpg')",
        "footer-texture": "url('/src/Photos/1.jpg')",
      },
    },
  },
  plugins: [],
};
