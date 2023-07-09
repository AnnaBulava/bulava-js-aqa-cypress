import { DropdownPage } from "../pages/menus-checkboxes-radio-buttons";
import { dropdown1 } from "../test-data/dropdowns-values";
import { dropdown2 } from "../test-data/dropdowns-values";
import { dropdown3 } from "../test-data/dropdowns-values";
import { fruitSelects } from "../test-data/dropdowns-values";

const dropdown = new DropdownPage();
const dropdownTestData = [{
    array: dropdown1,
    id: 1
}, {
    array: dropdown2,
    id: 2
}, {
    array: dropdown3,
    id: 3
}]

describe('Dropdowns, Checkboxes, Radio buttons', () => {
    it('Open the page and verify all dropdowns, checkboxes, radio buttons sections are present', () => {
        dropdown.visit();
        dropdown.getDivByTitle('Dropdown Menu(s)').should('exist');
        dropdown.getDivByTitle('Checkboxe(s)').should('exist');
        dropdown.getDivByTitle('Radio Button(s)').should('exist'); //a forEach function may be used to shorten the test for Titles
        dropdown.getDivByTitle('Selected & Disabled').should('exist');
    })
    
    it('Verify all dropdowns options', () => {
        dropdown.visit();
        dropdownTestData.forEach(data => {
            dropdown.verifyAllDropdownsOptions(data.array, data.id)
        })
        //dropdown.verifyAllDropdownsOptions(dropdown1, 1);
        //dropdown.verifyAllDropdownsOptions(dropdown2, 2);
        //dropdown.verifyAllDropdownsOptions(dropdown3, 3);
    })

    it('Verify that checkboxes can be checked and unchecked', () => {
        dropdown.visit();
        dropdown.getOption().click().should('be.checked');
        dropdown.getOption().check().should('be.checked');
        dropdown.getOption().uncheck().should('not.be.checked');
        dropdown.getOption().click().should('be.checked');
        dropdown.getAllCheckboxes().each($el=>{
            let el = $el
            cy.wrap(el).check().should('be.checked')//cy.wrap lets using Cypress methods with what is wrapped
        })
    })

    it('Verify that radio buttons can be selected', () => {
        dropdown.visit();
        dropdown.getAllRadioButtons().check('orange').should('be.checked');
        cy.get('input[value="yellow"]').should('not.be.checked');
        //let colorArray = ['green', 'blue', 'yellow', 'purple']
        cy.get('body').document(doc => {
            const test = doc.querySelector('#button2')}) //we can interact with the selector on the Document level
    })

    it('Verify that active options can be selected and that disabled options are displayed', () => {
        dropdown.visit();
        dropdown.getAllSelectedDisabledRadioButtons().check('pumpkin').should('be.checked');
        cy.get('input[value="lettuce"]').should('not.be.checked');
        cy.get('input[value="cabbage"]').should('be.disabled');
        dropdown.verifyAllFruitSelectsOptions(fruitSelects);
        cy.xpath(`//select[@id="fruit-selects"]//option[@value="orange"]`).should('be.disabled');
    })
})
