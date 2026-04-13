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
          DEFAULT: "#1E40AF", // Deep Blue
          light: "#3B82F6",
          dark: "#1E3A8A",
        },
        accent: {
          DEFAULT: "#F97316", // Amber/Orange
          light: "#FB923C",
          dark: "#EA580C",
        },
        surface: "#FFFFFF",
        background: "#F8FAFC",
        text: {
          main: "#0F172A", // Navy Charcoal
          muted: "#64748B", // Slate
        },
      },
    },
  },

  plugins: [],
};
