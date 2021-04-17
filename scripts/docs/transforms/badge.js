const { loadPackageJson } = require('../../utils')

const badge = (pkg) => {
  if (!pkg) {
    return false
  }

  const { version } = loadPackageJson(pkg)

  return `![Github Release](https://img.shields.io/badge/version-v${version.replace(
    '-',
    '--'
  )}-orange)`
}

module.exports = badge
