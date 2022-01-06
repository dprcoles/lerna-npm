const fs = require('fs')
const path = require('path')
const readline = require('readline')
const jsonfile = require('jsonfile')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const rootDir = path.resolve(__dirname, '../..')

const { PACKAGE_PREFIX } = require('../constants')

const packagesFolder = 'packages'

function createPackage() {
  rl.question(
    `📛 What's the name of your package? (this will auto-prefix '${PACKAGE_PREFIX}' for you)\n: `,
    function (name) {
      // Check whether package already exists
      if (fs.existsSync(path.resolve(rootDir, `${packagesFolder}/${name}`))) {
        console.log(
          '\x1b[31m',
          '\nWoops! Looks like a package with this name already exists...',
        )
        console.log(
          `Please check the '/${packagesFolder}' folder, and try again with a unique name`,
        )
        console.log('\x1b[0m', `\n♻️  Restarting script...\n`)
        createPackage()
      }

      rl.question(
        `\n✏️  Enter a description for your package\n: `,
        function (desc) {
          console.log(`\n⚙️  Generating your file...`)

          const readmeMarkdown = `# ${name
            .replace(PACKAGE_PREFIX, '')
            .replace('-', ' ')
            .replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())}

<!-- AUTO-GENERATED-CONTENT:START (badge:package=${name}) -->

<!-- AUTO-GENERATED-CONTENT:END -->`

          // Generate default package directories
          fs.mkdirSync(path.resolve(rootDir, `${packagesFolder}/${name}`))
          fs.mkdirSync(path.resolve(rootDir, `${packagesFolder}/${name}/src`))
          fs.mkdirSync(
            path.resolve(rootDir, `${packagesFolder}/${name}/src/__tests__`),
          )
          fs.mkdirSync(path.resolve(rootDir, `${packagesFolder}/${name}/scss`))
          fs.mkdirSync(
            path.resolve(rootDir, `${packagesFolder}/${name}/scss/components`),
          )

          // Generate default package files
          fs.appendFileSync(
            path.resolve(rootDir, `${packagesFolder}/${name}/README.md`),
            readmeMarkdown,
          )
          fs.closeSync(
            fs.openSync(
              path.resolve(rootDir, `${packagesFolder}/${name}/CHANGELOG.md`),
              'wx',
            ),
          )
          fs.closeSync(
            fs.openSync(
              path.resolve(rootDir, `${packagesFolder}/${name}/src/index.js`),
              'wx',
            ),
          )
          fs.closeSync(
            fs.openSync(
              path.resolve(rootDir, `${packagesFolder}/${name}/scss/main.scss`),
              'wx',
            ),
          )
          fs.closeSync(
            fs.openSync(
              path.resolve(
                rootDir,
                `${packagesFolder}/${name}/scss/_components.scss`,
              ),
              'wx',
            ),
          )

          // Add scss reference to style guide
          fs.appendFileSync(
            path.resolve(rootDir, 'site/scss/main.scss'),
            `\n@import '../../packages/${name}/scss/main.scss';`,
          )

          // Generate content for default package.json file
          var packageJsonContent = {
            name: `${PACKAGE_PREFIX}${name}`,
            description: `${desc}`,
            version: '1.0.0',
            main: './dist/index.cjs.js',
            module: './dist/index.js',
            repository: {
              type: 'git',
              url: 'ssh://git@github.com/dcolesdev/lerna-npm.git',
              directory: `${packagesFolder}/${name}`,
            },
            scripts: {
              'build:bundles':
                'cross-env MODULES=false rollup -c ../../rollup.config.js',
              'build:modules':
                'babel src -d dist --ignore **/__tests__/**,.src/index.js',
              'build:scss':
                'node-sass --include-path ../../node_modules -o ./css ./scss/main.scss && postcss --config ../../postcss.config.js -r ./css/main.css',
              build:
                'rimraf dist css && yarn build:bundles && yarn build:modules && yarn build:scss',
              lint: 'eslint ./src --ext .js,.jsx',
              'test:unit':
                'cross-env BABEL_ENV=test jest --config ../../jest.config.js',
              test: 'yarn lint && yarn test:unit -u',
            },
            publishConfig: {
              registry: 'https://npm.pkg.github.com',
            },
            babel: {
              extends: '../../babel.config.js',
            },
            eslintConfig: {
              extends: '../../.eslintrc.js',
            },
          }

          // Create default package.json file
          jsonfile.writeFileSync(
            path.resolve(rootDir, `${packagesFolder}/${name}/package.json`),
            packageJsonContent,
            { spaces: 2 },
            function (err) {
              if (err) console.error(err)
            },
          )

          handleClose(name)
        },
      )
    },
  )
}

function handleClose(name) {
  console.log(
    '\x1b[32m',
    `\n🎉 A template for your package has successfully been created!`,
    '\x1b[0m',
  )
  console.log(`📁 You can check this out at ${packagesFolder}/${name}\n`)
  process.exit(0)
}

rl.on('close', function () {
  console.log(`\n Exiting script...`)
  process.exit(0)
})

createPackage()
