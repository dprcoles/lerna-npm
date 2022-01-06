const path = require('path')

module.exports = {
  presets: [
    '@babel/react',
    [
      '@babel/env',
      {
        modules: false,
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
            modules: false,
            loose: true,
            targets: { node: true },
          },
        ],
      ],
      plugins: [path.dirname(require.resolve('babel-plugin-dynamic-import-node'))],
    },
  },
}
