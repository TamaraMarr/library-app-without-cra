module.exports = {
    verbose: true,
    testPathIgnorePatterns: ['<rootDir>/node_modules'],
    roots: ['<rootDir>/src/'],
    setupTestFrameworkScriptFile: '<rootDir>/enzyme.config.js',
    moduleNameMapper: {
        '^App(.*)$': '<rootDir>/src/app/$1',
        '^Components(.*)$': '<rootDir>/src/app/components/$1',
        '^Pages(.*)$': '<rootDir>/src/app/pages/$1',
        '^Routes(.*)$': '<rootDir>/src/routes/$1',
        '^Reducers(.*)$': '<rootDir>/src/reducers/$1',
        '^Wrappers(.*)$': '<rootDir>/src/wrappers/$1',
        '^Services(.*)$': '<rootDir>/src/services/$1',
        '^Common(.*)$': '<rootDir>/src/app/common/$1',
        '^Shared(.*)$': '<rootDir>/src/app/shared/$1'
    }
};