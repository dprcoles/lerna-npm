const path = require('path')
const babel = require('@rollup/plugin-babel').default
const resolve = require('@rollup/plugin-node-resolve').default
const url = require('@rollup/plugin-url')
const image = require('@rollup/plugin-image')
const svgr = require('@svgr/rollup').default
const typescript = require('@rollup/plugin-typescript')

let plugins = [
  resolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
  babel({
    exclude: 'node_modules/**',
  }),
  url({
    fileName: '[dirname][hash][extname]',
    sourceDir: path.join(__dirname, 'src'),
    limit: 0,
  }),
  svgr(),
  image(),
]

const args = process.argv

if (args[2] === 'typescript') {
  plugins = [...plugins, typescript()]
}

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
  plugins,
})

module.exports = (config) => [
  bundle(config),
  bundle(Object.assign(config, { moduleFormat: 'cjs' })),
]
