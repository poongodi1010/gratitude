/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // maxWidth: {
      //   144: "120rem",
      // },
    },
    // screens: {
    //   base: { min: "320px", max: "375px" },
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   sm: { min: "376px", max: "425px" },
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }
    // },
  },
  plugins: [],
};
