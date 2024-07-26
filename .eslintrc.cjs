/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue']
  },
  globals: {},
  plugins: ['@typescript-eslint', 'vue', 'prefer-arrow-functions', 'functional', 'total-functions'],
  ignorePatterns: ['dist', 'node_modules', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:storybook/recommended',
    'plugin:total-functions/recommended'
  ],
  rules: {
    'no-implicit-coercion': 'error',
    'prefer-template': 'error',
    'no-restricted-globals': [
      'error',
      { name: 'isFinite', message: 'Use Number.isFinite instead.' },
      { name: 'isNaN', message: 'Use Number.isNaN instead.' }
    ],
    'total-functions/no-unsafe-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/strict-boolean-expressions': [
      'warn',
      { allowString: false, allowNumber: false, allowNullableObject: false }
    ],
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        allowBoolean: true,
        allowAny: false
      }
    ],
    '@typescript-eslint/method-signature-style': 'error',
    'functional/no-let': [
      'error',
      {
        allowInForLoopInit: true,
        allowInFunctions: false,
        ignoreIdentifierPattern: ['^mut_', '^_mut_', '^#mut_']
      }
    ],
    'functional/immutable-data': [
      'error',
      {
        ignoreClasses: true,
        ignoreImmediateMutation: true,
        ignoreIdentifierPattern: ['^draft', '^mut_', '^_mut_', '^#mut_', 'window.location.href']
      }
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'func-style': 'error',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'error',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false
      }
    ]
  }
}
