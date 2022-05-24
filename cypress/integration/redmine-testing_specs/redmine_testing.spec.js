/// <reference types="cypress" />


import RegisterPage from "../../pageobjects/register.page";
import LoginPage from "../../pageobjects/login.page";
import MainPage from "../../pageobjects/main.page";
import RedmineHeaders from "../../pageobjects/redmine.headers.page";
import LinksPage from "../../pageobjects/link.page";
const URL = 'https://www.redmine.org/';
const register = new RegisterPage();
const main = new MainPage();
const loginPage = new LoginPage();
const headers = new RedmineHeaders();
const links = new LinksPage();

const firstName = 'tester';
const lastName = 'tester1';
const password = 'password1234';
const incorrectEmail = 'testertester123.gmail.com';
const loginValue = 'newtester' + Math.floor(Math.random()*10000);
const emailValue = 'testertester' + Math.floor(Math.random()*10000) +'@gmail.com';



describe('redmine website testing', () => {

    beforeEach(() => {
        cy.visit(URL);
    })

    it('testing the registration form with valid data', () => {

        
        main.clickRegisterButton();
        register.setLoginValue(loginValue);
        register.setPasswordValue(password);
        register.setConfirmation(password);
        register.setFirstName(firstName);
        register.setLastName(lastName);
        register.setEmail(emailValue);
        register.setIRCNick('testertesterr');
        register.clickSubmit();
        register.checkNotice();
    })

    it('testing the registration form with incorrect email', () => {

        main.clickRegisterButton();
        register.setLoginValue('newtesterr1');
        register.setPasswordValue(password);
        register.setConfirmation(password);
        register.setFirstName(firstName);
        register.setLastName(lastName);
        register.setEmail(incorrectEmail);
        register.setIRCNick('testertester');
        register.clickSubmit();
        register.checkEmailNotice()
    })

    xit('testing the registration form with a login that is already in use', () => {

        main.clickRegisterButton();
        register.setLoginValue('newtesterrr');
        register.setPasswordValue(password);
        register.setConfirmation(password);
        register.setFirstName(firstName);
        register.setLastName(lastName);
        register.setEmail('testertester1234@gmail.com');
        register.setIRCNick('testertester');
        register.clickSubmit();
        register.checkEmailNotice()
    })

    it('testing the login form with valid data', () =>{

        main.clickSignInButton();
        loginPage.setLoginValue('phenomen2405');
        loginPage.setPasswordValue('noone111');
        loginPage.clickLoginButton();
        loginPage.userLoginIsVisible();

    })

    it('testing the login form with incorrect data', () =>{

        main.clickSignInButton();
        loginPage.setLoginValue('phenomen2404');
        loginPage.setPasswordValue('noone111');
        loginPage.clickLoginButton();

    })

    it('testing the "Forgot password" form with valid data', () => {

        main.clickSignInButton();
        loginPage.clickLostPasswordButton();
        loginPage.setEmailValue('phenom2405@gmail.com');
        loginPage.clickSubmitButton();

    })

    it('testing the "Search" option', () => {

        main.setSearchValue();

    })

    it('testing the downloading release to local computer', () => {      //some error for wait page load, but test work good

        main.clickDownloadButton();
        main.clickDownload()

    })

    it('check transitions between pages', ()=> {

        main.clickOverviewButton();
        headers.overviewHeaderIsVisible()
        main.clickDownloadButton();
        headers.downloadHeaderIsVisible();
        main.clickActivityButton();
        headers.activityHeaderIsVisible();
        main.clickRoadmapButton();
        headers.roadmapHeaderIsVisible();
        main.clickIssuesButton();
        headers.issuesHeaderIsVisible();
        main.clickNewsButton();
        headers.newsHeaderIsVisible();
        main.clickWikiButton();
        headers.wikiHeaderIsVisible();
        main.clickForumsButton();
        headers.forumsHeaderIsVisible();
        main.clickRepositoryButton();
        headers.rootHeaderIsVisible();
    })

    it('testing Forum theme visit', () => {

        main.clickForumsButton();
        main.clickOpenDiscussionLink();
        main.clickHowToContributeLink();
        main.clickNextPageButton();
        main.previousButtonIsVisible();
    })

    it('testing "Last message filtering" on Forum page', () => {

        main.clickForumsButton();
        main.clickOpenDiscussionLink();
        main.clickLastMessage();
        main.expestedFirstEl();
        main.clickLastMessage();
        main.expectedAnottherResult();

    })

    it('testing visibility the Project header', () => {

        main.clickProjectButton();
        headers.projectHeaderIsVisible()
    })

    it('testing the right sidebar Wiki links (Start page)', () => {

        main.clickStartPageLink();
        links.getStartPageLink();

    })

    it('testing the right sidebar Wiki links (Index by title)', () => {

        main.clickIndexByTitleLink();
        links.getIndexByTitleLink();
        
    })

    it('testing the right sidebar Wiki links (Index by date)', () => {

        main.clickIndexByDateLink();
        links.getIndexByDateLink();
        
    })

    it("testing the right sidebar Resources links (User's Guide)", () => {

        main.clickUsersGuideLink();
        links.getUsersGuideLink()
        
    })

    it("testing the right sidebar Resources links (Developer's Guide)", () => {

        main.clickDevelopersGuideLink();
        links.getDevelopersGuideLink();
        
    })

    it("testing the right sidebar Resources links (Plugins)", () => {

        main.clickPluginsLink();
        links.getPluginsLink();
        
    })

    it("testing the right sidebar Resources links (Security)", () => {

        main.clickSecurityLink();
        links.getSecurityLink();
        
    })

    it("testing the right sidebar Resources links (Privacy Policy)", () => {

        main.clickPrivacyPolicyLink();
        links.getPrivacyPolicyLink();
        
    })


})