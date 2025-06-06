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

   // --- Candidate should add their tests below this line based on their test plan ---
    // --- These tests should focus on the User Story: "Display Donation Total on Donate Button" ---
 

});