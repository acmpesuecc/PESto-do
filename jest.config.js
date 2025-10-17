// jest.config.js
module.exports = {
  testEnvironment: "jsdom", // lets Jest simulate a browser
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // so Jest understands JSX
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx}", 
    "!src/index.js", 
    "!src/serviceWorker.js"
  ]
};
