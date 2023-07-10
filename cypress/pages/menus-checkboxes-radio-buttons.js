//import { fruitSelects } from "../test-data/dropdowns-values";

export class DropdownPage{
    static visit() {
        return cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    }

    static getDivByTitle(text) {
        return cy.xpath(`//div[@class="thumbnail"]/*[contains(text(), '${text}')]`)
    }

    static getDropdownById(id) {
        return cy.xpath(`//div[@class="thumbnail"]/*[contains(text(), 'Dropdown Menu(s)')]/..//select[@id='dropdowm-menu-${id}']`)
    }

    static verifyAllDropdownsOptions(arrayOfValues, dropdownId) {
        arrayOfValues.forEach(value => {
            //let el = value.toLowerCase().trim() - can be used to seitch all the array elements to lowercase if necessary; and to remove spaces
            this.getDropdownById(dropdownId).should('exist').select(value).invoke('val').should('eq', value)
        })
    }

    static get getCheckboxDiv() {
        return cy.xpath(`//div[@id='checkboxes']`)
    }

    static get getOption() {
        return cy.get("input[value='option-1']")
    }

    static get getOption() {
        return cy.get("input[value='option-2']")
    }

    static get getOption() {
        return cy.get("input[value='option-3']")
    }

    static get getOption() {
        return cy.get("input[value='option-4']")
    }

    static get getAllCheckboxes() {
        return cy.get(`input[type='checkbox']`);
    }

    static get getRadioButtonsForm() {
        return cy.get('form[id="radio-buttons"]')
    }

    static get getAllRadioButtons() {
        return cy.xpath(`//form[@id='radio-buttons']//input[@type='radio']`)
    }

    static get getAllSelectedDisabledRadioButtons() {
        return cy.xpath(`//form[@id='radio-buttons-selected-disabled']//input[@type='radio']`)
    }

    static get getFruitSelects() {
        return cy.xpath(`//select[@id="fruit-selects"]`);
    }

    static verifyDivTitles() {
        this.getDivByTitle('Dropdown Menu(s)').should('exist');
        this.getDivByTitle('Checkboxe(s)').should('exist');
        this.getDivByTitle('Radio Button(s)').should('exist'); //a forEach function may be used to shorten the test for Titles
        this.getDivByTitle('Selected & Disabled').should('exist');
    }
    
    static verifyAllFruitSelectsOptions(arrayOfValues) {
        arrayOfValues.forEach(value => {
            this.getFruitSelects().should('exist').select(value).invoke('val').should('eq', value);
        }) //stopped working after being moved to Steps
    }

    static verifyCheckboxesChecking() {
        this.getOption().click().should('be.checked');
        this.getOption().check().should('be.checked');
        this.getOption().uncheck().should('not.be.checked');
        this.getOption().click().should('be.checked');
        this.getAllCheckboxes().each($el=>{
            let el = $el
            cy.wrap(el).check().should('be.checked')//cy.wrap lets using Cypress methods with what is wrapped
        })
    }

    static verifyRadioButtonsSelection() {
        this.getAllRadioButtons().check('orange').should('be.checked');
        cy.get('input[value="yellow"]').should('not.be.checked');
        //let colorArray = ['green', 'blue', 'yellow', 'purple']
        cy.get('body').document(doc => {
            const test = doc.querySelector('#button2')}) //we can interact with the selector on the Document level
    }

    // static verifyActiveAndDisabledOptions() {
    //     this.getAllSelectedDisabledRadioButtons().check('pumpkin').should('be.checked');
    //     cy.get('input[value="lettuce"]').should('not.be.checked');
    //     cy.get('input[value="cabbage"]').should('be.disabled');
    //     this.verifyAllFruitSelectsOptions(fruitSelects);
    //     cy.xpath(`//select[@id="fruit-selects"]//option[@value="orange"]`).should('be.disabled');
    // }


}

export default DropdownPage