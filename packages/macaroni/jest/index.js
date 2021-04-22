const path = require('path')

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
  }),
}
