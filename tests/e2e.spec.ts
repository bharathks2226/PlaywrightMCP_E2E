import { test, expect } from '@playwright/test';
import { E2EPage } from '../pages/E2EPage';

test('End-to-End flow: Complete user journey', async ({ page }) => {
  const e2e = new E2EPage(page);
  await e2e.goto();
  await e2e.addFirstItemToCart();
  await e2e.goToCart();
  await e2e.checkout();
  await expect(page).toHaveURL(/checkout|cart/);
});
