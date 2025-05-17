/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f7f2",
          100: "#ccefe6",
          200: "#99dfcc",
          300: "#66cfb3",
          400: "#33bf99",
          500: "#2D9D78", // Main primary color
          600: "#247e60",
          700: "#1b5e48",
          800: "#123f30",
          900: "#091f18",
        },
        secondary: {
          50: "#fef2ee",
          100: "#fde5dd",
          200: "#fbcbbb",
          300: "#f9b199",
          400: "#f79777",
          500: "#F26E38", // Main secondary color
          600: "#c2582d",
          700: "#914222",
          800: "#612c16",
          900: "#30160b",
        },
        accent: {
          50: "#fef9ec",
          100: "#fef4d9",
          200: "#fde9b3",
          300: "#fcdd8d",
          400: "#fbd267",
          500: "#F5B82E", // Main accent color
          600: "#c49325",
          700: "#936e1c",
          800: "#624912",
          900: "#312509",
        },
        danger: {
          50: "#fcedee",
          100: "#f9dbde",
          200: "#f3b7bc",
          300: "#ed939b",
          400: "#e76f79",
          500: "#E63946", // Main danger color
          600: "#b82e38",
          700: "#8a222a",
          800: "#5c171c",
          900: "#2e0b0e",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/hero-image.jpeg')",
        "about-pattern":
          "url('https://images.pexels.com/photos/8885024/pexels-photo-8885024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
