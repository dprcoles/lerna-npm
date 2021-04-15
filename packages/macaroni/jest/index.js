const path = require('path')

module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: [path.join(__dirname, '../enzyme')],
  coverageReporters: ['text'],
  resetModules: true,
  rootDir: process.cwd(),
}
