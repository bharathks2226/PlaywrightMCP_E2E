import { test } from '@playwright/test';
import { TracePage } from '../pages/TracePage';

test('Trace generation', async ({ page }) => {
  const trace = new TracePage(page);
  await trace.goto();
  await trace.triggerTraceStep();
});
