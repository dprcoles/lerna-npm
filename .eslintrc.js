module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  rules: {
    "react/prop-types": "off",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      parser: "@typescript-eslint/parser",
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
      },
    },
    {
      files: "**/__tests__/**/*.tsx",
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
  ],
  plugins: ["prettier", "simple-import-sort", "import"],
}
