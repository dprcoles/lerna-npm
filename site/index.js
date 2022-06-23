const { readdirSync } = require('fs')
const path = require('path')
const { version } = require('../package')

const webpackConfig = require('./webpack.config')
const theme = require('./theme')
const styles = require('./styles')

const typescriptParser = require('react-docgen-typescript').withCustomConfig(
  `${__dirname}/tsconfig.json`
)

const { PACKAGE_PREFIX } = require('../scripts/constants')

const reactDocs = require('react-docgen')

const rootDir = path.resolve(__dirname, '..')

const getDirectories = () =>
  readdirSync(path.resolve(rootDir, 'packages'), { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

const getPackageSections = (pkgs) => {
  let packageSections = []

  for (var i in pkgs)
    if (pkgs[i] != 'config')
      packageSections.push({
        name: pkgs[i]
          .replace('-', ' ')
          .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase()),
        content: path.resolve(rootDir, `packages/${pkgs[i]}/README.md`),
        sections: [
          {
            name: 'Changelog',
            content: path.resolve(rootDir, `packages/${pkgs[i]}/CHANGELOG.md`),
          },
          {
            name: 'Components',
            components: path.resolve(rootDir, `packages/${pkgs[i]}/src/*.{jsx,tsx}`),
          },
        ],
        sectionDepth: 1,
      })

  return packageSections
}

const packageSections = getPackageSections(getDirectories())

module.exports = {
  title: 'lerna npm',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  usageMode: 'expand',
  version,
  theme,
  styles: {
    ...styles,
    Heading: { heading1: { display: 'none' } },
  },
  webpackConfig,
  propsParser(filePath, source, resolver, handlers) {
    if (filePath.endsWith('.tsx')) {
      return typescriptParser.parse(filePath)
    }

    return reactDocs.parse(source, resolver, handlers, {
      filename: filePath,
    })
  },
  sections: [
    {
      name: 'Introduction',
      content: path.resolve(rootDir, './site/docs/Introduction.md'),
    },
    {
      name: 'Packages',
      content: path.resolve(rootDir, './site/docs/Packages.md'),
      sections: packageSections,
      sectionDepth: 2,
    },
  ],
  require: [
    'core-js',
    'regenerator-runtime/runtime',
    'focus-visible',
    path.resolve(__dirname, './scss/main.scss'),
  ],
  getComponentPathLine(componentPath) {
    if (!componentPath.endsWith('.jsx') && !componentPath.endsWith('.tsx')) {
      return componentPath
    }

    const component = path.basename(componentPath, '.jsx') || path.basename(componentPath, '.tsx')

    const pkg = path
      .dirname(componentPath)
      .replace('packages/', PACKAGE_PREFIX)
      .replace('/src', '')
      .replace('packages\\', PACKAGE_PREFIX)
      .replace('\\src', '')

    return `import { ${component} } from "${pkg}"`
  },
}
