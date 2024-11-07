export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#D3E5FF', // Light Blue
          DEFAULT: '#3A7CA5', // Default Clinic Blue
          dark: '#285C8B', // Darker Blue
        },
        secondary: {
          light: '#FFF7E0', // Light Beige
          DEFAULT: '#F3D6A0', // Clinic Beige
          dark: '#B3906F', // Darker Beige
        },
        accent: {
          light: '#FFF3F2', // Light Coral
          DEFAULT: '#FF7F7F', // Clinic Coral
          dark: '#CC5C5C', // Dark Coral
        },
        success: {
          light: '#E6FFEB', // Light Green
          DEFAULT: '#52B788', // Green for success messages
          dark: '#38855B', // Dark Green
        },
        warning: {
          light: '#FFF4D1', // Light Yellow
          DEFAULT: '#FFC700', // Yellow for warnings
          dark: '#CC9E00', // Dark Yellow
        },
        neutral: {
          light: '#F8F9FA', // Light Gray for backgrounds
          DEFAULT: '#E1E5EA', // Neutral Gray
          dark: '#495057', // Darker Gray for text
        },
        text: {
          light: '#FFFFFF', // Light text color
          dark: '#1F2937', // Dark text color
        },
        background: {
          light: '#F0F4F8', // Light background color
          dark: '#1A202C', // Dark background color
        },
        // Grayscale theme
        grayscale: {
          black: '#000000',
          darkest: '#1A1A1A',
          darker: '#333333',
          dark: '#4D4D4D',
          DEFAULT: '#808080', // Mid Gray
          light: '#B3B3B3',
          lighter: '#D9D9D9',
          lightest: '#F0F0F0',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
