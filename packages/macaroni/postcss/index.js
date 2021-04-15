import autoprefixer from 'autoprefixer'
import clean from 'postcss-clean'

module.exports = {
  map: true,
  plugins: [autoprefixer(), clean()],
}
