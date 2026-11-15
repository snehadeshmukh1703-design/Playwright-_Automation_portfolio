
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const loginData = [
  {
    scenario: 'Uppercase username',
    username: 'TOMSMITH',
    password: 'SuperSecretPassword!',
    expectedError: 'Your username is invalid!'
  },
  {
    scenario: 'Password missing exclamation mark',
    username: 'tomsmith',
    password: 'SuperSecretPassword',
    expectedError: 'Your password is invalid!'
  },
  {
    scenario: 'Incorrect username',
    username: 'wronguser',
    password: 'SuperSecretPassword!',
    expectedError: 'Your username is invalid!'
  },
  {
    scenario: 'Incorrect password',
    username: 'tomsmith',
    password: 'wrongpassword',
    expectedError: 'Your password is invalid!'
  }
];

for (const data of loginData) {
  test(`Data-driven login - ${data.scenario}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(data.username, data.password);

    await expect(page).toHaveURL(/\/login$/);
    await expect(loginPage.flashMessage).toContainText(data.expectedError);
  });
}
