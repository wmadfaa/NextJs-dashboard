const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#AE7AFF",
          light: "#EFE4FF",
          dark: "#8B62CC",
        },
        secondary: {
          yellow: {
            DEFAULT: "#FAE8A4",
            light: "#FEFAED",
          },
          red: {
            DEFAULT: "#E99898",
            light: "#FBEAEA",
          },
          green: {
            DEFAULT: "#98E9AB",
            light: "#EAFBEE",
          },
        },
        grey: {
          DEFAULT: "#5F646D",
          light: "#E7E8E9",
          solid: "#FAF4F0",
        },
        dark: {
          DEFAULT: "#000000",
          solid: "#252524",
        },
        onLight: {
          DEFAULT: "#000000",
          soft: "rgba(0, 0, 0, 0.4)",
        },
        onDark: {
          DEFAULT: "#FFFFFF",
          soft: "rgba(255, 255, 255, 0.4)",
        },
      },
      boxShadow: {
        DEFAULT: "4px 4px 0px #000000",
        md: "6px 6px 0px #000000",
        lg: "8px 8px 0px #000000",
        "secondary-sm": "-4px -4px 0px #000000",
        "secondary-md": "-6px -6px 0px #000000",
        "secondary-lg": "-8px -8px 0px #000000",
      },
      boxShadowColor: {
        onLight: "#000000",
        onDark: "rgba(255, 255, 255, 0.25)",
      },
      borderRadius: { xs: "0.0625rem" },
    },
    fontFamily: {
      sans: ["var(--roboto-flex-font)", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      h1: ["48px", { lineHeight: "56px", fontWeight: "800" }],
      h2: ["36px", { lineHeight: "46px", fontWeight: "800" }],
      h3: ["30px", { lineHeight: "38px", fontWeight: "800" }],
      h4: ["24px", { lineHeight: "32px", fontWeight: "800" }],
      h5: ["20px", { lineHeight: "28px", fontWeight: "800" }],
      h6: ["18px", { lineHeight: "24px", fontWeight: "800" }],

      "p1-bold": ["16px", { lineHeight: "24px", fontWeight: "700" }],
      "p1-medium": ["16px", { lineHeight: "24px", fontWeight: "500" }],
      "p1-regular": ["16px", { lineHeight: "24px", fontWeight: "400" }],

      "p2-bold": ["14px", { lineHeight: "21px", fontWeight: "700" }],
      "p2-medium": ["14px", { lineHeight: "21px", fontWeight: "500" }],
      "p2-regular": ["14px", { lineHeight: "21px", fontWeight: "400" }],

      "p3-bold": ["12px", { lineHeight: "16px", fontWeight: "700" }],
      "p3-medium": ["12px", { lineHeight: "16px", fontWeight: "500" }],
      "p3-regular": ["12px", { lineHeight: "16px", fontWeight: "400" }],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("group-hocus", [".group:hover &", ".group:focus &"]);
      addVariant("hotive", ["&:hover", "&:active"]);
      addVariant("group-hotive", [".group:hover &", ".group:active &"]);
    }),
  ],
};
