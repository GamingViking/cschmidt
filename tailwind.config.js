/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "xs": "400px",
      "sm": "500px",
      "md": "768px",
      "lg": "810px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    extend: {
      boxShadow: {
        'btn': 'inset 0px 0px 18px 0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        "text-gradient": "text-gradient 3s ease infinite alternate",
        "swipe-gradient": "swipe-gradient 5s ease infinite alternate",
      },
      keyframes: {
        "text-gradient": {
          "0, 100%": { "background-size" : "200% 200%", "background-position": "left center"},
          "50%": { "background-size" : "200% 200%", "background-position": "right center" },
        },
        "swipe-gradient": {
          "0%" : { "background-size" : "400% 400%", "background-position" : "100% 0%"},
          "100%" : { "background-size" : "400% 400%", "background-position" : "0% 0%"},
        }
      }
    },
  },
  plugins: [],
}
