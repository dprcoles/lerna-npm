const fs = require('fs')
const path = require('path')

const { PACKAGE_PREFIX } = require('../constants')

const getPackagesDir = () => {
  const rootDir = path.resolve(__dirname, '../..')
  const packagesDir = path.resolve(rootDir, 'packages')
  return packagesDir
}

const getPackageDir = (pkg) => path.join(getPackagesDir(), pkg.replace(PACKAGE_PREFIX, ''))

const getPackageJsonPath = (pkg) => path.join(getPackageDir(pkg), 'package.json')

const loadPackageJson = (pkg) => {
  const rawFile = fs.readFileSync(getPackageJsonPath(pkg))
  return JSON.parse(rawFile)
}

module.exports = {
  getPackageDir,
  getPackagesDir,
  getPackageJsonPath,
  loadPackageJson,
}
