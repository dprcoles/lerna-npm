const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  prefix: "dc-",
  theme: {
    colors: {
      transparent: "transparent",
      background: "var(--dc-color-palette-background)",
      foreground: "var(--dc-color-palette-foreground)",
      primary: "var(--dc-color-palette-primary)",
      "primary-foreground": "var(--dc-color-palette-primary-foreground)",
      "primary-hover": "var(--dc-color-palette-primary-hover)",
      secondary: "var(--dc-color-palette-secondary)",
      "secondary-foreground": "var(--dc-color-palette-secondary-foreground)",
      "secondary-hover": "var(--dc-color-palette-secondary-hover)",
      danger: "var(--dc-color-palette-danger)",
      "danger-foreground": "var(--dc-color-palette-danger-foreground)",
      "danger-hover": "var(--dc-color-palette-danger-hover)",
      accent: "var(--dc-color-palette-accent)",
      "accent-foreground": "var(--dc-color-palette-accent-foreground)",
      ring: "var(--dc-color-palette-ring)",
      input: "var(--dc-color-palette-input)",
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: {
          "font-family": "var(--dc-font-family-base)",
          color: "var(--dc-color-palette-foreground)",
          "background-color": "var(--dc-color-palette-background)",
        },
        body: {
          "font-family": "var(--dc-font-family-base)",
          color: "var(--dc-color-palette-foreground)",
          "background-color": "var(--dc-color-palette-background)",
        },
        h1: {
          "font-family": "var(--dc-font-family-heading)",
          color: "var(--dc-color-palette-foreground)",
        },
        h2: {
          "font-family": "var(--dc-font-family-heading)",
          color: "var(--dc-color-palette-foreground)",
        },
        h3: {
          "font-family": "var(--dc-font-family-heading)",
          color: "var(--dc-color-palette-foreground)",
        },
        h4: {
          "font-family": "var(--dc-font-family-heading)",
          color: "var(--dc-color-palette-foreground)",
        },
        h5: {
          "font-family": "var(--dc-font-family-heading)",
          color: "var(--dc-color-palette-foreground)",
        },
        h6: {
          "font-family": "var(--dc-font-family-heading)",
          color: "var(--dc-color-palette-foreground)",
        },
      })
    }),
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"])
    }),
  ],
}
