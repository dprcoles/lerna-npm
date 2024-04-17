const { loadAllPackages } = require("../../utils")
const { PACKAGE_PREFIX, GITHUB_PACKAGES_URL } = require("../../constants")

const packageList = () => {
  const packages = loadAllPackages()

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
    <tbody>`

  markdownTable += packages
    .map(
      ({ name, version, description }) =>
        `<tr>
        <td>${name}</td>
        <td>${version}</td>
        <td>${description}</td>
        <td align="center">
          <a href="${GITHUB_PACKAGES_URL}/${name.replace(PACKAGE_PREFIX, "")}" style="height: 20px;">
            <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg" alt="GitHub source" height="20" width="20" />
          </a>
        </td>
      </tr>`
    )
    .join("")

  markdownTable += `</tbody>
  </table>`

  return markdownTable
}

module.exports = packageList
