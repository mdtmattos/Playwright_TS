import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';

let browser: Browser;
let page: Page;
let context: BrowserContext;
const retryCount: Map<string, number> = new Map<string, number>();

BeforeAll(async () => {
  console.log('Launching Browser using Playwright and Chromium, performed once before all test scenarios.');
  browser = await chromium.launch({ slowMo: 200, headless: false });
});

AfterAll(async () => {
  console.log('Closing Browser after all test scenarios');
  await browser.close();
});

Before(async () => {
  console.log('Creating a new browser context and page before each individual test scenario');
  context = await browser.newContext();
  page = await context.newPage();
  await context.clearCookies();
});

After(async ({ pickle, result }) => {
  console.log('Closing page and context after each scenario');
  
  if (result?.status === Status.FAILED && retryCount.get(pickle.id) === 1 && page) {
    await page.screenshot({
      path: `./test-results/screenshots/${pickle.name}-retry.png`,
      type: 'png',
    });
  }

  try {
    if (page && !page.isClosed()) {
      await page.close();
    }

    if (context && context.pages().length === 0) {
      await context.close();
    }
  } catch (error) {
    console.error('Error closing page or context:', error);
  }

  if (result?.status === Status.FAILED) {
    retryCount.set(pickle.id, (retryCount.get(pickle.id) || 0) + 1);
  } else {
    retryCount.set(pickle.id, 0);
  }
});

export { page };
