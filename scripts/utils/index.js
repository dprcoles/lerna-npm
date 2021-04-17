const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const { PACKAGE_PREFIX } = require('../constants')

const execp = (cmd, options = {}) =>
  new Promise((resolve, reject) => {
    console.log(cmd)

    exec(cmd, options, (err, stdout) => {
      err ? reject(err) : resolve(stdout)
    })
  })

const getPackagesDir = () => {
  const rootDir = path.resolve(__dirname, '../..')
  const packagesDir = path.resolve(rootDir, 'packages')

  return packagesDir
}

const getPackageDir = (pkg) => path.join(getPackagesDir(), pkg.replace(PACKAGE_PREFIX, ''))

const getPackageJsonPath = (pkg) => path.join(getPackageDir(pkg), 'package.json')

const listAllPackages = async () => {
  const packages = await execp('yarn --silent lerna ls -a --json', {
    silent: true,
  })

  return JSON.parse(packages)
}

const loadPackageJson = (pkg) => {
  const rawFile = fs.readFileSync(getPackageJsonPath(pkg))
  return JSON.parse(rawFile)
}

const loadAllPackageJsons = async () => {
  const packages = await listAllPackages()
  return packages.map(({ name }) => loadPackageJson(name))
}

module.exports = {
  execp,
  listAllPackages,
  getPackageDir,
  getPackagesDir,
  getPackageJsonPath,
  loadPackageJson,
  loadAllPackageJsons,
}
