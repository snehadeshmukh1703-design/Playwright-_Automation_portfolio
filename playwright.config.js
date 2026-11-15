
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',

  timeout: 90 * 1000,

  expect: {
    timeout: 15 * 1000,
  },

  fullyParallel: false,
  workers: 1,
  retries: 0,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  outputDir: './test-results',

  use: {
    baseURL: 'https://the-internet.herokuapp.com',

    headless: false,

    actionTimeout: 20 * 1000,
    navigationTimeout: 45 * 1000,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    launchOptions: {
      slowMo: 150,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],channel:'msedge'},
    },
  ],
});