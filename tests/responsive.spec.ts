import { test } from '@playwright/test';
import { ResponsivePage } from '../pages/ResponsivePage';

test('Responsive layout check', async ({ page }) => {
  const r = new ResponsivePage(page);
  await r.goto();
  await r.setMobile();
  await r.expectResponsive();
  await r.setDesktop();
  await r.expectResponsive();
});
