// default jest config aimed at unit testing
module.exports = {
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/test/mocks.js']
};
