Part 2: Test Automation (Approx. 3 hours)

Objective:
  This technical task assesses your ability to work with an existing Playwright TypeScript automation framework, debug and refactor code, and implement new automated tests based on the test plan you created in Part 1.

Setup:
  Clone the Repository:
    Clone the assessment repository from the following GitHub URL:
      https://github.com/domalbergo/bloomerang-qe-assessment
  Navigate to the cloned project directory in your terminal.
Install Dependencies:
  Run npm install to install all necessary dependencies.
Run Tests:
  View HTML reports (after tests run) with npm run report.
  
Project Structure Overview:
  tests/donationForm.spec.ts: This is the main test file where you will be working.
  tests/helpers/formActions.ts: This file contains helper functions and locators for interacting with the donation form. You are encouraged to use and extend these.
  playwright.config.ts, package.json, tsconfig.json: Standard project configuration files.

Your Automation Tasks:
You will find three existing tests within tests/donationForm.spec.ts:

  Bloomerang Donation Form - Basic Functionality: This is a basic test to ensure the environment is working. It should pass.
  Donate button should display "Donate $25.00" initially:
    This test is designed to fail in its current state.
    Your Task: Investigate why this test fails & Correct
  Verify $50 donation with Savings shows correct button text:
    This test should pass but is not written according to best practices there seems to be an issue with its locators.
    Your Task: Refactor this test to improve its readability, maintainability, and to make use of the helper functions.
  Implement New Automated Tests (Based on YOUR Test Plan from Part 1):
    Refer to the test plan you created in Part 1 for the User Story: "Donation Forms: Display Donation Total on Donate Button."
    Implement these selected test cases as new automated tests in tests/donationForm.spec.ts

Submitting Your Automation Work:
Please share a link to a forked repository for your automation work.
