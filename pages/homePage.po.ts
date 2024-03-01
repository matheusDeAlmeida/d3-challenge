import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchCollectionInput: Locator;
    readonly listViewMode: Locator;
    readonly addItemToCartIcon: Locator;
    readonly buyButton: Locator;
    readonly purchaseDialogSolana: Locator;
    readonly phantonWalletOption: Locator;
    readonly offersTab: Locator;
    readonly enableMyOffer: Locator;
     

    constructor(page: Page) {
        this.searchCollectionInput = page.getByPlaceholder('Search all of Magic Eden');
        this.listViewMode = page.locator('button:nth-child(3)').first();
        this.addItemToCartIcon = page.locator('td').first();
        this.buyButton = page.locator('[data-test-id="cart-buy"]');
        this.purchaseDialogSolana = page.locator('[data-test-id="wallet-modal-tab-solana"]');
        this.phantonWalletOption = page.locator('[data-test-id="Phantom"]');
        this.offersTab = page.getByRole('button', { name: 'Offers', exact: true });
        this.enableMyOffer = page.locator('label');
    }

    tableContent(content: string, page: Page){
        return page.getByRole('cell', { name: content, exact: true });
    }

}