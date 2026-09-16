import { test, expect } from '@playwright/test';

test('open company local website', async ({ page }) => {
  // 1. Open your local IP website
  await page.goto('http://192.168.20.4');

  // 2. Pause the test for 5 seconds so you can look at the page
  await page.waitForTimeout(5000);
});

