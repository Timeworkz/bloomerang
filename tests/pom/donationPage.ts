import { expect, Locator, Page } from "@playwright/test";

export class DonationPage {
    page: Page;
    // Buttons
    enterPaymentButton: Locator;
    spreedlyCloseButton: Locator;
    // Checkboxes
    impactCheckbox: Locator;
    // Radio Buttons
    checkingRadioButton: Locator;
    savingRadioButton: Locator;
    creditCardRadioButton: Locator;
    levelOneRadioButton: Locator;
    levelTwoRadioButton: Locator;
    levelThreeRadioButton: Locator;
    levelFourRadioButton: Locator;
    otherRadioButton: Locator;
    // Inputs
    otherInputField: Locator;
    // Other
    header: Locator;
    spreedlyModalName: Locator;
    spreedlyModalAmount: Locator;

    constructor(page: Page) {
        this.page = page;
        // Buttons
        this.enterPaymentButton = this.page.locator('#express-submit');
        this.spreedlyCloseButton = this.page.locator("#spreedly-close-button");
        // Checkboxes
        this.impactCheckbox = this.page.locator("#true-impact");
        // Radio Buttons
        this.checkingRadioButton = this.page.locator('#Checking');
        this.savingRadioButton = this.page.locator('#Savings');
        this.creditCardRadioButton = this.page.locator("#CreditCard")
        this.levelOneRadioButton = this.page.locator("id=33800");
        this.levelTwoRadioButton = this.page.locator("id=33801");
        this.levelThreeRadioButton = this.page.locator("id=33802");
        this.levelFourRadioButton = this.page.locator("id=33803");
        this.otherRadioButton = this.page.locator("#other-option");
        // Inputs
        this.otherInputField = this.page.locator("#other-amount");
        // Other
        this.header = this.page.getByText("Donate Now!", { exact: true });
        this.spreedlyModalName = this.page.locator("#spreedly-company-name");
        this.spreedlyModalAmount = this.page.locator("#spreedly-amount");
    }

    async validatePaymentButtonText(text: string) {
        await expect(this.enterPaymentButton).toHaveText(text, {timeout: 2000});
    }

    async validateSpreedlyModalAmount(text: string) {
        await expect(this.spreedlyModalAmount).toHaveText(text, {timeout: 2000})
    }

    async enterOtherAmount(amount: string) {
        await this.otherInputField.fill(amount);
        await expect(this.otherInputField).toHaveValue(amount, {timeout: 2000});
    }

    async spreedlyModalVisible() {
        await expect(this.spreedlyModalName).toBeVisible();
    }

    async spreedlyModalHidden() {
        await expect(this.spreedlyModalName).toBeHidden();
    }

    async validateImpactCheckboxChecked() {
        await expect(this.impactCheckbox).toBeChecked();
    }

    async validateImpactCheckboxNotChecked() {
        await expect(this.impactCheckbox).not.toBeChecked();
    }
}