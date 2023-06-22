module.exports = {
  plugins: [
    'vuetify', 'prettier'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/airbnb",
    "@vue/prettier"
  ],
  rules: {
    'vuetify/no-deprecated-classes': 'error',
    'import/prefer-default-export': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': ['off'],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'ignorePackages',
      vue: 'never',
    }],
    'max-len': ['error', { code: 120 }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js'],
    }],
    // allow debugger during development
    // decides when to force newline for curly brackets objects
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 5, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 5, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],
    'no-underscore-dangle': ['off'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
