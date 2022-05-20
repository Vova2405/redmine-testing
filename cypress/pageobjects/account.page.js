
const firstNameInput = '#user_firstname';
const lastNameInput = '#user_lastname';
const emailNotificationsInput = '#user_mail_notification';
const checkBoxForReports = '#pref_no_self_notified';
const displayCommentsInput = '#pref_comments_sorting';
const changePasswordButton = '[href="/my/password"]';
const saveButton = '[value="Save"]';
const deleteAccountButton = '[href="/my/account/destroy"]';
const passwordInput = '#password';
const newPasswordInput = '#new_password';
const confirmationInput = '#new_password_confirmation';
const applyButton = '[value="Apply"]';
const cancelButton = '#content [href="/my/account"]';
const IRCNickInput = '#user_custom_field_values_3';
const notification = '#flash_notice';
const errorNotification  = '#errorExplanation li';
const passwordNotification = '#flash_notice';
const flashError = '#flash_error';
const deleteButton = '[value="Delete my account"]';
const myAccountHeader = '#content h2';
const sidebarUserLogin = '#sidebar p strong';




class AccountPage{

    checkSidebarUserInfo(inf) {
        cy.get(sidebarUserLogin).should('contain.text', inf)
    }

    accountPageHeaderIsVisible() {
        cy.get(myAccountHeader).should('contain.text', 'My account')
    }

    clickDeleteButton() {
        cy.get(deleteButton).click()
    }

    clickMyAccountButton() {
        cy.get(myAccountButton).click();
    }

    setNewFirstName(name) {
        cy.get(firstNameInput).clear();
        cy.get(firstNameInput).type(name);
        return this
    }

    setNewLastName(lastName) {
        cy.get(lastNameInput).clear();
        cy.get(lastNameInput).type(lastName);
        return this
    }

    setNewIRCNick(IRC) {
        cy.get(IRCNickInput).clear();
        cy.get(IRCNickInput).type(IRC);
        return this
    }

    clickSaveButton() {
        cy.get(saveButton).click();
    }

    notificationIsVisible() {
        cy.get(notification).should('contain.text', 'Account was successfully updated.');
    }

    errorNotificationIsVisible() {
        cy.get(errorNotification).should('be.visible');
    }

    checkSelectedOption(opt) {
        cy.get(opt).should('be.selected');
    }


    changeOptionALL(opt) {
        cy.get(emailNotificationsInput).select(opt);
    }

    clickNotificationCheckbox() {
        cy.get(checkBoxForReports).click()
    }

    checkedCheckbox() {
        cy.get(checkBoxForReports).should('be.checked')
    }

    notChekedCheckbox() {
        cy.get(checkBoxForReports).should('not.be.checked')
    }

    selectCommentsOption(opt) {
        cy.get(displayCommentsInput).select(opt);
    }

    checkCommentsFilter(opt) {
        cy.get(opt).should('be.selected')
    }

    clickChangePasswordButton() {
        cy.get(changePasswordButton).click();
    }

    clickDeleteAccountButton() {
        cy.get(deleteAccountButton).click();
    }

    setOldPassword(pswd) {
        cy.get(passwordInput).clear();
        cy.get(passwordInput).type(pswd);
        return this
    }

    setNewPassword(npswd) {
        cy.get(newPasswordInput).clear();
        cy.get(newPasswordInput).type(npswd);
        return this
    }

    setConfirmation(conf) {
        cy.get(confirmationInput).clear();
        cy.get(confirmationInput).type(conf);
        return this
    }

    clickApplyButton() {
        cy.get(applyButton).click();
    }

    succesPaswordNotificationisVisible() {
        cy.get(passwordNotification).should('contain.text', 'Password was successfully updated.')
    }

    wrongPasswordNotificationIsvisible() {
        cy.get(flashError).should('contain.text', 'Wrong password')
    }

    clickCancelButton() {
        cy.get(cancelButton).click();
    }


}
export default AccountPage