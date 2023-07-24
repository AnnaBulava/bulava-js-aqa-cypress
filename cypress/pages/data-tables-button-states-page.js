export class DataTablesButtonStatesPage {
    static visit() {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    }

    static get getFirstTableRows() {
        return cy.get('#t01>tbody>tr')
    }

    static get getFirstTableColumns() {
        return cy.get('#t01>tbody>tr:eq(0)>th')
    }

    static get getSecondTableRows() {
        return cy.get('#t02>tbody>tr')
    }

    static get getSecondTableColumns() {
        return cy.get('#t02>tbody>tr:eq(0)>th')
    }

    static get getFirstNameField() {
        return cy.xpath(`//input[@name='firstname']`);
    }

    static get getLastNameField() {
        return cy.xpath(`//input[@name='lastname']`);
    }

    static get getTextArea() {
        return cy.xpath(`//textarea[@rows='10']`);
    }

    static get getBreadcrumbTitle() {
        return cy.xpath(`//h2[contains(text(),'Breadcrumb')]`)
    }

    static get getBreadcrumbs() {
        return cy.xpath(`//ol[@class='breadcrumb traversal-breadcrumb']`);
    }

    static get getBadgesTitle() {
        return cy.xpath(`//h2[contains(text(),'Badges')]`);
    }

    static get getBadgesListGroup() {
        return cy.xpath(`//ul[@class='list-group']`);
    }

    static get getPaginationTitle() {
        return cy.xpath(`//h2[contains(text(),'Pagination')]`);
    }

    static get getPaginationButtons() {
        return cy.xpath(`//ul[@class='pagination traversal-pagination']//li//a`);
    }

    static get getTableTitle() {
        return cy.xpath(`//h2[contains(text(),'Table')]`);
    }

    static get getSingleTableHead() {
        return cy.xpath(`//tr[@class='bg-primary']//th`)
    }
    
    static get getSingleTableRows() {
        return cy.xpath(`//table[@class='table table-light traversal-table']//tbody//tr`)
    }

    static get getSingleTableColumns() {
        return cy.xpath(`//table[@class='table table-light traversal-table']//tbody//tr`)
    }

    static get getButtonsAndStatesTitle() {
        return cy.xpath(`//h2[contains(text(),'Buttons & States')]`);
    }

    static get getTraversalButtons() {
        return cy.xpath(`//div[@class='traversal-buttons']`);
    }

    static get getTraversalButtonStates() {
        return cy.xpath(`//div[@class='traversal-button-states']`);
    }

    static get getTraversalButtonOtherStates() {
        return cy.xpath(`//div[@data-toggle='buttons']`);
    }

    static get getRandomTextTitle() {
        return cy.xpath(`//h2[contains(text(),'Random Text')]`);
    }

    static get getParagraphWithMarkedText() {
        return cy.xpath(`//div[@class='traversal-marked-text']//p`);
    }

    static get getMarkedText() {
        return cy.xpath(`//mark[@class='traversal-mark']`);
    }

    static get getQuoteMainText() {
        return cy.xpath(`//blockquote//p`);
    }

    static get getQuoteFooterText() {
        return cy.xpath(`//blockquote//footer`);
    }

    static get getCitedText() {
        return cy.xpath(`//cite[@class='traversal-cite']`);
    }

    static get getListsTitle() {
        return cy.xpath(`//h2[contains(text(),'Lists')]`);
    }

    static get getDrinksList() {
        return cy.xpath(`//ul[@class='traversal-drinks-list']//li`);
    }

    static get getFoodListWithClass() {
        return cy.xpath(`//ul[@class='traversal-food-list']`);
    }
    
    static get getFoodListWithoutClass() {
        return cy.xpath(`//ul[@class='traversal-food-list']//li`);
    }

    static get getJobsList() {
        return cy.xpath(`//ul[@class='traversal-job-list']`);
    }

}

export default DataTablesButtonStatesPage