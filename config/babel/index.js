const path = require('path')

const { MODULES } = process.env

module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@babel/react',
    [
      '@babel/env',
      {
        modules: MODULES === 'false' ? false : 'commonjs',
        loose: true,
        useBuiltIns: 'entry',
        corejs: '3.15',
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
        '@babel/preset-typescript',
      ],
      plugins: [path.dirname(require.resolve('babel-plugin-dynamic-import-node'))],
    },
  },
}
