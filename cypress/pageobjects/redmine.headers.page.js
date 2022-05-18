

    const overviewHeader = '#content h2';
    const downloadHeader = '#content h1';
    const activityHeader = '#content h2';
    const roadmapHeader = '#content h2';
    const issuesHeader = '#content h2';
    const newsHeader = '#content h2';
    const wikiHeader = '#content h1';
    const forumsHeader = '#content h2';
    const rootHeader = 'h2 a';
    const projectHeader = '#content h2';
    const indexByTitleHeader = '#content h2';
    const indexByDateHeader = '#content h2';
    const usersGuideHeader = '#content h1';
    const developersGuideHeader = '#content h2';
    const securityHeader = '#content h1';
    const pluginsHeader = '#content h2';
    const privacyPolicyHeader = '#content h1';


class RedmineHeaders{

    overviewHeaderIsVisible() {
        cy.get(overviewHeader).should('contain.text', 'Overview')
    }

    downloadHeaderIsVisible() {
        cy.get(downloadHeader).should('contain.text', 'Download')
    }

    activityHeaderIsVisible() {
        cy.get(activityHeader).should('contain.text', 'Activity')
    }

    roadmapHeaderIsVisible() {
        cy.get(roadmapHeader).should('contain.text', 'Roadmap')
    }

    issuesHeaderIsVisible() {
        cy.get(issuesHeader).should('contain.text', 'Issues')
    }

    newsHeaderIsVisible() {
        cy.get(newsHeader).should('contain.text', 'News')
    }

    wikiHeaderIsVisible() {
        cy.get(wikiHeader).should('contain.text', 'Redmine')
    }

    forumsHeaderIsVisible() {
        cy.get(forumsHeader).should('contain.text', 'Forums')
    }

    rootHeaderIsVisible() {
        cy.get(rootHeader).should('contain.text', 'root')
    }

    projectHeaderIsVisible() {
        cy.get(projectHeader).should('contain.text', 'Projects')
    }

    indexByTitleIsVisible() {
        cy.get(indexByTitleHeader).should('contain.text', 'Index by title')
    }

    indexByDateHeaderIsVisible() {
        cy.get(indexByDateHeader).should('contain.text', 'Index by date')
    }

    userGuideHeaderIsVisible() {
        cy.get(usersGuideHeader).should('contain.text', 'Redmine guide')
    }

    developerGuideHeaderIsVisible() {
        cy.get(developersGuideHeader).should('contain.text', 'Developer guide')
    }

    securityHeaderIsVisible() {
        cy.get(securityHeader).should('contain.text', 'Redmine Security Advisories')
    }

    pluginsHeaderIsVisible() {
        cy.get(pluginsHeader).should('contain.text', 'Plugins Directory')
    }

    privacyPolicyHeaderIsVisible() {
        cy.get(privacyPolicyHeader).should('contain.text', 'redmine.org privacy policy')
    }

}
export default RedmineHeaders