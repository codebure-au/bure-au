import type { Config } from "tailwindcss";

export default {
   content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            seagreen: "seagreen",
         },
         fontFamily: {
            sans: [
               '"Roboto"',
               '"Inter"',
               "ui-sans-serif",
               "system-ui",
               "sans-serif",
               '"Apple Color Emoji"',
               '"Segoe UI Emoji"',
               '"Segoe UI Symbol"',
               '"Noto Color Emoji"',
            ],
         },
         minHeight: {
            "10vh": "10vh",
            "25vh": "25vh",
            "65vh": "65vh",
         },
         minWidth: {
            "36r": "36rem",
         },
         width: {
            "40vw": "40vw",
         },
         flex: {
            "2": "2 2 0%",
            "5": "5 5 0%",
         },
      },
   },
   plugins: [],
} satisfies Config;
