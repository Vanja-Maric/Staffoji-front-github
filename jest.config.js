// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  setupFiles: [
    "jest-canvas-mock"
  ],
  moduleFileExtensions: [
    "js",
    "jsx"
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/test/mocks/styleMock.js",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/mocks/fileMock.js"
  }
};
