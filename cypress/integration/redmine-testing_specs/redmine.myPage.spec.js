/// <reference types="cypress" />

import MainPage from "../../pageobjects/main.page";
import MyPage from "../../pageobjects/myPage.page";
import LoginPage from "../../pageobjects/login.page";

const URL = 'https://www.redmine.org/';
const main = new MainPage();
const myPage = new MyPage();
const loginPage = new LoginPage();

const calendarHeader = '//h3[text()="Calendar"]';
const assignedToMeHeader = '//*[text()="Issues assigned to me"]';
const latestNewsHeader = '//*[text()="Latest news"]';
const documentsHeader = '//*[text()="Documents"]';
const spentTimeHeader = '//*[text()="Spent time"]';
const closeAssignedToMe = '[href="/my/remove_block?block=issuesassignedtome"]';
const closeCalendar = '[href="/my/remove_block?block=calendar"]';
const closeLatestNews = '[href="/my/remove_block?block=news"]';
const closeDocuments = '[href="/my/remove_block?block=documents"]';
const closeSpentTime = '[href="/my/remove_block?block=timelog"]';


describe('redmine My page testing', () => {

    beforeEach(() => {
        cy.visit(URL);
        main.clickSignInButton();
        loginPage.setLoginValue('phenomen2405');
        loginPage.setPasswordValue('noone111');
        loginPage.clickLoginButton();
        main.clickMyPageButton();
    })

    it('should be visible "My page" page header', () => {
        myPage.myPageHeaderIsVisible();
    })

    it('should add and delete "Calendar" block to page', () => {
        myPage.clickPersonalizeButton();
        myPage.selectCalendarOption();
        myPage.clickAddButton();
        myPage.optionHeaderIsVisible(calendarHeader);
        myPage.clickCloseOption(closeCalendar);
        myPage.optionHeaderIsNotVisible('Calendar');

    })

    it('should add and delete "Issues assigned to me" block to page', () => {
        myPage.clickPersonalizeButton();
        myPage.selectAssignedToMeOption();
        myPage.clickAddButton();
        myPage.optionHeaderIsVisible(assignedToMeHeader);
        myPage.clickCloseOption(closeAssignedToMe);
        myPage.optionHeaderIsNotVisible('Issues assigned to me');

    })

    it('should add and delete "Latest news" block to page', () => {
        myPage.clickPersonalizeButton();
        myPage.selectNewsOption();
        myPage.clickAddButton();
        myPage.optionHeaderIsVisible(latestNewsHeader);
        myPage.clickCloseOption(closeLatestNews);
        myPage.optionHeaderIsNotVisible('Latest news');

    })

    it('should add and delete "Documents" block to page', () => {
        myPage.clickPersonalizeButton();
        myPage.selectDocumensOption();
        myPage.clickAddButton();
        myPage.optionHeaderIsVisible(documentsHeader);
        myPage.clickCloseOption(closeDocuments);
        myPage.optionHeaderIsNotVisible('Documents');

    })

    it('should add and delete "Spent time" block to page', () => {
        myPage.clickPersonalizeButton();
        myPage.selectSpentTimeOption();
        myPage.clickAddButton();
        myPage.optionHeaderIsVisible(spentTimeHeader);
        myPage.clickCloseOption(closeSpentTime);
        myPage.optionHeaderIsNotVisible('Spent time');

    })

    it('add button should not be visible, if add all options', () => {
        myPage.clickPersonalizeButton(); 
        myPage.selectAssignedToMeOption();
        myPage.clickAddButton();
        myPage.selectCalendarOption();
        myPage.clickAddButton();
        myPage.selectNewsOption();
        myPage.clickAddButton();
        myPage.selectDocumensOption();
        myPage.clickAddButton();
        myPage.selectSpentTimeOption();
        myPage.clickAddButton();
        myPage.addButtonIsNotVisible();
        myPage.clickCloseOption(closeAssignedToMe);
        myPage.clickCloseOption(closeCalendar);
        myPage.clickCloseOption(closeDocuments);
        myPage.clickCloseOption(closeLatestNews);
        myPage.clickCloseOption(closeSpentTime);
    })

    it('should go to "Reported issues" URL', () => {
        myPage.clickReportedIssuesButton();
        myPage.checkReportedIssuesPageURL();
    })

    it('should go to "Watched issues" URL', () => {
        myPage.clickReportedIssuesButton();
        myPage.checkWatchedIssuesPageURL();
    })

    it('should hide status dropdown menu when Status checkbox is not checked', () => {
        myPage.clickReportedIssuesButton();
        myPage.checkStatusCheckbox();
        myPage.statusDropdownIsNotVisible();
        myPage.checkStatusCheckbox();
        myPage.statusCheckBoxIsChecked();
    })

    it('should hide author dropdown menu and authors input when Author checkbox is not checked', () => {
        myPage.clickReportedIssuesButton();
        myPage.checkAuthorCheckbox();
        myPage.authorDropdownIsNotVisible();
        myPage.checkAuthorCheckbox();
        myPage.authorDropdownIsVisible();
    })

    it(`should appear only Bernard Rohloff's issues`, () => {
        myPage.clickReportedIssuesButton();
        myPage.selectAuthor('Bernhard Rohloff');
        myPage.clickApplyButton();
        myPage.rohloffLatestIssueIsVisible();
    })

    it("should create and delete custom queries list", () => {
        myPage.clickReportedIssuesButton();
        myPage.clickSaveButton();;
        myPage.setQueryName();
        myPage.selectAuthor('Bernhard Rohloff');
        myPage.clickSaveQuestionButton();
        myPage.newListIsVisible();
        myPage.clickNewListLink();
        myPage.deleteQuestionList();
        myPage.newListIsNotVisible();
    })
})