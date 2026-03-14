import { defineConfig, devices } from '@playwright/test';

const env = process.env.TEST_ENV || 'dev';
const baseUrls: Record<string, string> = {
  dev: 'https://sauce-demo.myshopify.com',
  qa: 'https://sauce-demo.myshopify.com',
  prod: 'https://sauce-demo.myshopify.com',
};

export default defineConfig({
  testDir: './tests',
  timeout: 90_000,
  expect: { timeout: 8000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
  use: {
    baseURL: baseUrls[env] || baseUrls.dev,
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 20_000,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
