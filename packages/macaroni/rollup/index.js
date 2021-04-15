const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')

const bundle = ({
  external,
  externalDeps = [],
  input = 'src/index.js',
  moduleFormat = 'es',
  outputDir = 'dist',
}) => ({
  input,
  output: {
    file: moduleFormat === 'es' ? `${outputDir}/index.js` : `${outputDir}/index.cjs.js`,
    format: moduleFormat,
    sourcemap: true,
  },
  external: (id) => {
    if (external) {
      return external(id)
    }

    const packageName = id.split('/')[0]

    // eslint-disable-next-line no-useless-escape
    return externalDeps.includes(packageName) || !/^[\.|\/]/.test(id)
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
})

module.exports = (config) => [
  bundle(config),
  bundle(Object.assign(config, { moduleFormat: 'cjs' })),
]
