const reportedIssuesButton = '[href="/issues?author_id=me&set_filter=1&sort=updated_on%3Adesc&status_id=%2A"]';
const watchedIssuesButton = '[href="/issues?set_filter=1&sort=updated_on%3Adesc&watcher_id=me"]';
const personalizePageButton = '[href="/my/page_layout"]';
const statusCheckBox = '#cb_status_id';
const authorCheckBox = '#cb_author_id';
const statusDropdownMenu = '#operators_status_id';
const authorsOperatorDropdownMenu = '#operators_author_id';
const authorsValuesDropdownMenu = '#values_author_id_1';
const filterDropdownMenu = '#add_filter_select';
const issuesLink = 'li [href="/issues?set_filter=1"]';
const database = '[class="nodata"]';
const pageBlockinput = '#block-select';
const addButton = '[href="#"]';
const backButton = '[class="contextual"] [href="/my/page"]';
const applyButton = '//a[text()="Apply"]';
const clearButton = '[class="buttons"] [href="/issues?set_filter=1"]';
const saveButton = '//a[text()="Save"]';
const rohlofLatestIssue = '[href="/issues/31353"]';
const myPageHeader = '#content h2';
const contextual = '[class="contextual"]';
const optionsBlock = '#list-top';
const queryNameInput = '#query_name';
const saveQuestionButton = '#content  input[name="commit"]';
const newListLink = '//a[text()="New list"]';
const queries = '[class="queries"]';
const deleteButton = '//a[text()="Delete"]';

class MyPage{

    clickNewListLink() {
        cy.xpath(newListLink).click();
    }

    deleteQuestionList() {
        cy.xpath(deleteButton).click();
    }

    newListIsNotVisible() {
        cy.get(queries).should('not.contain.text', 'New list')
    }

    newListIsVisible() {
        cy.xpath(newListLink).should('be.visible')
    }

    clickSaveQuestionButton() {
        cy.get(saveQuestionButton).click();
    }

    setQueryName() {
        cy.get(queryNameInput).type('New list');
    }

    clickSaveButton() {
        cy.xpath(saveButton).click();
    }



    addButtonIsVisible() {
        cy.get(addButton).should('be.visible')
    }

    addButtonIsNotVisible() {
        cy.get(contextual).should('not.contain.text', 'Add')
    }

    myPageHeaderIsVisible() {
        cy.get(myPageHeader).should('be.visible')
    }

    clickReportedIssuesButton() {
        cy.get(reportedIssuesButton).click();
    }

    checkReportedIssuesPageURL() {
        cy.location().should('contain.text', 'https://www.redmine.org/issues?author_id=me&set_filter=1&sort=updated_on%3Adesc&status_id=%2A');
    }

    clickWatchedIssuesButton() {
        cy.get(watchedIssuesButton).click();
    }

    checkWatchedIssuesPageURL() {
        cy.location().should('contain.text', 'https://www.redmine.org/issues?set_filter=1&sort=updated_on%3Adesc&watcher_id=me');
    }

    clickPersonalizeButton() {
        cy.get(personalizePageButton).click();
    }

    selectAssignedToMeOption() {
        cy.get(pageBlockinput).select('issuesassignedtome');
    }

    selectNewsOption() {
        cy.get(pageBlockinput).select('news');
    }

    selectCalendarOption() {
        cy.get(pageBlockinput).select('calendar');
    }

    optionHeaderIsVisible(header) {
        cy.xpath(header).should('be.visible');
    }

    optionHeaderIsNotVisible(text) {
        cy.get(optionsBlock).should('not.contain.text', text);
    }

    clickCloseOption(close) {
        cy.get(close).click()
    }

    selectDocumensOption() {
        cy.get(pageBlockinput).select('documents');
    }

    selectSpentTimeOption() {
        cy.get(pageBlockinput).select('timelog');
    }

    clickAddButton() {
        cy.get(addButton).click();
    }

    clickBackButton() {
        cy.get(backButton).click();
    }

    checkStatusCheckbox() {
        cy.get(statusCheckBox).click();
    }

    statusCheckBoxIsChecked() {
        cy.get(statusCheckBox).should('be.checked');
        
    }

    statusDropdownIsVisible() {
        cy.get(statusDropdownMenu).should('be.visible');
    }

    statusDropdownIsNotVisible() {
        cy.get(statusDropdownMenu).should('not.be.visible');
    }

    statusCheckBoxIsNotVisible() {
        cy.get(statusCheckBox).should('not.be.checked');
    }



    checkAuthorCheckbox() {
        cy.get(authorCheckBox).click();
    }

    authorDropdownIsVisible() {
        cy.get(authorsOperatorDropdownMenu).should('be.visible');
        cy.get(authorsValuesDropdownMenu).should('be.visible');
    }

    authorDropdownIsNotVisible() {
        cy.get(authorsOperatorDropdownMenu).should('not.be.visible');
        cy.get(authorsValuesDropdownMenu).should('not.be.visible');
    }

    selectStatusOption(opt) {
        cy.get(statusDropdownMenu).select(opt);
    }

    selectAuthor(aut) {
        cy.get(authorsValuesDropdownMenu).select(aut)
    }

    clickApplyButton() {
        cy.xpath(applyButton).click();
    }

    rohloffLatestIssueIsVisible() {
        cy.get(rohlofLatestIssue).should('be.visible');
    }

    rohloffLatestIssueIsNotVisible() {
        cy.get(rohlofLatestIssue).should('not.be.visible');
    }

    

    selectAuthorsOperatorsOption(opt) {
        cy.get(authorsOperatorDropdownMenu).select(opt);
    }



}
export default MyPage