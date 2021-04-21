const path = require('path')
const { PACKAGE_PREFIX } = require('./scripts/constants')
const { version } = require('./package')

module.exports = {
  title: 'Lerna Npm',
  components: 'packages/**/src/[A-Z]*.jsx',
  moduleAliases: {
    [`${PACKAGE_PREFIX}gnocchi`]: path.resolve(__dirname, 'packages/gnocchi/src'),
    [`${PACKAGE_PREFIX}rigatoni`]: path.resolve(__dirname, 'packages/rigatoni/src'),
  },
  theme: path.resolve(__dirname, 'packages/macaroni/styleguide/theme.js'),
  styles: path.resolve(__dirname, 'packages/macaroni/styleguide/styles.js'),
  pagePerSection: true,
  usageMode: 'expand',
  version,
  sections: [
    {
      name: 'Introdction',
      content: 'README.md',
    },
    {
      name: 'Packages',
      sections: [
        {
          name: 'Gnocchi',
          content: 'packages/gnocchi/README.md',
          sections: [
            {
              name: 'Change Log',
              content: 'packages/gnocchi/CHANGELOG.md',
            },
            {
              name: 'Components',
              components: 'packages/gnocchi/src/[A-Z]*.jsx',
            },
          ],
          sectionDepth: 1,
        },
        {
          name: 'Macaroni',
          content: 'packages/macaroni/README.md',
          sections: [
            {
              name: 'Change Log',
              content: 'packages/macaroni/CHANGELOG.md',
            },
          ],
          sectionDepth: 1,
        },
        {
          name: 'Rigatoni',
          content: 'packages/rigatoni/README.md',
          sections: [
            {
              name: 'Change Log',
              content: 'packages/rigatoni/CHANGELOG.md',
            },
            {
              name: 'Components',
              components: 'packages/rigatoni/src/[A-Z]*.jsx',
            },
          ],
        },
      ],
      sectionDepth: 2,
    },
  ],
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
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
  },
  getComponentPathLine(componentPath) {
    const component = path.basename(componentPath, '.jsx')
    const pkg = path
      .dirname(componentPath)
      .replace('packages/', PACKAGE_PREFIX)
      .replace('/src', '')
      .replace('packages\\', PACKAGE_PREFIX)
      .replace('\\src', '')

    return `import { ${component} } from '${pkg}'`
  },
}
