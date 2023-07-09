export class DropdownPage{
    visit() {
        return cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    }

    getDivByTitle(text) {
        return cy.xpath(`//div[@class="thumbnail"]/*[contains(text(), '${text}')]`)
    }

    getDropdownById(id) {
        return cy.xpath(`//div[@class="thumbnail"]/*[contains(text(), 'Dropdown Menu(s)')]/..//select[@id='dropdowm-menu-${id}']`)
    }

    verifyAllDropdownsOptions(arrayOfValues, dropdownId) {
        arrayOfValues.forEach(value => {
            //let el = value.toLowerCase().trim() - can be used to seitch all the array elements to lowercase if necessary; and to remove spaces
            this.getDropdownById(dropdownId).should('exist').select(value).invoke('val').should('eq', value)
        })
    }

    getCheckboxDiv() {
        return cy.xpath(`//div[@id='checkboxes']`)
    }

    getOption() {
        return cy.get("input[value='option-1']")
    }

    getOption() {
        return cy.get("input[value='option-2']")
    }

    getOption() {
        return cy.get("input[value='option-3']")
    }

    getOption() {
        return cy.get("input[value='option-4']")
    }

    getAllCheckboxes() {
        return cy.get(`input[type='checkbox']`);
    }

    getRadioButtonsForm() {
        return cy.get('form[id="radio-buttons"]')
    }

    getAllRadioButtons() {
        return cy.xpath(`//form[@id='radio-buttons']//input[@type='radio']`)
    }

    getAllSelectedDisabledRadioButtons() {
        return cy.xpath(`//form[@id='radio-buttons-selected-disabled']//input[@type='radio']`)
    }

    getFruitSelects() {
        return cy.xpath(`//select[@id="fruit-selects"]`);
    }

    verifyAllFruitSelectsOptions(arrayOfValues) {
        arrayOfValues.forEach(value => {
            this.getFruitSelects().should('exist').select(value).invoke('val').should('eq', value)
        })
    }


}

export default DropdownPage