const path = require('path')

module.exports = {
  components: 'packages/**/src/[a-z]*.jsx',
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
    const name = path.basename(componentPath, '.js')
    const dir = path.dirname(componentPath)
    return `import ${name} from '${dir}'`
  },
}
