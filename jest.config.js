const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "jest-preset-angular",
  roots: ["<rootDir>/src/"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
    },
  },
  setupFilesAfterEnv: ["<rootDir>/src/test-jest.ts"],
  collectCoverage: true,
  coverageReporters: ["html"],
  coverageDirectory: "coverage/my-app",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: "<rootDir>/",
  }),
};
