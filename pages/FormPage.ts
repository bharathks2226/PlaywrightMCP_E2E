import { Page, expect } from '@playwright/test';
export class FormPage {
  constructor(readonly page: Page) {}
  async goto() { await this.page.goto('/pages/about-us'); }
  async validateFormDoesNotExist() { await expect(this.page.locator('form')).not.toBeVisible(); }
  async verifyContent() { await expect(this.page.locator('p:has-text("Sauce allows you")').first()).toBeVisible(); }
}

