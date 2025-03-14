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
        'pandas-blue': '#130654',
        'pandas-yellow': '#FFD43B',
        'pandas-pink': '#E70488',
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
  safelist: [
    'border-blue-500',
    'border-green-500',
    'border-orange-500',
    'border-gray-500',
    'border-indigo-500',
    'border-emerald-500',
    'from-blue-500',
    'from-green-500',
    'from-orange-500',
    'from-gray-500',
    'from-indigo-500',
    'from-emerald-500',
    {
      pattern: /bg-.*-500/,
    },
  ],
  plugins: [
    function({ addBase }) {
      addBase({
        ':root': {
          '--blue-500-rgb': '59, 130, 246',
          '--green-500-rgb': '34, 197, 94',
          '--orange-500-rgb': '249, 115, 22',
          '--gray-500-rgb': '107, 114, 128',
          '--indigo-500-rgb': '99, 102, 241',
          '--emerald-500-rgb': '16, 185, 129',
        }
      })
    }
  ],
};
