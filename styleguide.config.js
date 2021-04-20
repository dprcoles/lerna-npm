const path = require('path')
const { PACKAGE_PREFIX } = require('./scripts/constants')

module.exports = {
  components: 'packages/**/src/[A-Z]*.jsx',
  moduleAliases: {
    '@dcolesdev/gnocchi': path.resolve(__dirname, 'packages/gnocchi/src'),
    '@dcolesdev/rigatoni': path.resolve(__dirname, 'packages/rigatoni/src'),
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: '/node_modules',
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  getComponentPathLine(componentPath) {
    const component = path.basename(componentPath, '.jsx')
    const pkg = path
      .dirname(componentPath)
      .replace('packages\\', PACKAGE_PREFIX)
      .replace('\\src', '')

    return `import { ${component} } from '${pkg}'`
  },
}
