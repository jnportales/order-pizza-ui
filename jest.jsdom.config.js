// jest config for react component testing
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/test/api/',
    '<rootDir>/test/e2e/'
  ]
};