

const signInButton = '[href="/login"]';
const registerButton = '[href="/account/register"]';
const overviewButton = '[href="/projects/redmine"]';
const downloadButton = 'a.download';
const activityButton = '[href="/projects/redmine/activity"]';
const roadmapButton = '[href="/projects/redmine/roadmap"]';
const issuesButton = '[href="/projects/redmine/issues"]';
const newsButton = '[href="/projects/redmine/news"]';
const wikiButton = '[href="/projects/redmine/wiki"]';
const forumsButton = '[href="/projects/redmine/boards"]';
const repositiryButton = '[href="/projects/redmine/repository"]';
const searchInput = '#q';
const usersGuideLink = '#sidebar p [href="/projects/redmine/wiki/Guide"]';
const developersGuideLink = '#sidebar p [href="/projects/redmine/wiki/Developer_Guide"]';
const pluginsLink = '#sidebar p [href="/plugins"]';
const securityLink = '#sidebar p [href="/projects/redmine/wiki/Security_Advisories"]';
const privacyPolicyLink = '#sidebar p [href="/projects/redmine/wiki/PrivacyPolicy"]';
const startPagelink = '#sidebar li a[href="/"]';
const indexByTitleLink = '[href="/projects/redmine/wiki/index"]';
const indexByDateLink = '[href="/projects/redmine/wiki/date_index"]';
const downloadLink = '//a[contains(text(),"tar.gz") and contains(text(), "5.")]';
const openDiscussionLink = '[href="/projects/redmine/boards/1"]';
const howToContributeLink = '[href="/boards/1/topics/4325"]';
const nextPageButton = 'a[class="next"]';
const previousButton = 'a[class="previous"]';
const lastMessageFilter = 'th a[class]';
const firstElement = '[class="message odd sticky "] td[class="subject"] a';
const projectButton = '[href="/projects"]';
const myAccountButton ='#account [href="/my/account"]';
const accountInfoButton = '#loggedas [href="/users/604355"]';
const myPageButton = '[href="/my/page"]';



class MainPage{

    clickMyPageButton() {
        cy.get(myPageButton).click();
    }

    clickAccountInfoButton() {
        cy.get(accountInfoButton).click();
    }

    clickMyAccountButton() {
        cy.get(myAccountButton).click();
    }


    clickRegisterButton() {
        cy.get(registerButton).click()
    }

    clickSignInButton() {
        cy.get(signInButton).click()
    }

    clickOverviewButton() {
        cy.get(overviewButton).click()
    }

    clickDownloadButton() {
        cy.get(downloadButton).click();
    }

    clickActivityButton() {
        cy.get(activityButton).click()
    }

    clickRoadmapButton() {
        cy.get(roadmapButton).click()
    }

    clickIssuesButton() {
        cy.get(issuesButton).click()
    }

    clickNewsButton() {
        cy.get(newsButton).click()
    }

    clickWikiButton() {
        cy.get(wikiButton).click()
    }

    clickForumsButton() {
        cy.get(forumsButton).click()
    }

    clickRepositoryButton() {
        cy.get(repositiryButton).click()
    }

    clickSearchInput() {
        cy.get(searchInput).click()
    }

    clickUsersGuideLink() {
        cy.get(usersGuideLink).click()
    }

    clickDevelopersGuideLink() {
        cy.get(developersGuideLink).click()
    }

    clickPluginsLink() {
        cy.get(pluginsLink).click()
    }

    clickSecurityLink() {
        cy.get(securityLink).click()
    }

    clickPrivacyPolicyLink() {
        cy.get(privacyPolicyLink).click()
    }

    clickStartPageLink() {
        cy.get(startPagelink).click()
    }

    clickIndexByTitleLink() {
        cy.get(indexByTitleLink).click()
    }

    clickIndexByDateLink() {
        cy.get(indexByDateLink).click()
    }

    setSearchValue() {
        cy.get(searchInput).clear();
        cy.get(searchInput).type('price');
        cy.get(searchInput).type('{enter}')
    }

    clickDownload() {
        cy.xpath(downloadLink).click()

    }

    clickOpenDiscussionLink() {
        cy.get(openDiscussionLink).click();
    }

    clickHowToContributeLink() {
        cy.get(howToContributeLink).click();
    }

    clickNextPageButton() {
        cy.get(nextPageButton).click()
    }

    previousButtonIsVisible() {
        cy.get(previousButton).should('be.visible')
    }

    clickLastMessage() {
        cy.get(lastMessageFilter).click();
    }

    expestedFirstEl() {
        cy.get(firstElement).should('contain.text', 'Redmine.org tickets vote count list(2019/12/22)')
    }

    expectedAnottherResult() {
       cy.get(firstElement).should('contain.text', 'How to contribute')
    }

    clickProjectButton() {
        cy.get(projectButton).click();
    }
}
export default MainPage 