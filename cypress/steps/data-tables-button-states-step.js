import DataTablesButtonStatesPage from "../pages/data-tables-button-states-page";
import { firstTableRowsData } from "../test-data/tables-data";
import { secondTableRowsData } from "../test-data/tables-data";

export class DataTablesButtonStatesStep {
    visit () {
        DataTablesButtonStatesPage.visit();
        cy.url().should('include', 'Data-Table')
    }

    checkFirstTableRowsCount() {
        DataTablesButtonStatesPage.getFirstTableRows.should('have.length', 4)
    }

    checkFirstTableColumnsCount() {
        DataTablesButtonStatesPage.getFirstTableColumns.should('have.length', 3)
    }

    checkSecondTableRowsCount() {
        DataTablesButtonStatesPage.getSecondTableRows.should('have.length', 4)
    }

    checkSecondTableColumnsCount() {
        DataTablesButtonStatesPage.getSecondTableColumns.should('have.length', 3)
    }

    checkFirstTableRowsContent() {

        function rowCells(row) {
            return Cypress._.map(row.children, (cell) => cell.innerText)
        }

        DataTablesButtonStatesPage.getFirstTableRows
            .then(rows => Cypress._.map(rows, rowCells))
            .each(($el, index) => {
                expect($el).to.deep.eq(firstTableRowsData[index].row)
            }
        )}

    checkSecondTableRowsContent() {

        function rowCells(row) {
            return Cypress._.map(row.children, (cell) => cell.innerText)
        }

        DataTablesButtonStatesPage.getSecondTableRows
            .then(rows => Cypress._.map(rows, rowCells))
            .each(($el, index) => {
                expect($el).to.deep.eq(secondTableRowsData[index].row)
            }
            )
    }

    // checkFirstTableRowsContent() {

    //     function rowCells(row) {
    //         return Cypress._.map(row.children, (cell) => cell.innerText)
    //     }
    //     DataTablesButtonStatesPage.getFirstTable.contains('John').parent()
    //     .then(rows => Cypress._.map(rows, rowCells))
    //         .should('deep.eq', tableRowsData[0].row2)

    //     }
    }


export const dataTablesButtonStatesStep = new DataTablesButtonStatesStep()