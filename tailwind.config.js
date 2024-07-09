/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{tsx, scss}"],
    theme: {
      extend: {
        screens: {
          sm: { max: "480px" },
          md: { max: "768px" },
          lg: { max: "1024px" },
          xl: { max: "1440px" }
        },
        spacing: {
          default: "0px",
        },
        colors: {
          dark: "var(--dark)",
          white: "var(--white)",
          accent: "var(--cyan-400)",
          primary: "var(--gray-800)",
          negative: "var(--red-400)",
          warning: "var(--yellow-400)",
          positive: "var(--green-400)",
          "disabled": "var(--gray-400)",
          "inactive": "var(--gray-500)",
          "main-icon": "var(--gray-500)",
          /* border */
          border: {
            default: "1px solid var(--gray-200)",
          },
          /* background */
          bgPrimary: "var(--white)",
        },
        fontFamily: {
          Montserrat: ["Montserrat"],
        },
        fontSize: {
          sm: "12px",
          base: "14px",
        },
        borderRadius: {
          small: "4px",
          medium: "8px",
          large: "12px",
        }
      }
    },
    plugins: []
  }
  