module.exports = {
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: false,
  trailingComma: "es5",
  useTabs: false,
  arrowParens: "avoid",
  overrides: [
    {
      files: ["*.css"],
      options: {
        printWidth: 150,
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
}
