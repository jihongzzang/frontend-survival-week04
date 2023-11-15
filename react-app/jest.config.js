module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.polyfills.js'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/src/setupTests.ts',
  ],

  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            jsx: true,
            decorators: true,
          },

          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
};
