const fs = require("fs")
const path = require("path")
const { PACKAGE_PREFIX } = require("../constants")

const getWorkspaceDir = () => {
  const rootDir = path.resolve(__dirname, "../..")
  const packagesDir = path.resolve(rootDir, "packages")

  return packagesDir
}

const getPackageDir = pkg => path.join(getWorkspaceDir(), pkg.replace(PACKAGE_PREFIX, ""))

const getPackageJsonPath = pkg => path.join(getPackageDir(pkg), "package.json")

const loadPackageJson = pkg => {
  const rawFile = fs.readFileSync(getPackageJsonPath(pkg))
  return JSON.parse(rawFile)
}

const loadAllPackages = () => {
  const packages = [
    `${PACKAGE_PREFIX}components`,
    `${PACKAGE_PREFIX}styles`,
    `${PACKAGE_PREFIX}tokens`,
  ]
  return packages.map(name => loadPackageJson(name))
}

module.exports = {
  loadPackageJson,
  loadAllPackages,
}
