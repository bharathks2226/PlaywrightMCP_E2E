import { Page, expect } from '@playwright/test';
export class HomePage {
  constructor(readonly page: Page) {}
  async goto() { await this.page.goto('/'); }
  async expectHero() { await expect(this.page.getByRole('heading', { name: 'Sauce Demo' })).toBeVisible(); }
  async openFirstProduct() { await this.page.getByRole('link', { name: /Grey jacket/ }).first().click(); }
}

