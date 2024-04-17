const markdownMagic = require("markdown-magic")

const badgeTransform = require("./transforms/badge")
const packageListTransform = require("./transforms/packageList")

const config = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (packageList) --> */
    packageList() {
      return packageListTransform()
    },
    /* Match <!-- AUTO-GENERATED-CONTENT:START (badge:package) --> */
    badge(_content, options) {
      return options && badgeTransform(options.package)
    },
  },
}

markdownMagic(["./README.md", "./packages/**/README.md"], config)
