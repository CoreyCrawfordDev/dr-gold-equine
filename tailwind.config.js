/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(44, 82, 130)",       // your defined --primary
        "primary-light": "rgb(66, 153, 225)",
        accent: "rgb(72, 187, 120)"
      }
    },
  },
  plugins: [],
}
