import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// This tells Playwright exactly where to look for your English files and TS code files
const testDir = defineBddConfig({
  features: 'tests/features/*.feature',
  steps: 'tests/steps/*.ts',
});

export default defineConfig({
  testDir,
  timeout: 0,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome', // 💡 ADD THIS LINE to launch your standard, regular Google Chrome
      },
    },
  ],
});
