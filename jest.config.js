module.exports = {
    bail: true,
    clearMocks: true,
    testTimeout: 30000,
    moduleDirectories: ['src', 'node_modules'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^.+\\.(css|scss)$': '<rootDir>/config/CSSStub.js'
    },
    setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime', 'core-js'],
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.[jt]s?(x)'],
    testResultsProcessor: 'jest-sonar-reporter',
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
        '^.+\\.(svg|png|jpg)$': '<rootDir>/config/svgTransform.js'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/']
};
