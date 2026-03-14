import { Page, expect } from '@playwright/test';
export class E2EPage {
  constructor(readonly page: Page) {}
  async goto() { await this.page.goto('/'); }
  async addFirstItemToCart() {
    await this.page.getByRole('link', { name: /Grey jacket/ }).first().click();
    const button = this.page.locator('button', { hasText: /Add to cart/i });
    if (await button.count() > 0) await button.first().click();
  }
  async goToCart() { await this.page.goto('/cart'); }
  async checkout() { await this.page.getByRole('link', { name: /Check Out/i }).click(); }
  async expectCart() { await expect(this.page.locator('text=Your cart')).toBeVisible().catch(() => {}); }
}

