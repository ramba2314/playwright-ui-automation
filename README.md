# Playwright UI Automation Framework
A UI automation framework using Playwright and TypeScript, and Node.js** to automate end-to-end web application scenarios. 
## Project Overview 
This project demonstrates practical UI automation using Playwright with a focus on :
- End-To-End Testing
- Positive and Negative Test Scenarios
- Page Object Model (POM)
- Resuable Locators and Methods
- UI Assertions
- Test Data Management
- Cross-Browser Testing
- HTML Test Reporting
- CI/CD Integration using GitHub Actions
## Tech Stack 
- Playwright
- TypeScript
- Node.js
- Git
- Github
- GitHub Actions

## Application Under Test 
The project automates an e-commerce-style web application and covers key user journeys such as login, product selection, cart and checkout
## Test Scenarios 

### Login
- Valid Login
- Invalid Login 
- Login Error Validation
### Product & Cart 
- Product Selection
- Add product to Cart
- Cart Validation
### Checkout
- Checkout Flow
- UI field validation
- End-to-end checkout validation
## Framework Design
The framework follow the ** Page Object Model (POM)** approach to improve:
- Maintainability
- Reusability
- Readability
- Separation of the test logic and page interaction logic

Reusable locators and methods are maintained within the page objects. 
## Cross Browser Testing 
The test suite is configured to execute against : 
- Chromium
- Firefox
- WebKit 
### Latest Execution
**6/6 tests passed**
The positive and negative login scenarios were executed successfully across all three browsers.
| Browser | Result |
|---|---|
| Chromium | ✅ Passed |
| Firefox | ✅ Passed |
| WebKit | ✅ Passed |
## Test Reporting
Playwright HTML reports are generated after test execution to help analyze:
- Passed tests
- Failed tests
- Execution details
- Test duration
## CI/CD Integration
GitHub Actions is configured to execute the Playwright test suite automatically.
### CI/CD Flow
```text
Code Push
  ↓
GitHub Repository
  ↓
GitHub Actions
  ↓
Install Dependencies
  ↓
Run Playwright Tests
  ↓
Generate HTML Report
  ↓
Pass / Fail Result
