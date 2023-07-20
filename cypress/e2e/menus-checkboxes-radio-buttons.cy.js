import { dropdownStep } from "../steps/menus-checkboxes-radio-step";
import { dropdownTestData } from "../test-data/dropdowns-values";

describe('Dropdowns, Checkboxes, Radio buttons', () => {

    beforeEach(() => {
        dropdownStep.visit();
      })

    it(`Open the page and verify the header, page title and footer`, () => {
        dropdownStep.verifyThatHeaderIsDisplayed();
        dropdownStep.verifyHeaderText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')
        dropdownStep.verifyThatFooterIsDisplayed();
        dropdownStep.verifyFooterText();
    })
    
    it('Open the page and verify all dropdowns, checkboxes, radio buttons sections are present', () => {
        dropdownStep.verifyDivTitles();
    })
    
    it('Verify all dropdowns options', () => {
        dropdownTestData.forEach(data => {
            dropdownStep.verifyAllDropdownsOptions(data.array, data.id)
        })
    })

    it('Verify that checkboxes can be checked and unchecked', () => {
        dropdownStep.verifyCheckboxesChecking();
    })

    it('Verify that radio buttons can be selected', () => {
        dropdownStep.verifyRadioButtonsSelection();
    })

    it('Verify that options can be selected and that disabled options are displayed', () => {
        dropdownStep.verifyActiveAndDisabledOptions();
    })
    
})
