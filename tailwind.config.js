/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pandas-blue': {
          100: '#e7e6ed', // Much lighter shade
          DEFAULT: '#130754', // Original color
          900: '#000080', // Assuming a dark shade for contrast
        },
        'pandas-yellow': '#ffca00;',
        'pandas-pink': '#e70488;',
        'nodejs-green': {
          100: '#d9f9b1', // Lighter shade
          DEFAULT: '#8cd40d', // Original color
          // Add other shades as needed
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
