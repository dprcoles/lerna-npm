# lerna-npm

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![GitHub Actions](https://github.com/dcolesdev/lerna-npm/actions/workflows/publish.yml/badge.svg)

A repository to showcase how lerna can be used to manage individual npm packages in a monorepo!

<details open>
  <summary><b>Table of contents</b></summary>

---

- [How does it work](#How-does-it-work)
- [Packages](#Packages)
  - [Using the packages](#Using-the-packages)
- [Creating a new package](#Creating-a-new-package)
  - [Adding dependencies](#Adding-dependencies)
  - [Committing changes](#Committing-changes)
  - [Pre-release Packages](#Pre-release-Packages)
  - [Merging changes](#Merging-changes)
  - [Style guide](#Style-guide)
---

</details>

## How does it work

This project is a [monorepo](https://trunkbaseddevelopment.com/monorepos/), managed using [lerna](https://lerna.js.org/) and [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/). This allows multiple packages to be stored within the same codebase, but have independent dependencies from each other. This works great for the intention of this repository, as it means you will only ever import the required dependencies of the package you are installing rather than the dependencies for every package in this repository.

When a change to a package is pushed, the [GitHub workflow](https://github.com/dcolesdev/lerna-npm/blob/master/.github/workflows/publish.yml) that has been set-up using Lerna's [`lerna version`](https://github.com/lerna/lerna/tree/main/commands/version#readme) and [`lerna publish`](https://github.com/lerna/lerna/tree/main/commands/publish#readme) commands will detect and generate a release for any new/updated packages. This release will bump the version of the new/updated package(s) and publish a new npm package through GitHub. The other packages in the repository that were not altered as part of the change will not be updated in any way.

Packages are versioned [semantically](https://semver.org/#summary), and managed through a a combination of [commitizen](https://github.com/commitizen/cz-cli) and [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).

## Packages

<!-- AUTO-GENERATED-CONTENT:START (packageList) -->

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
   <tr>
      <td>
        <a href="https://dcolesdev.github.io/lerna-npm/#/Packages/Gnocchi"
        >@dcolesdev/gnocchi
        </a>
      </td>
      <td>1.8.17</td>
      <td>An example package using lerna to deploy and manage versioning</td>
      <td align="center">
        <a href="https://github.com/dcolesDEV/lerna-npm/blob/master/packages/gnocchi" style="height: 20px;">
          <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg" alt="GitHub source" height="20" width="20" />
        </a>
      </td>
    </tr>
   <tr>
      <td>
        <a href="https://dcolesdev.github.io/lerna-npm/#/Packages/Rigatoni"
        >@dcolesdev/rigatoni
        </a>
      </td>
      <td>1.7.25</td>
      <td>An example package using lerna to deploy and manage versioning</td>
      <td align="center">
        <a href="https://github.com/dcolesDEV/lerna-npm/blob/master/packages/rigatoni" style="height: 20px;">
          <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg" alt="GitHub source" height="20" width="20" />
        </a>
      </td>
    </tr>
    </tbody>
</table>
<!-- AUTO-GENERATED-CONTENT:END -->

### Using the packages

Each of the packages created via this repository is published through GitHub Packages, and can be installed via npm or yarn.

```shell
npm install @dcolesdev/gnocchi
```

To ensure that any custom styling the package may have is applied in your project, you will also need to add a reference to the package's stylesheet within the main sass file of your project. (Most packages are configured with a `scss/main.scss` file which you can import, however if this does not exist then it would suggest that the package either has no custom styling that needs to be applied or that the stylesheet has an alternative name, which you will need to reference in your import instead.)

```scss
@import '@dcolesdev/gnocchi/scss/main';
```

## Creating a new package

If you are looking to set up a new package within this repository, you can run the command `yarn create:package` or `npm create:package` which will set-up the directory and all of the default files you need for your new package after providing it with a package name and description

![create-package](https://user-images.githubusercontent.com/67347137/148316883-f2af3e8d-3faa-476d-805e-e26b0211c015.gif)

After this script has successfully run, a new directory within the packages directory will have been created with the following file structure

```plain text

  📦 my-package
  ┣ 📂 scss
  ┃ ┣ 📂 components
  ┃ ┣ 📝 _components.scss
  ┃ ┗ 📝 main.scss
  ┣ 📂 src
  ┃ ┣ 📂 __tests__
  ┃ ┗ 📝 index.js
  ┣ 📝 CHANGELOG.md
  ┣ 📝 package.json
  ┗ 📝 README.md

```

The `package.json` file that is created will also contain the default scripts to `build`, `lint` and `test` your package, as well as configuring the babel, eslint and publish config of the package.

If you are not planning on adding any tests to your package just yet, you can add the argument `--passWithNoTests` to the `test` script, which will auto pass this check without looking for any tests.

An example of a completed package file structure may look like this:

```plain text

  📦 example-package
  ┣ 📂 scss
  ┃ ┣ 📂 components
  ┃ ┃ ┣ 📝 _myComponent.scss
  ┃ ┃ ┗ 📝 _myOtherComponent.scss
  ┃ ┣ 📝 _components.scss
  ┃ ┗ 📝 main.scss
  ┣ 📂 src
  ┃ ┣ 📂 __tests__
  ┃ ┃ ┣ 📝️ MyComponent.jsx
  ┃ ┃ ┗ 📝 MyOtherComponent.jsx
  ┃ ┣ 📝 index.js
  ┃ ┣ 📝 MyComponent.jsx
  ┃ ┗ 📝 MyOtherComponent.jsx
  ┣ 📝 CHANGELOG.md
  ┣ 📝 package.json
  ┗ 📝 README.md

```

With the `index.js` file exporting all of the components in the `src/` directory like this

```js static
export { default as MyComponent } from './MyComponent.jsx'
export { default as MyOtherComponent } from './MyOtherComponent.jsx'
```

Exporting components this way allows you to reference the components in the package like this

```jsx static
import { Title } from '@dcolesdev/gnocchi'
```

rather than having to declare the absolute path for each component within the package.

### Adding dependencies

To add a dependency to the package you are working on, you will need to first change your directory to the directory of the package you are looking to add the dependency to, and run `yarn add [dependency]` or `npm install [dependency]` there rather than the root of the repository. This is because each package has it's own independent `package.json` file that keeps track of any dependencies the package has.

```sh
[n] ~/s/lerna-npm
⫸  cd packages/my-package/

[n] ~/s/lerna-npm/packages/my-package
⫸  yarn add some-dependency
```

If you are creating multiple packages at the same time and find that they are dependant on one other, you can resolve this by adding the project reference into the `package.json` file of the project that has the dependency, and running `lerna bootstrap` which will resolve this dependency internally rather than trying to install the package via github packages.

When using this approach, ensure that the version reference you are listing for the package matches the current version stated in the `package.json` of that package.

For example, if you wanted to add `@dcolesdev/gnocchi` as a dependency to `@dcolesdev/rigatoni`, and the `package.json` of `@dcolesdev/gnocchi` lists the current version as `1.0.0`, you would need to reference this version when adding this to your dependency list. (Any newly created packages will be set to version `1.0.0` by default).

```json

"dependencies": {
  "@dcolesdev/gnocchi": "^1.0.0",
}

```

> ⚠️ **Note** <br /> If you want to run tests for a package locally that has a dependency on another package not yet available on github packages, you will need to build the internal package you have a dependency on via `yarn build`/`npm build` whilst in the directory of said package, so that jest can reference the correct modules when running tests. You can also run `lerna run build` within the root of the repository to build all packages.

If the internal package you are listing is pre-existing and has a version already available on github packages, you can run `yarn add [package]` or `npm install [package]` to add this to your package dependency list as well.

### Committing changes

For any changes you are making to this repository, the preferred approach would be to commit these changes to a feature branch and raise a pull request to add them in, rather than committing them directly to the master branch. That way the [GitHub workflow](https://github.com/dcolesdev/lerna-npm/blob/master/.github/workflows/pull_request.yml) to build and test the changes that have been made can run before the change hits the master branch.

How you write your commit messages is vital to the way this repository works with Lerna. To correctly version packages, Lerna relies on [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to determine whether a change to a package should increment it by a [major, minor, or patch version](https://semver.org/).

Lerna also uses conventional commits to populate and generate a `CHANGELOG.md` file for each package, which keeps track of the changes that have been made to a package and new releases.

To easily use conventional commits, you can run the command `yarn commit` or `npm commit` within the root directory of this repository, that will launch [commitizen](https://github.com/commitizen/cz-cli) which is a cli to help with creating conventional commits. This is an example of how a formatted commit with commitizen looks, after following the prompts.

```plain text
feat(my-package): added my-package to the repository
```

You can see a live example of how a commit formatted like this is then interpreted and used within the `CHANGELOG.md` file each package is set up with [here](https://github.com/dcolesDEV/lerna-npm/blob/master/packages/gnocchi/CHANGELOG.md#features).

If you want to format your commits like this without running the `yarn commit` helper or just want to learn a bit more about how these commits work, you can check out the docs on [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary), which contains all the info on the syntax of these commits and how they are interpreted to manage the [semantic versioning](https://semver.org/#summary) strategy the packages in this repository use.

NOTE: Using conventional commits is optional, however not using this will result in your package only ever incrementing by a PATCH version each time a change is made unless the version number is bumped manually within the `package.json` file.

### Pre-release Packages

As part of the pull request flow, a pre-release package will be generated for any changed packages within the pull request when it has successfully passed the build and test steps. The version number of the generated pre-release package(s) can be found within the commit generated by the GitHub Actions Bot within the pull request, or by looking in the [Releases](https://github.com/dcolesdev/lerna-npm/releases) section of the repository for the latest `Pre-release` tag. The pre-release package(s) generated can then be imported by version number into a project and tested to make sure the changes made are working as expected in practice, before moving on to the next step of merging the changes.

### Merging changes

Once you are happy that the changes you have made build and pass all of the relevant tests with no issues, you can merge these changes in.

Merging changes into master will trigger the [Publish GitHub workflow](https://github.com/dcolesdev/lerna-npm/blob/master/.github/workflows/publish.yml) that will take care of the rest of the process. For each package you have changed as part of your merge, this workflow will update the package version based on the changes that have been made and publish a new npm package containing your changes. It will also update any markdown file references to the changed packages using [markdown-magic](https://github.com/DavidWells/markdown-magic), and also release the changes to the styleguide [here](https://dcolesdev.github.io/lerna-npm/).

> ⚠️ **Note** <br /> Lerna is configured in this repository to ignore any changes that match [these conditions](https://github.com/dcolesdev/lerna-npm/blob/master/lerna.json#L18) when deciding whether to bump the version of a package.

### Style guide

The [style guide](https://dcolesdev.github.io/lerna-npm/) for this repository is powered by [react-styleguidist](https://github.com/styleguidist/react-styleguidist), and is a way of showcasing the components within the packages of this repository and examples of how they can be implemented into a project.

To add an example for a component in a package, you can create a markdown file with the same name of the component you are creating the example for within the `src/` directory of that package, and follow this [guide](https://react-styleguidist.js.org/docs/documenting/#writing-code-exampless) on how to write an example markdown file for a component.

For example, if you wanted to create an example to showcase in the style guide for the component `MyComponent` in the `my-package` package, you would create the following file:

````md
// packages/my-package/src/MyComponent.md

```jsx
import { MyComponent } from '@dcolesdev/my-package'

const MyProp = 'Hello'

;<div>
  <MyComponent myProp={MyProp} />
</div>
```
````

Once an example file has been added for the component, it will automatically show up within the styleguide when it is next deployed.

You can test the example locally by running `yarn styleguide:dev`/`npm run styleguide:dev`, which will open the styleguide on `http://localhost:6060`.
