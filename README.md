# lerna-npm

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![GitHub Actions](https://github.com/dprcoles/lerna-npm/actions/workflows/publish.yml/badge.svg)

A repository to showcase how lerna can be used to manage individual npm packages in a design system monorepo!

<details open>
  <summary><b>Table of contents</b></summary>

---

- [How does it work](#How-does-it-work)
- [Packages](#Packages)
  - [Available packages](#Available-packages)
  - [Using the packages](#Using-the-packages)
- [How to contribute](#How-to-contribute)
  - [Installation](#Installation)
  - [Creating a new component](#Creating-a-new-component)
  - [Committing changes](#Committing-changes)
  - [Pre-release Packages](#Pre-release-Packages)
  - [Merging changes](#Merging-changes)
- [Storybook](#Storybook)

---

</details>

## How does it work 🤔

This project is a [monorepo](https://trunkbaseddevelopment.com/monorepos/), managed using [lerna](https://lerna.js.org/) and [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/). This allows multiple packages to be stored within the same codebase, but have independent dependencies from each other. This works great for the intention of this repository, as it means you will only ever import the required dependencies of the package you are installing rather than the dependencies for every package in this repository.

When a change to a package is pushed, the [GitHub workflow](https://github.com/dprcoles/lerna-npm/blob/master/.github/workflows/publish.yml) that has been set-up using Lerna's [`lerna version`](https://github.com/lerna/lerna/tree/main/commands/version#readme) and [`lerna publish`](https://github.com/lerna/lerna/tree/main/commands/publish#readme) commands will detect and generate a release for any new/updated packages. This release will bump the version of the new/updated package(s) and publish a new npm package through GitHub. The other packages in the repository that were not altered as part of the change will not be updated in any way.

Packages are versioned [semantically](https://semver.org/#summary), and managed through a a combination of [commitizen](https://github.com/commitizen/cz-cli) and [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).

## Packages 📦

## Available packages

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
    <tbody><tr>
        <td>@dprcoles/components</td>
        <td>1.0.0</td>
        <td>Core react components and styling</td>
        <td align="center">
          <a href="https://github.com/dprcoles/lerna-npm/blob/main/packages/components" style="height: 20px;">
            <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg" alt="GitHub source" height="20" width="20" />
          </a>
        </td>
      </tr><tr>
        <td>@dprcoles/styles</td>
        <td>1.0.0</td>
        <td>Styling configuration</td>
        <td align="center">
          <a href="https://github.com/dprcoles/lerna-npm/blob/main/packages/styles" style="height: 20px;">
            <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg" alt="GitHub source" height="20" width="20" />
          </a>
        </td>
      </tr><tr>
        <td>@dprcoles/tokens</td>
        <td>1.0.0</td>
        <td>Design tokens</td>
        <td align="center">
          <a href="https://github.com/dprcoles/lerna-npm/blob/main/packages/tokens" style="height: 20px;">
            <img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg" alt="GitHub source" height="20" width="20" />
          </a>
        </td>
      </tr></tbody>
  </table>
<!-- AUTO-GENERATED-CONTENT:END -->

### Using the packages

Each of the packages created via this repository is published through GitHub Packages, and can be installed via npm, yarn or pnpm.

```shell
npm install @dprcoles/components
```

You can then use the components in your project like so:

```javascript
import { Button } from "@dprcoles/components"

const App = () => {
  return <Button variant="primary">Button</Button>
}
```

## How to contribute 🚀

### Installation

To get started, you will need to clone this repository to your local machine.

```sh
git clone git@github.com:dprcoles/lerna-npm.git
```

Next, open the repository in your preferred code editor. This repository works best with [Visual Studio Code](https://code.visualstudio.com/), as there are various extensions for this editor that make developing within this repository easier. When you open the repository in Visual Studio Code, you will be prompted to install the recommended extensions for this repository. These can also be found in the `.vscode/extensions.json` file.

Once you have cloned the repository, you will need to install the dependencies for the project. This can be done by running the following command within the root directory of the repository.

```sh
pnpm install
```

> ⚠️ **Note** <br /> You will need to use [`pnpm`](https://pnpm.io/) when working with this repository, as this is the package manager that it has been configured to use.

### Creating a new component

When creating a new component, you will want to add it to the `core` package, which contains the core react components that are used within this design system. For example, if you want to add a new component called `Foo`, you would create a new directory within `packages/components/src` called `Foo`, and add the component files within that directory.

Each component group in `components` should have it's own directory, and contain the following files:

```plain text

  📂 Foo
  ┣ 📂 __stories__            // Contains the storybook stories for the component
  ┣ 📂 __tests__              // Contains unit tests for the component
  ┣ 📂 src                    // Contains the main component files
  ┃ ┣ 📝 index.ts
  ┃ ┣ 📝 MyComponent.tsx
  ┃ ┣ 📝 MyOtherComponent.tsx
  ┃ ┗ 📂 css                  // Contains the stylesheets for the component
  ┃   ┗ 📝 main.css

```

### Committing changes

For any changes you are making to this repository, the preferred approach would be to commit these changes to a feature branch and raise a pull request to add them in, rather than committing them directly to the master branch. That way the [GitHub workflow](https://github.com/dprcoles/lerna-npm/blob/master/.github/workflows/pull_request.yml) to build and test the changes that have been made can run before the change hits the master branch.

How you write your commit messages is vital to the way this repository works with Lerna. To correctly version packages, Lerna relies on [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to determine whether a change to a package should increment it by a [major, minor, or patch version](https://semver.org/).

Lerna also uses conventional commits to populate and generate a `CHANGELOG.md` file for each package, which keeps track of the changes that have been made to a package and new releases.

To easily use conventional commits, you can run the command `pnpm commit` within the root directory of this repository, that will launch [commitizen](https://github.com/commitizen/cz-cli) which is a cli to help with creating conventional commits. This is an example of how a formatted commit with commitizen looks, after following the prompts.

```plain text
feat(my-package): added my-package to the repository
```

If you want to format your commits like this without running the `pnpm commit` helper or just want to learn a bit more about how these commits work, you can check out the docs on [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary), which contains all the info on the syntax of these commits and how they are interpreted to manage the [semantic versioning](https://semver.org/#summary) strategy the packages in this repository use.

NOTE: Using conventional commits is optional, however not using this will result in your package only ever incrementing by a PATCH version each time a change is made unless the version number is bumped manually within the `package.json` file.

### Pre-release Packages

As part of the pull request flow, a pre-release package will be generated for any changed packages within the pull request when it has successfully passed the build and test steps. The version number of the generated pre-release package(s) can be found within the commit generated by the GitHub Actions Bot within the pull request, or by looking in the [Releases](https://github.com/dprcoles/lerna-npm/releases) section of the repository for the latest `Pre-release` tag. The pre-release package(s) generated can then be imported by version number into a project and tested to make sure the changes made are working as expected in practice, before moving on to the next step of merging the changes.

### Merging changes

Once you are happy that the changes you have made build and pass all of the relevant tests with no issues, you can merge these changes in.

Merging changes into master will trigger the [Publish GitHub workflow](https://github.com/dprcoles/lerna-npm/blob/master/.github/workflows/publish.yml) that will take care of the rest of the process. For each package you have changed as part of your merge, this workflow will update the package version based on the changes that have been made and publish a new npm package containing your changes. It will also update any markdown file references to the changed packages using [markdown-magic](https://github.com/DavidWells/markdown-magic), and also release the changes to the styleguide [here](https://dprcoles.github.io/lerna-npm/).

> ⚠️ **Note** <br /> Lerna is configured in this repository to ignore any changes that match [these conditions](https://github.com/dprcoles/lerna-npm/blob/master/lerna.json#L14) when deciding whether to bump the version of a package.

## Storybook 📕

This repository uses [Storybook](https://storybook.js.org/) to showcase the components that have been created. To run the storybook locally, you can run the following command within the root directory of the repository.

```sh
pnpm storybook
```

This will start the storybook server, and open a new tab in your browser with the storybook running. You can then navigate through the components that have been created and see them in action.

You view the live storybook site for this repository [here](https://dprcoles.github.io/lerna-npm/).
