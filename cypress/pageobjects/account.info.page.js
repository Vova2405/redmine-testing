const userName = '#content h2'
const IRCNickInfo = '//*[contains(text(),"IRC nick:")]';
const registeredOnInfo = '//*[contains(text(),"Registered on:")]';
const lastConnectionInfo = '//*[contains(text(),"Last connection:")]';

class AccountInfoPage{

    chekIRCNickInfo(nick){
    cy.xpath(IRCNickInfo).should('contain.text', nick)
    }

    checkUserNameInfo(name) {
        cy.get(userName).should('contain.text', name)
    }

    checkRegisteredOnInfo(registered) {
        cy.xpath(registeredOnInfo).should('contain.text', registered)
    }

    checkLastConnectionInfo(connection) {
        cy.xpath(lastConnectionInfo).should('contain.text', connection)
    }

    logIRCNickToConsole() {
        cy.xpath(IRCNickInfo).then((text) => {
            cy.log(text.text())
        });
        
    }

    logReristeredOnDateToConsole() {
        cy.xpath(registeredOnInfo).then((text) => {
            cy.log(text.text())
        })
    }

    logLastConnectionDateToConsole() {
        cy.xpath(lastConnectionInfo).then((text) => {
            cy.log(text.text())
        })
    }


}
export default AccountInfoPage