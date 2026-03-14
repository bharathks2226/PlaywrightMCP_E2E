import { Page } from '@playwright/test';
export class CommonPage {
  constructor(readonly page: Page) {}
  async goto() { await this.page.goto('/'); }
  async goToLogin() { await this.page.getByRole('link', { name: 'Log In' }).click(); }
  async goToCart() { await this.page.getByRole('link', { name: /My Cart/ }).click(); }
  async search(term: string) { await this.page.getByRole('textbox', { name: 'Search' }).fill(term); await this.page.getByRole('button', { name: 'Submit' }).click(); }
}

