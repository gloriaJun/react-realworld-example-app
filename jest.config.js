module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  setupFiles: ['<rootDir>/tests/unit/testSetup.js'],
  moduleNameMapper: {
    '^@(.*)$': '<rootDir>/src/$1',
  },
};
