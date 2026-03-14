import { Page } from '@playwright/test';
export class ScreenshotPage {
  constructor(readonly page: Page) {}
  async goto() { await this.page.goto('/'); }
  async captureHomeScreenshot(path: string) { await this.page.screenshot({ path, fullPage: true }); }
}

