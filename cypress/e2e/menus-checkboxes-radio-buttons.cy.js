import { DropdownPage } from "../pages/menus-checkboxes-radio-buttons";
import { dropdown1, selectedDisabledRadioButtons } from "../test-data/dropdowns-values";
import { dropdown2 } from "../test-data/dropdowns-values";
import { dropdown3 } from "../test-data/dropdowns-values";
import { fruitSelects } from "../test-data/dropdowns-values";
import { dropdownStep } from "../steps/menus-checkboxes-radio-step";
import { dropdownTestData } from "../test-data/dropdowns-values";

describe('Dropdowns, Checkboxes, Radio buttons', () => {
    it('Open the page and verify all dropdowns, checkboxes, radio buttons sections are present', () => {
        dropdownStep.visit();
        dropdownStep.verifyDivTitles();
    })
    
    it('Verify all dropdowns options', () => {
        dropdownStep.visit();
        dropdownTestData.forEach(data => {
            dropdownStep.verifyAllDropdownsOptions(data.array, data.id)
        })
    })

    it('Verify that checkboxes can be checked and unchecked', () => {
        dropdownStep.visit();
        dropdownStep.verifyCheckboxesChecking();
    })

    it('Verify that radio buttons can be selected', () => {
        dropdownStep.visit();
        dropdownStep.verifyRadioButtonsSelection();
    })

    it('Verify that active options can be selected and that disabled options are displayed', () => {
        dropdownStep.visit();
        dropdownStep.verifyActiveAndDisabledOptions();
        // ;dropdown.getAllSelectedDisabledRadioButtons().check('pumpkin').should('be.checked');
        // cy.get('input[value="lettuce"]').should('not.be.checked');
        // cy.get('input[value="cabbage"]').should('be.disabled');
        // dropdown.verifyAllFruitSelectsOptions(fruitSelects);
        // cy.xpath(`//select[@id="fruit-selects"]//option[@value="orange"]`).should('be.disabled')
    })

    it.only('Test', () => {
        dropdownStep.visit();
        dropdownStep.verifyActiveAndDisabledOptions();
    //     selectedDisabledRadioButtons.forEach(data => {
    //         console.log('data')
    //         console.log(data)
    //         dropdownStep.iterateThroughRadioButtons(data)
    // }) 
})
    
})
