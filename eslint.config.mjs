import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
  },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylistic,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
          ecmaFeatures: {
              jsx: true,
          },
      },
      globals: {
          ...globals.browser,
      },
    },
  },
  {
    plugins: {
      '@stylistic': stylistic
    }
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          "checksVoidReturn": false
        }
      ],
      "@stylistic/indent": ["error", 4],
      "@stylistic/quotes": ["error", "single", { "avoidEscape": true }],
      "@stylistic/semi": ["error", "never"],
      "@stylistic/keyword-spacing": ["error", { "before": true, "after": true }],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/max-len": ["error", { "code": 100, "ignoreUrls": true, "ignoreStrings": true }],
      "sort-imports": ["error", { "ignoreCase": true, "ignoreDeclarationSort": true }],
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
      "@stylistic/jsx/jsx-indent": ["error", 2, {indentLogicalExpressions: true}],
      "@stylistic/space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "@stylistic/padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "return" }
      ],
      "@stylistic/space-infix-ops": "error",
      "@stylistic/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "curly": ["error", "multi-line", "consistent"],
      "@stylistic/space-before-blocks": ["error", "always"],
      "@stylistic/arrow-spacing": ["error", { "before": true, "after": true }],
      "@stylistic/lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }]
    },
  },
  {
    ignores: [
      'build/*',
      'node_modules/*',
      '*.config.{ts,js,mjs}',
    ],
  }
]);