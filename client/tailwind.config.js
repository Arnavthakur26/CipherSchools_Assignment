/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        searchbox: "#f2f5fa",
        button: "#f3912e",
        sidebarTabHover: "rgba(212,132,50,.2)",
      },
      textColor: {
        brand: "#f3912e",
      },
      fontFamily: {
        opensans: "'Open Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
