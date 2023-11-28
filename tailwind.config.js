/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "cityImage": "linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.623)), url('assets/bg.jpg')"
      },
      fontFamily:{
        "Outfit": ['Outfit', "sans-serif"]
      },
      backgroundColor:{
        "dark": "#000E23",
        "primary": "#63A7D4",
        "secondary": "#091C39",
        "accent": "#2382E1"
      },
      textColor:{
        "primary": "#63A7D4",
        "secondary": "#091C39",
        "accent": "#2382E1"
      },
      gradientColorStops:{
        "primary": "#63A7D4",
        "secondary": "#091C39",
        "accent": "#2382E1"
      },
      borderColor:{
        "primary": "#63A7D4",
        "secondary": "#091C39",
        "accent": "#2382E1"
      },
      dropShadow:{
        "dev": [
          '0px 0.5px 8px rgba(6, 95, 70, 0.05)',
          '0px 0.5px 8px rgba(99, 167, 212, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}