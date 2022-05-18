
    const loginInput = '#username';
    const passwordInput = '#password';
    const loginButton = '[name="login"]';
    const lostPasswordButton = '[href="/account/lost_password"]';
    const emailInput = '#mail';
    const submitButton = '[value="Submit"]';
    const URL = 'https://www.redmine.org/';
    const userLogin = '[href="/users/604355"]'

class LoginPage{
    
    navigate() {
        cy.visit(URL)
    }

    clickLoginButton() {
        cy.get(loginButton).click();
    }

    setLoginValue(login) {
        cy.get(loginInput).clear();
        cy.get(loginInput).type(login);
        return this
    }

    setPasswordValue(pswd) {
        cy.get(passwordInput).clear();
        cy.get(passwordInput).type(pswd);
        return this
    }

    clickEnterButton() {
        cy.get(submitButton).click()
    }

    clickLostPasswordButton() {
        cy.get(lostPasswordButton).click()
    }

    setEmailValue(email) {
        cy.get(emailInput).clear();
        cy.get(emailInput).type(email);
        return this
    }

    clickSubmitButton() {
        cy.get(submitButton).click()
    }

    userLoginIsVisible() {
        cy.get(userLogin).should('contain', 'phenomen2405')
    }

}
export default LoginPage