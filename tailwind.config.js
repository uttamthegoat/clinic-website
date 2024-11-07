export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          text: '#0c4a6e',      // Dark blue for primary text
          'text-light': '#075985',  // Lighter blue for primary text variations
          bkgrnd: '#f0f9ff',    // Very light blue for primary backgrounds
          'bkgrnd-alt': '#e0f2fe',  // Slightly darker blue for alternate backgrounds
          accent: '#0ea5e9',    // Bright blue for primary accents/buttons
        },
        secondary: {
          text: '#1e293b',      // Dark slate for secondary text
          'text-light': '#475569',  // Lighter slate for secondary text variations
          bkgrnd: '#f8fafc',    // Very light slate for secondary backgrounds
          'bkgrnd-alt': '#f1f5f9',  // Slightly darker slate for alternate backgrounds
          accent: '#64748b',    // Medium slate for secondary accents
        },
        tertiary: {
          text: '#14532d',      // Dark green for tertiary text
          'text-light': '#166534',  // Lighter green for tertiary text variations
          bkgrnd: '#f0fdf4',    // Very light green for tertiary backgrounds
          'bkgrnd-alt': '#dcfce7',  // Slightly darker green for alternate backgrounds
          accent: '#22c55e',    // Medium green for tertiary accents
        }
      }
    },
  },
  plugins: [],
}