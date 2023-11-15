import { test, expect } from '@playwright/test';

test('hi', async ({ page }) => {
  console.log('hi');
  await page.goto('/');

  await expect(page.getByText('메가반점')).toBeVisible();

  const searchInput = page.getByLabel('input-검색');

  await searchInput.fill('데브');

  await expect(page.getByText('데브부엌')).toBeVisible();

  await page.click('button[value="일식"]');

  await page.click('button[name="#모듬초밥"]');

  await expect(page.getByText('모듬초밥(14,000원)')).toBeVisible();

  await page.click('button[class="cta-button"]');

  await expect(page.getByText('선택된 메뉴가 없습니다.')).toBeVisible();
});
