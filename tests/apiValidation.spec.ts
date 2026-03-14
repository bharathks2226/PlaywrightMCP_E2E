import { test } from '@playwright/test';
import { ApiPage } from '../pages/ApiPage';

test('API validation', async ({ page }) => {
  const api = new ApiPage(page);
  await api.expectApiSuccess();
});
