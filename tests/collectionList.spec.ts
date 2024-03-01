import { test, expect } from '@playwright/test';
import { HomePage } from '../pages';
import { baseUrl, collection1, offersTableColumns } from '../data';

test.beforeEach(async ({page}) => {
  await page.goto(baseUrl);
});

test('Search for a collection', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.searchCollectionInput.click();
  await homePage.searchCollectionInput.fill('doge');
  await page.getByRole('link', { name: 'Collections ' + collection1 }).click();
  await page.getByRole('heading', { name: collection1 }).click();
});

// todo: add validation to this test
test('Add an Item to the Cart', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.listViewMode.click();
  await homePage.addItemToCartIcon.click();
});

// todo: add validation to this test
test('Connect a Solana Wallet', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.listViewMode.click();
  await homePage.addItemToCartIcon.click();
  await homePage.buyButton.click();
  await homePage.purchaseDialogSolana.click();
  await homePage.phantonWalletOption.click();
});

test('Check The Offers Table', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.offersTab.click();

  // Check a random column header title 
  await homePage.tableContent(offersTableColumns[Math.floor(Math.random() * offersTableColumns.length)], page).hover();

  // Check if 'enable my offers' option is working 
  await homePage.enableMyOffer.click();
});
