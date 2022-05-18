const URL = 'https://www.redmine.org/';
const loginInput = '#user_login';
const passwordInput = '#user_password';
const confirmationInput = '#user_password_confirmation';
const firstNameInput = '#user_firstname';
const lastNameInput = '#user_lastname';
const emailInput = '#user_mail';
const ircNickInput = '#user_custom_field_values_3';
const submitButton = '[value="Submit"]';
const registerButton = '[href="/account/register"]';
const notice = '#flash_notice';
const wrongEmailNotice = '#errorExplanation'

class RegisterPage{

    navigate(){
        cy.visit(URL);
    }

    clickRegisterButton() {
        cy.get(registerButton).click();
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

    setConfirmation(pswd) {
        cy.get(confirmationInput).clear();
        cy.get(confirmationInput).type(pswd);
        return this
    }

    setFirstName(name) {
        cy.get(firstNameInput).clear();
        cy.get(firstNameInput).type(name);
        return this
    }

    setLastName (lname) {
        cy.get(lastNameInput).clear();
        cy.get(lastNameInput).type(lname);
        return this
    }

    setEmail(email) {
        cy.get(emailInput).clear();
        cy.get(emailInput).type(email);
        return this
    }

    setIRCNick(nick) {
        cy.get(ircNickInput).clear();
        cy.get(ircNickInput).type(nick);
        return this
    }

    clickSubmit() {
        cy.get(submitButton).click();
    }

    checkNotice() {
        cy.get(notice).should('be.visible')
    }

    checkEmailNotice() {

   
        cy.get(wrongEmailNotice).should('be.visible')
    }


}
export default RegisterPage