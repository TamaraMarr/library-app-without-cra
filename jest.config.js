module.exports = {
    verbose: true,
    testPathIgnorePatterns: ['<rootDir>/node_modules'],
    roots: ['<rootDir>/src/'],
    setupTestFrameworkScriptFile: '<rootDir>/enzyme.config.js',
    moduleNameMapper: {
        '^App(.*)$': '<rootDir>/src/$1',
        '^Components(.*)$': '<rootDir>/src/components/$1',
        '^Config(.*)$': '<rootDir>/src/config/$1',
        '^Data(.*)$': '<rootDir>/src/data/$1',
        '^Pages(.*)$': '<rootDir>/src/pages/$1',
        '^Models(.*)$': '<rootDir>/src/data/models/$1',
        '^Reducers(.*)$': '<rootDir>/src/reducers/$1',
        '^Routes(.*)$': '<rootDir>/src/routes/$1',
        '^Services(.*)$': '<rootDir>/src/services/$1',
        '^Wrappers(.*)$': '<rootDir>/src/wrappers/$1',    }
};
