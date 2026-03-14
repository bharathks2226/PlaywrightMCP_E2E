import { Page, expect } from '@playwright/test';
export class ApiPage {
  constructor(readonly page: Page) {}
  async fetchProducts() { return this.page.request.get('/collections/frontpage/products.json'); }
  async expectApiSuccess() {
    const response = await this.fetchProducts();
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.products).toBeDefined();
  }
}

