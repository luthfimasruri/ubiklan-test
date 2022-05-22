/* eslint-disable */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    "plugin:nuxt/recommended",
    "@vue/prettier",
    "prettier",
  ],
  rules: {
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: 6,
  }
};