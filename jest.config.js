module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['src/**/*.js', '!src/index.js'],
  coverageReporters: ['text'],
  setupFilesAfterEnv: ['./enzyme.config.js'],
}
