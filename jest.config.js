export default {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
      },
  };
  