import path from 'path'

export default {
  clearMocks: true,
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleDirectories: ['node_modules',
    '<rootDir>src/'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, './JestEmptyComponent.tsx'),
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  roots: ['<rootDir>src/'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest-setup.ts'],
  rootDir: '../../',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
}
