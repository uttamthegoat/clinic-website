export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // backgrounds
        'primary-dark-bkgrnd': '#1A1A1A',
        'secondary-dark-bkgrnd': '#333333',
        'tertiary-dark-bkgrnd': '#808080',
        'primary-light-bkgrnd': '#FFFFFF',
        'secondary-light-bkgrnd': '#F5F5F5',
        'tertiary-light-bkgrnd': '#E5E5E5',
        // text
        'primary-light-text': '#FFFFFF',
        'secondary-light-text': '#B3B3B3',
        'tertiary-light-text': '#4D4D4D',
        'primary-dark-text': '#000000',
        'secondary-dark-text': '#333333',
        'tertiary-dark-text': '#666666',
        buttons: {
          blue: "#007BFF", // Primary blue
          "blue-hover": "#0056b3", // Darker blue for hover
          green: "#28A745", // Success green
          "green-hover": "#1e7e34", // Darker green for hover
          black: "#000000", // Pure black
          "black-hover": "#1a1a1a", // Soft black for hover
          gray: "#6C757D", // Neutral gray
          "gray-hover": "#5a6268", // Darker gray for hover
          yellow: "#FFC107", // Warning yellow
          "yellow-hover": "#d39e00", // Darker yellow for hover
          red: "#DC3545", // Danger red
          "red-hover": "#bd2130", // Darker red for hover
        },
      },
    },
  },
  plugins: [],
};
