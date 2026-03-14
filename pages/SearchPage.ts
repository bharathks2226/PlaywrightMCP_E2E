import { Page, expect } from '@playwright/test';
export class SearchPage {
  constructor(readonly page: Page) {}
  async goto() { await this.page.goto('/'); }
  async searchTerm(term: string) {
    await this.page.getByRole('textbox', { name: 'Search' }).fill(term);
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
  async expectResults() { await expect(this.page.locator('text=No results found')).not.toBeVisible(); }
}

