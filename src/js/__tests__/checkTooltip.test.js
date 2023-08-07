import puppeteer from 'puppeteer';

describe('check button with toggle tooltip', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: false,
    });
    page = await browser.newPage();
  });

  test('check the rendering of the start page', async () => {
    await page.goto('http://localhost:8080');
    await page.waitForSelector('.some__container');
  });

  test('check tooltip toggle button', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:8080');
    await page.waitForSelector('.some__container');

    const container = await page.$('.some__container');
    const button = await container.$('.some__button');

    await button.click();
    await page.waitForSelector('.some__tooltip-active');
    await button.click();
    await page.waitForSelector('.some__tooltip-active', { hidden: true });
  });

  afterEach(async () => {
    await page.close();
    await browser.close();
  });
});
