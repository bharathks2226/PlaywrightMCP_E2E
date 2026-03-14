import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login flow', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.expectLoginForm();
  await login.login('demo@example.com', 'password123');
  await expect(page).toHaveURL(/account/);
});
