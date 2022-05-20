/// <reference types="cypress" />

import MainPage from "../../pageobjects/main.page";
import AccountPage from "../../pageobjects/account.page";
import AccountInfoPage from "../../pageobjects/account.info.page";
import LoginPage from "../../pageobjects/login.page";

const URL = 'https://www.redmine.org/';
const main = new MainPage();
const accountInfo = new AccountInfoPage();
const accountPage = new AccountPage();
const loginPage = new LoginPage();
const allNotification = '[value="all"]';
const myEvents = '[value="only_my_events"]';
const chronologicalOrder = '[value="asc"]';
const reverseOrder = '[value="desc"]';

describe('redmine user account testing', () => {

    beforeEach(() => {
        cy.visit(URL);
        main.clickSignInButton();
        loginPage.setLoginValue('phenomen2405');
        loginPage.setPasswordValue('noone111');
        loginPage.clickLoginButton();
        main.clickMyAccountButton();
    })

   xit('should change user first name', () => {

        accountPage.setNewFirstName('Ivan');
        accountPage.clickSaveButton();
        accountPage.notificationIsVisible();
        main.clickAccountInfoButton();
        accountInfo.checkUserNameInfo('Ivan');
        main.clickMyAccountButton();
        accountPage.setNewFirstName('Volodymyr');
        accountPage.clickSaveButton();
        accountPage.notificationIsVisible();
        main.clickAccountInfoButton();
        accountInfo.checkUserNameInfo('Volodymyr');
    })

    xit('should change user last name', () => {

        accountPage.setNewLastName('Ivanov');
        accountPage.clickSaveButton();
        accountPage.notificationIsVisible();
        main.clickAccountInfoButton();
        accountInfo.checkUserNameInfo('Ivanov');
        main.clickMyAccountButton();
        accountPage.setNewLastName('Hasyn');
        accountPage.clickSaveButton();
        accountPage.notificationIsVisible();
        main.clickAccountInfoButton();
        accountInfo.checkUserNameInfo('Hasyn');
    })

    xit('should change IRC nick', () => {

        accountPage.setNewIRCNick('tester');
        accountPage.clickSaveButton();
        accountPage.notificationIsVisible();
        main.clickAccountInfoButton();
        accountInfo.chekIRCNickInfo('tester');
        main.clickMyAccountButton();
        accountPage.setNewIRCNick('phenom2405');
        accountPage.clickSaveButton();
        accountPage.notificationIsVisible();
        main.clickAccountInfoButton();
        accountInfo.chekIRCNickInfo('phenom2405');
    })

    xit('should change email notification option', () => {

        accountPage.changeOptionALL('all');
        accountPage.clickNotificationCheckbox();
        accountPage.clickSaveButton();
        accountPage.checkedCheckbox();
        accountPage.checkSelectedOption(allNotification);
        accountPage.changeOptionALL('only_my_events');
        accountPage.clickNotificationCheckbox();
        accountPage.clickSaveButton();
        accountPage.notChekedCheckbox();
        accountPage.checkSelectedOption(myEvents);
    })

    xit('should change display comments filter', () => {
        accountPage.selectCommentsOption('desc');
        accountPage.clickSaveButton();
        accountPage.checkCommentsFilter(reverseOrder);
        accountPage.selectCommentsOption('asc');
        accountPage.clickSaveButton();
        accountPage.checkCommentsFilter(chronologicalOrder);
    })

    xit('should change user password', () => {
        accountPage.clickChangePasswordButton();
        accountPage.setOldPassword('noone111');
        accountPage.setNewPassword('noone1111');
        accountPage.setConfirmation('noone1111');
        accountPage.clickApplyButton();
        accountPage.clickChangePasswordButton();
        accountPage.setOldPassword('noone1111');
        accountPage.setNewPassword('noone111');
        accountPage.setConfirmation('noone111');
        accountPage.clickApplyButton();
        accountPage.succesPaswordNotificationisVisible();
    })

    xit('should flash "Wrong Password" notice', () => {
        accountPage.clickChangePasswordButton();
        accountPage.setOldPassword('noone000');
        accountPage.setNewPassword('noone1111');
        accountPage.setConfirmation('noone1111');
        accountPage.clickApplyButton();
        accountPage.wrongPasswordNotificationIsvisible();
    })

    xit('should return to account page', () => {
        accountPage.clickDeleteAccountButton();
        accountPage.clickCancelButton();
        accountPage.accountPageHeaderIsVisible();
    })

    xit('delete account with out checking hte checkbox', () => {
        accountPage.clickDeleteAccountButton();
        accountPage.clickDeleteButton();
        main.clickMyAccountButton();
        accountPage.checkSidebarUserInfo('phenomen2405')
    })

    xit('should log account info in console', () => {

        main.clickAccountInfoButton();
        accountInfo.logIRCNickToConsole();
        accountInfo.logLastConnectionDateToConsole();
        accountInfo.logReristeredOnDateToConsole()
    })

    


})