import { Page, expect } from '@playwright/test';
export class NavigationPage {
  constructor(readonly page: Page) {}
  async goto() { await this.page.goto('/'); }
  async goToCatalog() { await this.page.getByRole('link', { name: 'Catalog' }).click(); }
  async expectCatalogTitle() { await expect(this.page).toHaveURL(/collections/); }
}

