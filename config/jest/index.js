const fs = require('fs')
const path = require('path')

const { PACKAGE_PREFIX } = require('../../scripts/constants')

const rootDir = path.resolve(__dirname, '../..')
const packages = fs
  .readdirSync(path.resolve(rootDir, 'packages'))
  .filter((pkg) => !pkg.startsWith('.') && !pkg.startsWith('_'))

module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: [path.join(__dirname, '../enzyme')],
  coverageReporters: ['text'],
  resetModules: true,
  rootDir: process.cwd(),
  testPathIgnorePatterns: ['/node_modules/', '/__mocks__/', '/scripts/'],
  moduleNameMapper: Object.assign({
    '^.+\\.(jpg|jpeg|png|gif|bmp)$': path.join(__dirname, './mocks/file.js'),
    '^.+\\.(pdf|zip)$': path.join(__dirname, './mocks/file.js'),
    '^.+\\.(md)$': path.join(__dirname, './mocks/file.js'),
    '^.+\\.(svg)$': path.join(__dirname, './mocks/file.js'),
    '^.+\\.(scss)$': path.join(__dirname, './mocks/file.js'),
    '^.+\\.(eot|otf|webp|ttf|woff|woff2)$': path.join(__dirname, './mocks/file.js'),
    ...packages.reduce(
      (x, pkg) => ({
        ...x,
        [`${PACKAGE_PREFIX}${pkg}$`]: path.join(__dirname, `../../packages/${pkg}/dist`),
      }),
      {}
    ),
  }),
}
