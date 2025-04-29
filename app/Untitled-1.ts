module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all files in the `app` directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the `components` directory
    './pages/**/*.{js,ts,jsx,tsx}', // Include all files in the `pages` directory (if applicable)
  ],
  theme: {
    extend: {
      colors: {
        lightAccent: '#FF6969',
        darkHighlight: '#C70039',
        lightBackground: '#FFF5E0',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};

@layer utilities {
  .border-border {
    border-color: #e5e7eb; /* Replace with your desired color */
  }
}