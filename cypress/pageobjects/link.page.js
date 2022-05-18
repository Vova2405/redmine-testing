class LinksPage{

    getUsersGuideLink() {
        cy.location('href').should('contain', 'https://www.redmine.org/projects/redmine/wiki/Guide')
    }

    getDevelopersGuideLink() {
        cy.location('href').should('contain', 'https://www.redmine.org/projects/redmine/wiki/Developer_Guide')
    }

    getSecurityLink() {
        cy.location('href').should('contain', 'https://www.redmine.org/projects/redmine/wiki/Security_Advisories')
    }

    getPluginsLink() {
        cy.location('href').should('contain', 'https://www.redmine.org/plugins')
    }

    getPrivacyPolicyLink() {
        cy.location('href').should('contain', 'https://www.redmine.org/projects/redmine/wiki/PrivacyPolicy')
    }

    getStartPageLink() {
        cy.location('href').should('contain', 'https://www.redmine.org/')
    }

    getIndexByTitleLink() {
        cy.location('href').should('contain', 'https://www.redmine.org/projects/redmine/wiki/index')
    }

    getIndexByDateLink() {
        cy.location('href').should('contain', 'https://www.redmine.org/projects/redmine/wiki/date_index')
    }
}
export default LinksPage