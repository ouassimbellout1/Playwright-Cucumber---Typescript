import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";

// I) Locators
const pageLocators = {
    loginLink          : `//span[text()='Login']`,
    loginButton        : `button[color= 'primary']`,
    usernameLink       : `input[formcontrolname= 'username']`,
    passwordLink       : `input[formcontrolname= 'password']`,
    usernameProfilLink : `//button[contains(@class, 'mat-focus-indicator mat-menu-trigger')]//span[1]`,
    loginAlertError    : `mat-error[role='alert']`,
};

// II) Variables
const pageVariables = {
    text           : null,
    failureMessage : null,
    selector       : null,
};

// III) Méthods
class Login {

    navigatestoApplication = async () => {
        await pageFixture.page.goto(process.env.BASEURL);
    };

    clickLoginLink = async () => {
        await pageFixture.page.locator(pageLocators.loginLink).click();
    };

    inputUsernameOrPassword = async (usernameOrPassword, typeUsernameOrPassword) => {
        pageVariables.selector = `${usernameOrPassword}Link`;
        await pageFixture.page.locator(pageLocators[pageVariables.selector]).fill(typeUsernameOrPassword);
    };

    clickLoginButton = async () => {
        await pageFixture.page.locator(pageLocators.loginButton).click();
        await pageFixture.page.waitForLoadState();
    };
    
    loginSuccess = async () => {
        pageVariables.text = await pageFixture.page.locator(pageLocators.usernameProfilLink).textContent();
        console.log("username: " + pageVariables.text);
    };

    loginFail = async () => {
        pageVariables.failureMessage = pageFixture.page.locator(pageLocators.loginAlertError);
        await expect(pageVariables.failureMessage).toBeVisible();
    };

};

export default new Login();