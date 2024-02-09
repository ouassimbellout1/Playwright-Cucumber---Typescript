import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import login from "../methods/loginMethods";

setDefaultTimeout(60 * 1000 * 2)

  Given('User navigates to the application', async function () {
    await login.navigatestoApplication();
  });

  Given('User click on the login link', async function () {
    await login.clickLoginLink();
  });

  Given('User enter the {string} as {string}', async function (usernameOrPassword, typeUsernameOrPassword) {
    await login.inputUsernameOrPassword(usernameOrPassword, typeUsernameOrPassword);
  });

  When('User click on the login button', async function () {
    await login.clickLoginButton();
  });

  Then('Login should be success', async function () {
    await login.loginSuccess();
  });

  When('Login should fail', async function () {
    await login.loginFail();
  });