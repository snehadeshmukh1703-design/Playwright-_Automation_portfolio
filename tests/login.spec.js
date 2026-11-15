const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const validUser = 'tomsmith';
const validPassword = 'SuperSecretPassword!';

// TC01 - Valid login
test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(validUser, validPassword);

  await expect(page).toHaveURL(/\/secure$/);
  await expect(loginPage.secureHeading).toBeVisible();
});

// TC02 - Invalid username
test('Login with invalid username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('wronguser', validPassword);

  await expect(page).toHaveURL(/\/login$/);
  await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
});

// TC03 - Invalid password
test('Login with invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(validUser, 'wrongpassword');

  await expect(page).toHaveURL(/\/login$/);
  await expect(loginPage.flashMessage).toContainText('Your password is invalid!');
});

// TC04 - Invalid username and password
test('Login with both credentials invalid', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('wronguser', 'wrongpassword');

  await expect(page).toHaveURL(/\/login$/);
  await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
});

// TC05 - Empty username
test('Login with empty username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('', validPassword);

  await expect(page).toHaveURL(/\/login$/);
  await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
});

// TC06 - Empty password
test('Login with empty password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(validUser, '');

  await expect(page).toHaveURL(/\/login$/);
  await expect(loginPage.flashMessage).toContainText('Your password is invalid!');
});

// TC07 - Both fields empty
test('Login with both fields empty', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('', '');

  await expect(page).toHaveURL(/\/login$/);
  await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
});

// TC08 - Logout
test('Logout after successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(validUser, validPassword);

  await expect(page).toHaveURL(/\/secure$/);
  await loginPage.logout();

  await expect(page).toHaveURL(/\/login$/);
  await expect(loginPage.flashMessage).toContainText('You logged out of the secure area!');
});

// TC09 - Secure page without login
test('Secure page should not open without login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openSecurePage();

  await expect(page).toHaveURL(/\/login$/);
  await expect(loginPage.flashMessage).toContainText('You must login to view the secure area!');
});

// TC10 - Secure page after logout
test('Secure page should not open after logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(validUser, validPassword);
  await loginPage.logout();

  await expect(page).toHaveURL(/\/login$/);
  await loginPage.openSecurePage();

  await expect(page).toHaveURL(/\/login$/);
  await expect(loginPage.flashMessage).toContainText('You must login to view the secure area!');
});