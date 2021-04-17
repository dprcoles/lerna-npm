const markdownMagic = require('markdown-magic')

const badgeTransform = require('./badge')

const config = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (badge:package) --> */
    badge(content, options) {
      return options && badgeTransform(options.package)
    },
  },
}

module.exports = async () => {
  markdownMagic(['./README.md', './packages/**/README.md'], config)
}
