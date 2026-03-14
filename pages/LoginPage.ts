import { Page, expect } from '@playwright/test';
export class LoginPage {
  constructor(readonly page: Page) {}
  async goto() { await this.page.goto('/account/login'); }
  async login(email: string, password: string) {
    await this.page.getByLabel('Email').fill(email);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: /Sign in|Login/i }).click();
  }
  async expectLoginForm() { await expect(this.page.getByLabel('Email')).toBeVisible(); }
}

