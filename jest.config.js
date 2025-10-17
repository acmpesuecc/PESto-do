module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleFileExtensions: ["js","jsx"],
  transform: { "^.+\\.(js|jsx)$": "babel-jest" },
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/index.js", "!src/serviceWorker.js"],
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy"
  }
};
