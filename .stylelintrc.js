module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  plugins: ["stylelint-order"],
  rules: {
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["focus-visible"],
      },
    ],
    "max-nesting-depth": 4,
    "order/properties-alphabetical-order": true,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"],
      },
    ],
    "no-descending-specificity": null,
    "selector-class-pattern": null,
    "lightness-notation": null,
  },
}
