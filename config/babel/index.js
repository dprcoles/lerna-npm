const path = require('path')

const { MODULES } = process.env

module.exports = {
  presets: [
    '@babel/react',
    [
      '@babel/env',
      {
        modules: MODULES === 'false' ? false : 'commonjs',
        loose: true,
        useBuiltIns: 'entry',
        corejs: 2,
      },
    ],
  ],
  plugins: [path.dirname(require.resolve('@babel/plugin-syntax-dynamic-import'))],
  env: {
    test: {
      presets: [
        '@babel/react',
        [
          '@babel/env',
          {
            modules: 'commonjs',
            loose: true,
            targets: { node: true },
          },
        ],
      ],
      plugins: [path.dirname(require.resolve('babel-plugin-dynamic-import-node'))],
    },
  },
}
