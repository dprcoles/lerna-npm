const path = require("path")

/** @type {import('jest').Config} */
module.exports = {
  collectCoverageFrom: ["**/__tests__/**/*.{js,ts,jsx,tsx}", "!src/**/*.d.ts"],
  coverageReporters: ["text"],
  moduleDirectories: ["node_modules", "src"],
  resetModules: true,
  rootDir: process.cwd(),
  modulePaths: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.test.{js,ts,jsx,tsx}"],
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: [path.join(__dirname, "../testing-library/index.ts")],
  verbose: true,
  resetMocks: true,
  moduleNameMapper: Object.assign({
    "^.+\\.(svg)$": path.join(__dirname, "./mocks/file.js"),
    "^.+\\.(scss|css)$": path.join(__dirname, "./mocks/file.js"),
    "^.+\\.(md)$": path.join(__dirname, "./mocks/file.js"),
    "^.+\\.(pdf|zip)$": path.join(__dirname, "./mocks/file.js"),
    "^.+\\.(jpg|jpeg|png|gif|bmp)$": path.join(__dirname, "./mocks/file.js"),
    "^.+\\.(eot|otf|webp|ttf|woff|woff2)$": path.join(__dirname, "./mocks/file.js"),
  }),
}
