// tests/donationForm.spec.ts
import { test, expect, Page } from '@playwright/test';
import {
    FORM_URL,
    selectDonationAmount,
    fillOtherAmount,
    fillContactInformation,
    fillBillingAddress,
    selectPaymentType,
    toggleCoverFee,
    getDonateButtonText,
    enterPaymentButton, 
    firstNameInput // Import more locators/actions as needed from formActions.ts
} from './helpers/formActions';

const testContactInfo = {
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser@example.com',
    phone: '5551234567'
};

const testBillingAddress = {
    country: 'United States',
    street: '123 Main St',
    city: 'Anytown',
    state: 'Indiana',
    zip: '12345'
};


test.beforeEach(async ({ page }) => {
    await page.goto(FORM_URL);
    // Wait for a known element to ensure the page is loaded, e.g., the first name input
    await expect(page.locator(firstNameInput)).toBeVisible({timeout: 10000});
});

test.describe('Bloomerang Donation Form - Basic Functionality', () => {
    test('should load the donation form successfully', async ({ page }) => {
        await expect(page.locator('#heading1')).toBeVisible();
    });


    test('Donate button should display "Donate $25.00" initially', async ({ page }) => {
        const donateButton = page.locator(enterPaymentButton);
        await expect(donateButton).toHaveText('Donate $25.00', {timeout: 2000});
    });

    test('Verify $50 donation with Savings shows correct button text', async ({ page }) => {
  

        await page.locator('input[name="radio-set-1"][value="50"]').click(); // Select $50

        await page.locator('input[data-testid="contact.firstName"]').fill('Poorly');
        await page.locator('input[data-testid="contact.lastName"]').fill('Written');
        await page.locator('input[data-testid="contact.email"]').fill('poor@example.com');
        await page.selectOption('select[data-testid="billingAddress.country"]', { label: 'United States' });
        await page.locator('input[data-testid="billingAddress.street"]').fill('1 Refactor Lane');
        await page.locator('input[data-testid="billingAddress.city"]').fill('Testville');
        await page.selectOption('select[data-testid="billingAddress.state"]', { label: 'Indiana' });
        await page.locator('input[data-testid="billingAddress.postalCode"]').fill('54321');

        await page.locator('input[name="radio-set-3"][value="bankAccount"][data-testid="transaction.payment.type.bankAccount.savings"]').click(); // Select Savings

        const donateButton = page.locator('button[data-testid="button.submit.text"]');
        await expect(donateButton).toHaveText('Donate $50.00');
    });

    // --- Candidate should add their tests below this line based on their test plan ---
    // --- These tests should focus on the User Story: "Display Donation Total on Donate Button" ---

});