const fs = require('fs')
const path = require('path')

const webpack = require('webpack')
const { isDev } = require('./flags')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const cssclean = require('postcss-clean')
const { PACKAGE_PREFIX } = require('../scripts/constants')

const rootDir = path.resolve(__dirname, '..')
const packages = fs
  .readdirSync(path.resolve(rootDir, 'packages'))
  .filter((pkg) => !pkg.startsWith('.') && !pkg.startsWith('_'))

const scssLoaders = [
  `style-loader?sourceMap=${isDev}`,
  `css-loader?sourceMap=${isDev}`,
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [autoprefixer(), cssclean()],
      sourceMap: isDev,
    },
  },
  {
    loader: 'sass-loader',
    options: {
      includePaths: ['node_modules', '..'],
      sourceMap: isDev,
    },
  },
]

module.exports = {
  devServer: {
    watchOptions: {
      ignored: [],
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: 'babel-loader?cacheDirectory',
        exclude: isDev ? [/node_modules/] : [],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: isDev ? [/node_modules/] : [],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 1000,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: 'file-loader?name=assets/images/[name].[ext]',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: isDev
          ? scssLoaders
          : [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '.build/',
                },
              },
              ...scssLoaders.slice(1),
            ],
      },
    ],
  },
  plugins: isDev
    ? [new webpack.HotModuleReplacementPlugin()]
    : [
        new MiniCssExtractPlugin({
          filename: 'main.[contenthash].css',
        }),
      ],
  resolve: {
    alias: {
      ...packages.reduce(
        (aliasList, pkg) => ({
          ...aliasList,
          [`${PACKAGE_PREFIX}${pkg}$`]: path.resolve(rootDir, `./packages/${pkg}/src`),
        }),
        {}
      ),
      'rsg-components/Markdown/MarkdownHeading': path.resolve(
        __dirname,
        './components/Heading.jsx'
      ),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}
