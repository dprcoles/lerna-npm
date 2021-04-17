const { loadAllPackageJsons } = require('../../utils')
const { PACKAGE_PREFIX, GITHUB_PACKAGES_URL } = require('../../constants')

const packageList = async () => {
  const packageJsons = await loadAllPackageJsons()

  let markdownTable = `| Package | Version | Description |
| -------- | ------- | ----------- |
`

  markdownTable += packageJsons
    .map(
      ({ name, version, description }) =>
        `| [${name}](${GITHUB_PACKAGES_URL}/${name.replace(
          PACKAGE_PREFIX,
          ''
        )}) | ${version} | ${description} |
`
    )
    .join('')

  return markdownTable
}

module.exports = () => new Promise((resolve) => resolve(packageList))
