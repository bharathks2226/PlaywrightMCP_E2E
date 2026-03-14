import { Page } from '@playwright/test';
export class TracePage {
  constructor(readonly page: Page) {}
  async goto() { await this.page.goto('/'); }
  async triggerTraceStep() { await this.page.getByRole('heading', { name: 'Sauce Demo' }).first().waitFor(); }
}

