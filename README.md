
# Login Automation Testing Framework

**UI and API Automation using Playwright, JavaScript, Postman and Newman**

## Project Overview

This project demonstrates automated testing of login functionality using Playwright with JavaScript for UI automation and Postman with Newman for API testing.

The project covers positive and negative login scenarios, reusable page methods, data-driven testing, API response validation and automated test reporting.

**Application Under Test:** https://the-internet.herokuapp.com/login

This is a hands-on automation testing project developed for learning and portfolio purposes.

## Technologies Used

- JavaScript
- Playwright
- Node.js
- Visual Studio Code
- Postman
- Newman
- Git and GitHub

## UI Automation - Playwright

Implemented 14 automated UI test cases covering login functionality.

### Test Scenarios

- Login with valid credentials
- Login with invalid username
- Login with invalid password
- Login with empty credentials
- Logout functionality
- Secure page access validation
- Access restriction after logout
- Data-driven login testing
- Username case sensitivity
- Password validation

### Framework Concepts

- Page Object Model (POM)
- Reusable locators and methods
- Data-driven testing using JavaScript arrays
- Playwright assertions
- Browser automation
- HTML test reporting
- Failure screenshots and traces

## API Testing - Postman and Newman

Implemented five authentication API test scenarios.

| Test Scenario | Expected HTTP Status |
|---|---|
| Valid login | 200 |
| Invalid password | 401 |
| Missing password | 400 |
| Invalid username | 401 |
| Missing username | 400 |

### API Validations

- HTTP status code validation
- Response body validation
- Error message validation
- Positive and negative API testing
- Automated assertions
- Command-line execution using Newman

## Test Execution Results

**Latest verified local execution**

| Test Type | Result |
|---|---|
| UI Automation | 14 tests passed |
| API Testing | 5 requests executed |
| API Assertions | 11 passed |
| Failed API Assertions | 0 |

These results represent successful local test execution.

## Project Structure

- `pages/LoginPage.js` - Reusable Page Object Model
- `tests/login.spec.js` - Login automation test cases
- `tests/login-data.spec.js` - Data-driven test cases
- `postman/Login_Automation_API_Testing.postman_collection.json` - Exported API collection
- `playwright.config.js` - Playwright configuration
- `package.json` - Project dependencies
- `.gitignore` - Excluded files and folders
- `README.md` - Project documentation

## Installation

1. Install Node.js.
2. Clone this GitHub repository.
3. Open the project folder in Visual Studio Code.
4. Open the VS Code terminal.
5. Install project dependencies:

    npm ci

6. Install the Chromium browser:

    npx playwright install chromium

## Run UI Automation Tests

Execute the login automation tests:

    npx playwright test tests/login.spec.js tests/login-data.spec.js

## View Playwright HTML Report

Generate and open the latest HTML report:

    npx playwright show-report

## Run API Tests Using Newman

Install Newman if it is not already available:

    npm install -g newman

Execute the exported Postman collection:

    npx newman run postman/Login_Automation_API_Testing.postman_collection.json

## Learning Outcomes

Through this hands-on project, I practiced:

- Writing automated test cases using Playwright
- Understanding JavaScript-based automation
- Implementing Page Object Model (POM)
- Creating reusable test methods
- Performing data-driven testing
- Validating positive and negative scenarios
- Writing API assertions in Postman
- Executing API collections using Newman
- Understanding test reports and debugging
- Organizing an automation testing project
- Using Git and GitHub for version control

## Project Purpose

This project demonstrates practical knowledge of UI automation, API validation, reusable test design and command-line test execution.

It was developed as a hands-on learning project to strengthen my automation testing skills and build a professional GitHub portfolio.

**Note:** The application under test is a public demonstration website used for learning and testing purposes.


## Playwright Test Execution Results

**Total Tests:** 14  
**Passed:** 14  
**Failed:** 0

### Test Report Screenshots

![Playwright Test Results - Part 1](Screenshots/playwright-test-results.png)

![Playwright Test Results - Part 2](Screenshots/playwright-test-results2-.png)

