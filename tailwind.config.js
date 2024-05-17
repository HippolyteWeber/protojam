/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        "305px": "305px",
      },
      maxWidth: {
        containText: "65ch",
      },
    },
  },
  plugins: [daisyui],
};
