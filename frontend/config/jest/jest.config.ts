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
		'@app/(.*)': '<rootDir>/src/app/$1',
		'@pages/(.*)': '<rootDir>/src/pages/$1',
		'@features/(.*)': '<rootDir>/src/features/$1',
		'@widgets/(.*)': '<rootDir>/src/widgets/$1',
		'@entities/(.*)': '<rootDir>/src/entities/$1',
		'@processes/(.*)': '<rootDir>/src/processes/$1',
		'@shared/(.*)': '<rootDir>/src/shared/$1',
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
