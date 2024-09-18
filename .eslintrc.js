module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      files: ['**/examples/*/**/*.{ts,tsx}'], // examples 디렉토리의 ts, tsx 파일들에 대해
      extends: [
        'plugin:react/recommended', // React 관련 규칙 추가
      ],
      plugins: ['react-hooks'],
      settings: {
        react: {
          version: 'detect', // React 버전 자동 감지
        },
      },
    },
  ],
};
