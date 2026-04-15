/** @type {import('tailwindcss').Config} */
// Forced rebuild to clear stale arbitrary value caches.
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ui)", "Manrope", "sans-serif"],
        serif: ["var(--font-display)", "Cormorant Garamond", "serif"],
      },
      fontSize: {
        'h1': ['var(--text-h1)', { lineHeight: '1.125', letterSpacing: '0px' }],
        'h2': ['var(--text-h2)', { lineHeight: '1.166', letterSpacing: '0px' }],
        'h3': ['var(--text-h3)', { lineHeight: '1.25', letterSpacing: '0px' }],
        'h4': ['var(--text-h4)', { lineHeight: '1.33', letterSpacing: '0px' }],
        'body-lg': ['var(--text-body-lg)', { lineHeight: '1.66' }],
        'body-reg': ['var(--text-body-reg)', { lineHeight: '1.75' }],
        'meta': ['14px', { lineHeight: '1.57', fontWeight: '500' }],
        'tiny-label': ['12px', { lineHeight: '1.5', fontWeight: '600', letterSpacing: '1.5px' }],
      },
      spacing: {
        'section': 'var(--spacing-section)',
        'container': 'var(--spacing-container)',
        'card-gap': 'var(--card-gap)',
      },
      borderRadius: {
        'premium': '999px',
        'card': 'var(--card-radius)',
      },
      colors: {
        primary: {
          DEFAULT: "#1A5C5C", // Deep Teal
          light: "#2A7A7A",
          dark: "#134646",
        },
        accent: {
          DEFAULT: "#C4956A", // Copper/Bronze
          light: "#D4AC85",
          dark: "#A87B52",
        },
        surface: "#FDFBF8",
        background: "#F5F2EE", // Warm Cream
        text: {
          main: "#0E3B3B", // Dark Teal
          muted: "#5F7A7A", // Muted Teal
        },
      },
    },
  },

  plugins: [],
};
