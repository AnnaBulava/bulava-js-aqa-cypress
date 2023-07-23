import DataTablesButtonStatesPage from "../pages/data-tables-button-states-page";
import { firstTableRowsData } from "../test-data/tables-data";
import { secondTableRowsData } from "../test-data/tables-data";
import { singleTableColumnsTitles } from "../test-data/tables-data";
import { singleTableRowsData } from "../test-data/tables-data";
import { faker } from '@faker-js/faker';
import { LoremIpsum } from "lorem-ipsum";
import { GeneralStep } from "./general-step";
import WebdriverUniversity from "../pages/common-website-components-page";

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

let textAreaInput = lorem.generateSentences(5);

export class DataTablesButtonStatesStep extends GeneralStep{
    visit () {
        DataTablesButtonStatesPage.visit();
        cy.url().should('include', 'Data-Table')
    }

    verifyHeaderIsDisplayedWhenUserIsAtTheBottom() {
        cy.scrollTo('bottom');
        WebdriverUniversity.getWebsiteHeader.should('be.visible');
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

    checkFirstNameTextField() {
        DataTablesButtonStatesPage.getFirstNameField.type(firstName).should('have.value', firstName);
    }

    checkLastNameTextField() {
        DataTablesButtonStatesPage.getLastNameField.type(lastName).should('have.value', lastName);
    }

    checkTextArea() {
        DataTablesButtonStatesPage.getTextArea.type(textAreaInput).invoke('val').should($el => expect($el.trim()).to.equal(textAreaInput));
    }

    checkBreadcrumbsTitleIsVisible() {
        DataTablesButtonStatesPage.getBreadcrumbTitle.should('be.visible');
    }

    checkBreadcrumbsText() {
        DataTablesButtonStatesPage.getBreadcrumbs.children().then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText)
            )
        }).should('deep.equal', ['Home', 'About Us', 'Contact Us']);
    }

    checkActiveBreadcrumbsElement() {
        DataTablesButtonStatesPage.getBreadcrumbs.children('.active').should('contain', 'Contact Us');
    }

    checkBadgesTitleIsVisible() {
        DataTablesButtonStatesPage.getBadgesTitle.should('be.visible');
    }

    checkListGroupItems() {
        DataTablesButtonStatesPage.getBadgesListGroup.children().then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText.trim().replace(/[\n\t]/g, ', '))
            )
        }).should('deep.equal', [`Today's Deals, 5`, 'All Products, 20']);
    }

    checkPaginationTitleIsVisible() {
        DataTablesButtonStatesPage.getPaginationTitle.should('be.visible');
    }

    checkPaginationLength() {
        DataTablesButtonStatesPage.getPaginationButtons.should('have.length', 7);
    }

    // checkTablesPageIsStillOpenOnClickingPaginationButton() {
    //     DataTablesButtonStatesPage.getPaginationButtons.invoke('attr', 'href', 'http://www.webdriveruniversity.com/Data-Table/index.html#').each(($el) => {
    //         cy.wrap($el).click().url().should('contains', 'Data-Table');
    //     })
    // }

    checkTablesPageIsStillOpenOnClickingPaginationButton() {
        DataTablesButtonStatesPage.getPaginationButtons.invoke('attr', 'href', 'http://www.webdriveruniversity.com/Data-Table/index.html#').then(($el) => {
            const links = $el.toArray()
            return Cypress._.sample(links)    
    }).then(($el) => {
        expect(Cypress.dom.isJquery($el), 'jQuery element').to.be.true
        //cy.log($el)
    }).click().url().should('contains', 'Data-Table');
    }

    //taken the code snippet for picking a random item here - https://glebbahmutov.com/cypress-examples/recipes/click-random-element.html#click-a-single-picked-list-item
    //Why does cy.log not work here (undefined)?

    checkSingleTableTitleIsVisible() {
        DataTablesButtonStatesPage.getTableTitle.should('be.visible');
    }
    
    checkSingleTableRowsCount() {
        DataTablesButtonStatesPage.getSingleTableRows.should('have.length', 3)
    }

    checkSingleTableColumnsCount() {
        DataTablesButtonStatesPage.getSingleTableColumns.should('have.length', 3)
    }

    checkSingleTableColumnsTitles() {
        DataTablesButtonStatesPage.getSingleTableHead.then(($els) => {
            return (
                Cypress.$.makeArray($els).map((el) => el.innerText)
            )
        }).should('deep.equal', singleTableColumnsTitles);
    }
    
    checkSingleTableRowsContent() {

        function rowCells(row) {
            return Cypress._.map(row.children, (cell) => cell.innerText)
        }

        DataTablesButtonStatesPage.getSingleTableRows
            .then(rows => Cypress._.map(rows, rowCells))
            .each(($el, index) => {
                expect($el).to.deep.eq(singleTableRowsData[index].row)
            }
            )
    }

    checkButtonsAndStatesTitleIsVisible() {
        DataTablesButtonStatesPage.getButtonsAndStatesTitle.should('be.visible');
    }

    checkTraversalButtonsLength() {
        DataTablesButtonStatesPage.getTraversalButtons.children().should('have.length', 5);
    }

    checkTraversalButtonsStates() {
        DataTablesButtonStatesPage.getTraversalButtons.children().then(($el) => {
            const buttons = $el.toArray()
            return Cypress._.sample(buttons)    
    }).then(($el) => {
        expect(Cypress.dom.isJquery($el), 'jQuery element').to.be.true
    }).click().should('be.focused');
    }

    checkTraversalButtonsNames() {
        DataTablesButtonStatesPage.getTraversalButtons.children().eq(0).should('have.text', 'Link');
        DataTablesButtonStatesPage.getTraversalButtons.children().eq(1).should('have.text', 'Button');
        DataTablesButtonStatesPage.getTraversalButtons.children().eq(2).should('have.value', 'Input');
        DataTablesButtonStatesPage.getTraversalButtons.children().eq(3).should('have.value', 'Submit');
        DataTablesButtonStatesPage.getTraversalButtons.children().eq(4).should('have.value', 'Reset');
    }

    checkTraversalLinkButton() {
        DataTablesButtonStatesPage.getTraversalButtons.children().eq(0).invoke('attr', 'href', 'http://www.webdriveruniversity.com/Data-Table/index.html#').click().url().should('include', 'Data-Table');
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