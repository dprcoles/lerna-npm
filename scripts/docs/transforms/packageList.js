const { loadAllPackageJsons } = require('../../utils')
const { PACKAGE_PREFIX, STYLEGUIDE_BASE_URL, GITHUB_PACKAGES_URL } = require('../../constants')

const packageList = async () => {
  const packageJsons = await loadAllPackageJsons()

  let markdownTable = `
<table>
  <thead>
    <tr>
      <th>Package</th>
      <th>Version</th>
      <th>Description</th>
      <th>Source</th>
    </tr>
  </thead>
  <tbody>
`

  markdownTable += packageJsons
    .map(
      ({ name, version, description }) =>
        `   <tr>
      <td>
        <a href="${STYLEGUIDE_BASE_URL}/#/Packages/${name
          .replace(PACKAGE_PREFIX, '')
          .replace('-', '%20')
          .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase())}"
        >${name}
        </a>
      </td>
      <td>${version}</td>
      <td>${description}</td>
      <td align="center">
        <a href="${GITHUB_PACKAGES_URL}/${name.replace(PACKAGE_PREFIX, '')}" style="height: 20px;">
          <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg" alt="GitHub source" height="20" width="20" />
        </a>
      </td>
    </tr>
`
    )
    .join('')

  markdownTable += `    </tbody>
</table>`

  return markdownTable
}

module.exports = () => new Promise((resolve) => resolve(packageList))
