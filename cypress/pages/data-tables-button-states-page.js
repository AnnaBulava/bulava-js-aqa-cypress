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



    // static get getRowValueFromTable() {
    //     return cy.get('#t01>tbody>tr>td')
    // }


}

export default DataTablesButtonStatesPage