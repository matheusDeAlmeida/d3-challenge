import { expect, test } from '@playwright/test';
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

test('Add an Item to the Cart', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.listViewMode.click();
  await homePage.addItemToCartIcon.click();
  await homePage.cartIcon.click();
  await homePage.cartItem.hover();
});

// In this test, I just click to add a Phantom Solana wallet, to do
// a full test, I would need to add a wallet in the Chromium browser
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

test('Share Stats in Twitter', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.shareStatsButton.click();
  const page1Promise = page.waitForEvent('popup');
  await homePage.shareInTwitterButton.click();
  const popUpURL = (await page1Promise).url();
  expect(popUpURL).toContain('twitter.com');
});

test('Change Filters', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.filterButton.click();
  await homePage.filterTab.click();
  await homePage.buyNowFilterOption.click();
  await homePage.magicEdenFilterOption.click();
});

test('Change the View Modes for The Collection Items Table', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.listViewMode.click();
  await homePage.smallIconViewMode.click();
  await page.getByText('Instant Sell').hover();
  await homePage.largeIconViewMode.click();
  await page.getByText('Instant Sell').hover();
});

test('Search for a Collection that Doesn\'t exist', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.searchCollectionInput.click();
  await homePage.searchCollectionInput.fill('zcvacvzafd');
  await page.getByText('No collections found').click();
});

test('Check that The Default Collection List is Displayed when The Search All of Magic Eden is clicked', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.searchCollectionInput.click();
  await homePage.defaultCollectionComponent.hover();
});

test('Remove an Item from The Cart', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.listViewMode.click();
  await homePage.addItemToCartIcon.click();
  await homePage.cartIcon.click();
  await homePage.removeCartItem.click();
  await page.getByText('No items added to cart').click();
});
