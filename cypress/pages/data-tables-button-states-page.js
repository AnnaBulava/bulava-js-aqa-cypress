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

    // static get getRowValueFromTable() {
    //     return cy.get('#t01>tbody>tr>td')
    // }


}

export default DataTablesButtonStatesPage