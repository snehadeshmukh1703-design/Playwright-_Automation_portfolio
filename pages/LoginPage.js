
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
    this.flashMessage = page.locator('#flash');
    this.secureHeading = page.getByRole('heading', { name: 'Secure Area',exact:true });
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(username, password) {
    await this.goto();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }

  async openSecurePage() {
    await this.page.goto('/secure');
  }
}

module.exports = { LoginPage };
