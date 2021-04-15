const autoprefixer = require('autoprefixer')
const clean = require('postcss-clean')

module.exports = {
  map: true,
  plugins: [autoprefixer(), clean()],
}
