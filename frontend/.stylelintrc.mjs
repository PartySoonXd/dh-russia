/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules'
  ],
  plugins: [
    'stylelint-scss'
  ],
  customSyntax: 'postcss-scss',
  rules: {
    // BEM naming convention
    // 'selector-class-pattern': '^[a-z]([a-z0-9]+)?(__[a-z0-9]+)?(--[a-z0-9]+)?$',

    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'declaration-block-no-duplicate-properties': true,
    'no-duplicate-selectors': true,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-unspaced-operator': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global', 'local']
    }],
    'selector-pseudo-element-no-unknown': true,
    'property-no-unknown': [true, {
      checkPrefixed: true
    }],
    'no-empty-source': true,
    'scss/no-duplicate-mixins': true,
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/percent-placeholder-pattern': '^%[a-z0-9\\-]+$',
    'scss/dollar-variable-pattern': '^[a-z][a-z0-9-]*$',
    'max-nesting-depth': 3,
    'no-descending-specificity': true
  },
  ignoreFiles: [
    'build/**/*',
    'node_modules/*',
  ]
};