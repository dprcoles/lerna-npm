const styleDictionary = require("style-dictionary")
const transformGroups = require("style-dictionary/lib/common/transformGroups")

const namespace = "dc"
const platforms = ["css", "js"]

const getStyleDictionaryConfig = platform => ({
  include: ["./src/**/*.json", `./src/*/${platform}/*.json`],
  source: [`./src/*/*.json`, `./src/*/${platform}/*.json`],
  platforms: {
    css: {
      transforms: [...transformGroups.css],
      buildPath: `dist/`,
      files: [
        {
          destination: "css/tokens.css",
          format: "css/variables",
        },
      ],
      prefix: namespace,
    },
    js: {
      transforms: [...transformGroups.js],
      buildPath: `dist/js/`,
      files: [
        {
          destination: "index.js",
          format: "javascript/module",
        },
        {
          destination: `json/index.json`,
          format: "json/nested",
          mapName: `${namespace}`,
        },
      ],
      prefix: namespace,
    },
  },
})

platforms.forEach(platform =>
  styleDictionary.extend(getStyleDictionaryConfig(platform)).buildPlatform(platform)
)
