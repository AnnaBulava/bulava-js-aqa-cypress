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

    static get getAllSelectedDisabledRadioButtonsTexts() {
        return cy.xpath(`//form[@id='radio-buttons-selected-disabled']//input`);
    }

    static get getFruitSelects() {
        return cy.xpath(`//select[@id="fruit-selects"]`);
    }

    static get getDisabledRadioButton() {
        return cy.xpath(`//input[@value='cabbage']`);
    }

    static get getDisabledDropdownOption () {
        return cy.xpath(`//select[@id="fruit-selects"]//option[@value="orange"]`)
    }

    static get getLettuceRadioButton() {
        return cy.get('input[value="lettuce"]')   
    }

    static get getYellowRadioButton() {
        return cy.get('input[value="yellow"]');
    }

    static get getDocumentBody() {
        return cy.get('body');
    }

}

export default DropdownPage