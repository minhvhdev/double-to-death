module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'import'],
  rules: {
    'no-unused-vars': ['warn'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', ['internal', 'sibling']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'next/**',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '@common/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@bj/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@locales/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: './**',
            group: 'sibling',
            position: 'after',
          },
        ],
        distinctGroup: false,
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-multiple-empty-lines': 'warn',
    'no-await-in-loop': 'warn',
    'import/no-anonymous-default-export': [
      'warn',
      {
        allowObject: true,
      },
    ],
  },
  overrides: [
    {
      files: ['scripts/**/*'],
      rules: {
        '@typescript-eslint/no-var-requires': ['off'],
        'no-undef': ['off'],
      },
    },
    {
      files: ['src/grc-templates/**'],
      rules: {
        '@typescript-eslint/ban-types': ['off'],
        '@typescript-eslint/no-unused-vars': ['off'],
      },
    },
    // {
    //   files: ['./**'],
    //   rules: {
    //     'import/no-anonymous-default-export': ['off'],
    //     'import/order': ['off'],
    //   },
    // },
  ],
};
