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
    'plugin:vuetify/base',
    "prettier",
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
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