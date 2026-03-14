import { Page, expect } from '@playwright/test';
export class ResponsivePage {
  constructor(readonly page: Page) {}
  async goto() { await this.page.goto('/'); }
  async setMobile() { await this.page.setViewportSize({ width: 375, height: 812 }); }
  async setDesktop() { await this.page.setViewportSize({ width: 1280, height: 800 }); }
  async expectResponsive() { await expect(this.page.locator('header').first()).toBeVisible(); }
}

