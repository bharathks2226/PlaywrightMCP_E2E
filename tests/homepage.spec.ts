import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Homepage load validation', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.expectHero();
});
