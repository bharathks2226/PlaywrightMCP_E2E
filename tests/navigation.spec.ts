import { test, expect } from '@playwright/test';
import { NavigationPage } from '../pages/NavigationPage';

test('Navigation menu', async ({ page }) => {
  const nav = new NavigationPage(page);
  await nav.goto();
  await nav.goToCatalog();
  await expect(page).toHaveURL(/collections/);
});
