import DropdownPage from "../pages/menus-checkboxes-radio-buttons";
import { fruitSelects } from "../test-data/dropdowns-values";

export class DropdownStep {
    visit() {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.url().should('contain', 'Dropdown-Checkboxes-RadioButtons');
    }

    verifyDivTitles() {
        DropdownPage.getDivByTitle('Dropdown Menu(s)').should('exist');
        DropdownPage.getDivByTitle('Checkboxe(s)').should('exist');
        DropdownPage.getDivByTitle('Radio Button(s)').should('exist'); //a forEach function may be used to shorten the test for Titles
        DropdownPage.getDivByTitle('Selected & Disabled').should('exist');
    }

    verifyAllDropdownsOptions(arrayOfValues, dropdownId) {
        arrayOfValues.forEach(value => {
            //let el = value.toLowerCase().trim() - can be used to seitch all the array elements to lowercase if necessary; and to remove spaces
            DropdownPage.getDropdownById(dropdownId).should('exist').select(value).invoke('val').should('eq', value)
        })
    }

    verifyCheckboxesChecking() {
        DropdownPage.getOption.click().should('be.checked');
        DropdownPage.getOption.check().should('be.checked');
        DropdownPage.getOption.uncheck().should('not.be.checked');
        DropdownPage.getOption.click().should('be.checked');
        DropdownPage.getAllCheckboxes.each($el=>{
            let el = $el
            cy.wrap(el).check().should('be.checked')//cy.wrap lets using Cypress methods with what is wrapped
        })
    }

    verifyRadioButtonsSelection() {
        DropdownPage.getAllRadioButtons.check('orange').should('be.checked');
        cy.get('input[value="yellow"]').should('not.be.checked');
        //let colorArray = ['green', 'blue', 'yellow', 'purple']
        cy.get('body').document(doc => {
            const test = doc.querySelector('#button2')}) //we can interact with the selector on the Document level
    }
    
    verifyAllFruitSelectsOptions(arrayOfValues) {
        arrayOfValues.forEach(value => {
            DropdownPage.getFruitSelects.should('exist').select(value).invoke('val').should('eq', value)
        })
    }
   
    verifyActiveAndDisabledOptions() {
        DropdownPage.getAllSelectedDisabledRadioButtons.check('pumpkin').should('be.checked');
        cy.get('input[value="lettuce"]').should('not.be.checked');
        cy.get('input[value="cabbage"]').should('be.disabled');
        DropdownPage.verifyAllFruitSelectsOptions(fruitSelects);
        cy.xpath(`//select[@id="fruit-selects"]//option[@value="orange"]`).should('be.disabled');
    }
}

export const dropdownStep = new DropdownStep();