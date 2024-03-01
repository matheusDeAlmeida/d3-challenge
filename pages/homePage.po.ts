import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchCollectionInput: Locator;
    readonly defaultCollectionComponent: Locator;

    readonly listViewMode: Locator;
    readonly largeIconViewMode: Locator;
    readonly smallIconViewMode: Locator;

    readonly addItemToCartIcon: Locator;
    readonly buyButton: Locator;
    readonly purchaseDialogSolana: Locator;
    readonly phantonWalletOption: Locator;
    readonly offersTab: Locator;
    readonly enableMyOffer: Locator;
    readonly shareStatsButton: Locator; 
    readonly shareInTwitterButton: Locator;
    readonly filterButton: Locator;
    readonly filterTab: Locator; 
    readonly buyNowFilterOption: Locator;
    readonly magicEdenFilterOption: Locator; 
    readonly cartIcon: Locator; 
    readonly removeCartItem: Locator;
    readonly cartItem: Locator;
     

    constructor(page: Page) {
        this.searchCollectionInput = page.getByPlaceholder('Search all of Magic Eden');

        this.listViewMode = page.locator('button:nth-child(3)').first();
        this.largeIconViewMode = page.locator('.tw-hidden > .tw-flex > button:nth-child(2)');
        this.smallIconViewMode = page.locator('button:nth-child(3)').first();

        this.addItemToCartIcon = page.locator('td').first();
        this.buyButton = page.locator('[data-test-id="cart-buy"]');
        this.purchaseDialogSolana = page.locator('[data-test-id="wallet-modal-tab-solana"]');
        this.phantonWalletOption = page.locator('[data-test-id="Phantom"]');
        this.offersTab = page.getByRole('button', { name: 'Offers', exact: true });
        this.enableMyOffer = page.locator('label');
        this.shareStatsButton = page.getByRole('button', { name: 'Share Stats' });
        this.shareInTwitterButton = page.getByRole('button', { name: 'X/Twitter' });
        this.filterButton = page.locator('[data-test-id="traits-filter"]');
        this.filterTab = page.getByRole('button', { name: 'Filters' });
        this.buyNowFilterOption = page.getByText('Buy now');
        this.magicEdenFilterOption = page.getByText('Magic Eden', { exact: true });
        this.defaultCollectionComponent = page.locator('[data-test-id="virtuoso-top-item-list"]');
        this.cartIcon = page.locator('[data-test-id="cart-icon"]');
        this.removeCartItem = page.locator('[data-test-id="cart-container"]').getByRole('img').nth(1);
        this.cartItem = page.locator('[data-test-id="cart-container"]');
    }

    tableContent(content: string, page: Page){
        return page.getByRole('cell', { name: content, exact: true });
    }
}
