module.exports = {
  testMatch: ["**/?(*.)test.js?(x)"],
  setupFiles: ["./jest.setup.js"],
  silent: false,
  // setupFilesAfterEnv: ["jest-extended"],
  testEnvironment: "jsdom"
};
