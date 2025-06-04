// tests/helpers/formActions.ts
import { Page, expect } from '@playwright/test';

export const FORM_URL = 'https://bloomerang.github.io/qa-automation-forms/crm/prodbloomautomation01/donation/31746.html';

// --- Locators ---
//Having some issues with these locators, figured the first name out. Will need to go back and update. 
// Donation Amounts
export const donationAmountRadio = (amount: string) => `input[name="radio-set-1"][value="${amount}"]`;
export const otherAmountInput = 'input[data-testid="transaction.donation.amount.other"]';

// Contact Info
export const firstNameInput = '#first-name';
export const lastNameInput = 'input[data-testid="contact.lastName"]';
export const emailInput = 'input[data-testid="contact.email"]';
export const phoneInput = 'input[data-testid="contact.phoneNumber"]';

// Billing Address
export const countrySelect = 'select[data-testid="billingAddress.country"]';
export const addressInput = 'input[data-testid="billingAddress.street"]';
export const cityInput = 'input[data-testid="billingAddress.city"]';
export const stateSelect = 'select[data-testid="billingAddress.state"]';
export const zipInput = 'input[data-testid="billingAddress.postalCode"]';

// Payment Information
export const creditCardRadio = 'input[name="radio-set-3"][value="creditCard"]';
export const savingsRadio = 'input[name="radio-set-3"][value="bankAccount"][data-testid="transaction.payment.type.bankAccount.savings"]';
export const checkingRadio = 'input[name="radio-set-3"][value="bankAccount"][data-testid="transaction.payment.type.bankAccount.checking"]';
export const routingNumberInput = 'input[data-testid="transaction.payment.bankAccount.routingNumber"]';
export const accountNumberInput = 'input[data-testid="transaction.payment.bankAccount.accountNumber"]';

// Increase My Impact (Fees)
export const coverFeeCheckbox = 'input[data-testid="transaction.donation.coverFee"]';

// Donate/Submit Buttons
export const enterPaymentButton = '#express-submit';
export const donateButtonInModal = 'button[data-testid="button.submit"]'; // Specific to CC modal


// --- Helper Functions ---
export async function selectDonationAmount(page: Page, amount: string) {
    if (amount.toLowerCase() === 'other') {
        // For simplicity, we'll assume if 'other', the specific value is handled elsewhere or in the test
        // This could be expanded to click the "Other" radio first if needed
        await page.locator(otherAmountInput).click(); // Ensure the radio is selected
    } else {
        await page.locator(donationAmountRadio(amount)).click();
    }
}

export async function fillOtherAmount(page: Page, otherValue: string) {
    await page.locator(otherAmountInput).fill(otherValue);
}

export async function fillContactInformation(page: Page, contact: {firstName: string, lastName: string, email: string, phone?: string}) {
    await page.locator(firstNameInput).fill(contact.firstName);
    await page.locator(lastNameInput).fill(contact.lastName);
    await page.locator(emailInput).fill(contact.email);
    if (contact.phone) {
        await page.locator(phoneInput).fill(contact.phone);
    }
}

export async function fillBillingAddress(page: Page, address: {country: string, street: string, city: string, state: string, zip: string}) {
    await page.selectOption(countrySelect, { label: address.country });
    await page.locator(addressInput).fill(address.street);
    await page.locator(cityInput).fill(address.city);
    await page.selectOption(stateSelect, { label: address.state }); // Assuming state is selected by label
    await page.locator(zipInput).fill(address.zip);
}

export async function selectPaymentType(page: Page, paymentType: 'Credit Card' | 'Savings' | 'Checking') {
    switch (paymentType) {
        case 'Credit Card':
            await page.locator(creditCardRadio).click();
            break;
        case 'Savings':
            await page.locator(savingsRadio).click();
            break;
        case 'Checking':
            await page.locator(checkingRadio).click();
            break;
    }
}

export async function toggleCoverFee(page: Page, cover: boolean) {
    const checkbox = page.locator(coverFeeCheckbox);
    if (cover && !(await checkbox.isChecked())) {
        await checkbox.click();
    } else if (!cover && (await checkbox.isChecked())) {
        await checkbox.click();
    }
}

export async function getDonateButtonText(page: Page): Promise<string | null> {
    return page.locator(enterPaymentButton).textContent();
}