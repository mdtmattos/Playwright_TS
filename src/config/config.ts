import { PlaywrightTestConfig } from '@playwright/test';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

interface TestConfig extends PlaywrightTestConfig {
  baseUrl: string;
  standarUserName: string;
  lockedOutUserName: string;
  password: string;
}

const defaultConfig: PlaywrightTestConfig = {
  timeout: 300000,
  expect: {
    timeout: 300000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    actionTimeout: 0,
    trace: 'on',
  },
};

const environments: Record<string, TestConfig> = {
  dev: {
    baseUrl: process.env.BASE_URL || '',
    standarUserName: process.env.STANDARD_USER || '',
    lockedOutUserName: process.env.LOCKED_OUT_USER || '',
    password: process.env.PASSWORD || '',

  },
  prod: {
    baseUrl: process.env.BASE_URL || '',
    standarUserName: process.env.STANDARD_USER || '',
    lockedOutUserName: process.env.LOCKED_OUT_USER || '',
    password: process.env.PASSWORD || '',
  },
};

// Get the environment type from command line. If none, set it to 'dev'
const environment = process.env.TEST_ENV || 'dev';

// Configure the test environment based on the environment variable
const config: TestConfig = {
  ...defaultConfig,
  ...(environments[environment] || {}),
};

export default config;
