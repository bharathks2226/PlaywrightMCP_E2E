import { Page, expect } from '@playwright/test';
export class CartPage {
  constructor(readonly page: Page) {}
  async goto() { await this.page.goto('/'); }
  async addFirstProductToCart() {
    await this.page.getByRole('link', { name: /Grey jacket/ }).first().click();
    const addToCart = this.page.locator('button', { hasText: /Add to cart/i });
    if (await addToCart.count() > 0) { await addToCart.first().click(); }
  }
  async openCart() { await this.page.goto('/cart'); }
  async expectCartCount() { await expect(this.page.getByText('1 item')).toBeVisible({ timeout: 12000 }); }
}

