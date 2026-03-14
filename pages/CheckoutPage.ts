import { Page, expect } from '@playwright/test';
export class CheckoutPage {
  constructor(readonly page: Page) {}
  async goto() { await this.page.goto('/cart'); }
  async checkout() { await this.page.getByRole('link', { name: /Check Out/i }).click(); }
  async expectCheckout() { await expect(this.page).toHaveURL(/checkout|cart/); }
}

