/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#96C2DB", // Buttons / Accent
        dark: "#A1C8FA", // Navbar & Footer
        secondary: "#000000", // Main text
        backcolor: "#F6F7EF", // Background color
      },
    },
  },

  plugins: [],
};
