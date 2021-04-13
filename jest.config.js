module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx'],
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['./enzyme.config.js'],
  coverageReporters: ['text'],
  resetModules: true,
}
