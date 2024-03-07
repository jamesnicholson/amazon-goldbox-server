import puppeteer from 'puppeteer';
import { upsertProduct } from '../models/Product';

export async function goldbox() {
  console.log('Goldbox');
  const selector = '[data-testid="grid-deals-container"]';
  const selectorImg = '[data-testid="grid-deals-container"]';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com/gp/goldbox/');

  const deals = await page.waitForSelector('div.a-image-container img');
  const imagefiles = await page.$$eval('.a-link-normal', (el) =>
    el
      .filter((xx) => xx.querySelector('.a-image-container img') !== null)
      .map((a) => ({
        link: a.getAttribute('href'),
        img: a.querySelector('.a-image-container img').getAttribute('src'),
      }))
  );
  console.log(imagefiles);
  await browser.close();
}
