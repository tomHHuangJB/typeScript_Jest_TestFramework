import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/test.setup.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      lines: 80
    }
  }
};

export default config;
