// tests/donationForm.spec.ts
import { test, expect, Page } from '@playwright/test';
import { DonationPage } from './pom/donationPage';
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

    // The Donate button shows Enter Payment initially if this is incorrect with the design docs make a bug ticket
    test('Donate button should display "Enter Payment" initially', async ({ page }) => {
        const donateButton = page.locator(enterPaymentButton);
        await expect(donateButton).toHaveText('Enter Payment', {timeout: 2000});
    });

   // --- Candidate should add their tests below this line based on their test plan ---
    // --- These tests should focus on the User Story: "Display Donation Total on Donate Button" ---
    
    test("Display Donation Total on Donate Button for Checking Account @0001", async ({ page }) => {
        const donationPage = new DonationPage(page);

        await donationPage.checkingRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $0.00");

        await donationPage.levelOneRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $10.00");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxChecked();
        await donationPage.validatePaymentButtonText("Donate $10.30");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxNotChecked();
        await donationPage.validatePaymentButtonText("Donate $10.00");

        await donationPage.levelTwoRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $25.00");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxChecked();
        await donationPage.validatePaymentButtonText("Donate $25.45");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxNotChecked();
        await donationPage.validatePaymentButtonText("Donate $25.00");

        await donationPage.levelThreeRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $50.00");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxChecked();
        await donationPage.validatePaymentButtonText("Donate $50.71");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxNotChecked();
        await donationPage.validatePaymentButtonText("Donate $50.00");

        await donationPage.levelFourRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $100.00");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxChecked();
        await donationPage.validatePaymentButtonText("Donate $101.21");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxNotChecked();
        await donationPage.validatePaymentButtonText("Donate $100.00");

        await donationPage.otherRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $0.00");

        await donationPage.enterOtherAmount("200");
        // Have to click outside amount input field for it to apply
        await donationPage.header.click();
        await donationPage.validatePaymentButtonText("Donate $200.00");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxChecked();
        await donationPage.validatePaymentButtonText("Donate $202.22");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxNotChecked();
        await donationPage.validatePaymentButtonText("Donate $200.00");
    });

    test("Display Donation Total on Donate Button for Saving Account @0002", async ({ page }) => {
        const donationPage = new DonationPage(page);

        await donationPage.savingRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $0.00");

        await donationPage.levelOneRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $10.00");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxChecked();
        await donationPage.validatePaymentButtonText("Donate $10.30");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxNotChecked();
        await donationPage.validatePaymentButtonText("Donate $10.00");

        await donationPage.levelTwoRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $25.00");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxChecked();
        await donationPage.validatePaymentButtonText("Donate $25.45");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxNotChecked();
        await donationPage.validatePaymentButtonText("Donate $25.00");

        await donationPage.levelThreeRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $50.00");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxChecked();
        await donationPage.validatePaymentButtonText("Donate $50.71");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxNotChecked();
        await donationPage.validatePaymentButtonText("Donate $50.00");

        await donationPage.levelFourRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $100.00");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxChecked();
        await donationPage.validatePaymentButtonText("Donate $101.21");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxNotChecked();
        await donationPage.validatePaymentButtonText("Donate $100.00");

        await donationPage.otherRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $0.00");

        await donationPage.enterOtherAmount("200");
        // Have to click outside amount input field for it to apply
        await donationPage.header.click();
        await donationPage.validatePaymentButtonText("Donate $200.00");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxChecked();
        await donationPage.validatePaymentButtonText("Donate $202.22");
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxNotChecked();
        await donationPage.validatePaymentButtonText("Donate $200.00");
    });

    // I marked this test not automatable, but decided to show how I would begin to automated it if there was no recaptcha 
    // to show playwright/typescript ability, in a real situation I would not included this to avoid bloat in the test code base
    test.skip("Display Donation Total on Pop Up Window for Credit Card @0003", async ({ page }) => {
        const donationPage = new DonationPage(page);

        await donationPage.creditCardRadioButton.click();
        await fillContactInformation(page, testContactInfo);
        await fillBillingAddress(page, testBillingAddress);

        await donationPage.levelOneRadioButton.click();
        await donationPage.enterPaymentButton.click();
        await donationPage.spreedlyModalVisible();
        await donationPage.validateSpreedlyModalAmount("$10.00");
        await donationPage.spreedlyCloseButton.click();
        await donationPage.spreedlyModalHidden();
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxChecked();
        await donationPage.validateSpreedlyModalAmount("$10.57");
        await donationPage.spreedlyCloseButton.click();
        await donationPage.spreedlyModalHidden();
        await donationPage.impactCheckbox.click();
        await donationPage.validateImpactCheckboxNotChecked();
        await donationPage.validateSpreedlyModalAmount("$10.00");
    });

    // This test currently fails, I would make a bug ticket for the other input allowing alphabetical, negative, numbers
    // with multiple decimal places and numbers with more than two decimal places
    // I marked this test as a skip so it wouldn't flag other PRs that are running the CI, will activate once bug ticket is resolved
    // Bug Ticket 0001
    test.skip("Display Donation Total on Donate Button for Saving Account @0004", async ({ page }) => {
        const donationPage = new DonationPage(page);

        await donationPage.savingRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $0.00");

        await donationPage.otherRadioButton.click();
        await donationPage.validatePaymentButtonText("Donate $0.00");

        await donationPage.enterOtherAmount("200");
        // Have to click outside amount input field for it to apply
        await donationPage.header.click();
        await donationPage.validatePaymentButtonText("Donate $200.00");

        await donationPage.enterOtherAmount("Hello");
        // Have to click outside amount input field for it to apply
        await donationPage.header.click();
        await donationPage.validatePaymentButtonText("Donate $0.00");

        await donationPage.enterOtherAmount("-50");
        // Have to click outside amount input field for it to apply
        await donationPage.header.click();
        await donationPage.validatePaymentButtonText("Donate $0.00");

        await donationPage.enterOtherAmount("12.34.56");
        // Have to click outside amount input field for it to apply
        await donationPage.header.click();
        await donationPage.validatePaymentButtonText("Donate $0.00");

        await donationPage.enterOtherAmount("12.3456");
        // Have to click outside amount input field for it to apply
        await donationPage.header.click();
        // Need designer/developer insight if this should be $0.00 or rounded up or down
        await donationPage.validatePaymentButtonText("Donate $12.34");
    });
});