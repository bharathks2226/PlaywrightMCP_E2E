import { test } from '@playwright/test';
import { ScreenshotPage } from '../pages/ScreenshotPage';

test('Screenshot capture', async ({ page }) => {
  const screenshot = new ScreenshotPage(page);
  await screenshot.goto();
  await screenshot.captureHomeScreenshot('screenshots/homepage.png');
});
