const path = require('path')

module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: [path.join(__dirname, '../enzyme')],
  coverageReporters: ['text'],
  resetModules: true,
  rootDir: process.cwd(),
  moduleNameMapper: Object.assign({
    '^.+\\.(svg)$': path.join(__dirname, './mocks/file.js'),
    '^.+\\.(scss)$': path.join(__dirname, './mocks/file.js'),
    '^.+\\.(md)$': path.join(__dirname, './mocks/file.js'),
    '^.+\\.(pdf|zip)$': path.join(__dirname, './mocks/file.js'),
    '^.+\\.(jpg|jpeg|png|gif|bmp)$': path.join(__dirname, './mocks/file.js'),
  }),
}
