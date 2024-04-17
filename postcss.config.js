module.exports = {
  plugins: [
    require("postcss-url")({ url: "rebase" }),
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano"),
  ],
}
