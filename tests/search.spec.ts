import { test } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test('Search functionality', async ({ page }) => {
  const search = new SearchPage(page);
  await search.goto();
  await search.searchTerm('jacket');
  await search.expectResults();
});
