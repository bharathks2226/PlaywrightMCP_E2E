import { test } from '@playwright/test';
import { FormPage } from '../pages/FormPage';

test('Form validation', async ({ page }) => {
  const form = new FormPage(page);
  await form.goto();
  await form.verifyContent();
  await form.validateFormDoesNotExist();
});
