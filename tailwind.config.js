/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "375px",
      lg: "976px",
      custom: "500px"
    },
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
        from: {
          50: 'hsl(212, 18%, 14%)',
        },
        to: {
          50: "hsl(220, 16%, 11%)",
        }
      },
      fontFamily: {
        sans: ['Overpass', 'sans-serif']
      },
      fontWeight: {
        normal: '400',
        bold: 700
      }
    },
  },
  plugins: [],
}

