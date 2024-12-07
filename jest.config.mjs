export default {
  // Look for test files only in the jest/ directory
  roots: ["<rootDir>/src/test/jest/"],

  // Match files ending with .test.js or .spec.js
  testMatch: ["**/*.test.js"],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Transform ES modules if needed
  transform: {
    "^.+\\.js$": "babel-jest"
  },

  // Collect coverage from files in src/
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/test/**" // Exclude test files from coverage
  ],

  // Coverage output directory
  coverageDirectory: "coverage",

  // Use Node environment for Jest
  testEnvironment: "node",

  // Ensure Jest doesn't try to run Mocha's test files
  modulePathIgnorePatterns: ["<rootDir>/src/test/mocha/"]
};