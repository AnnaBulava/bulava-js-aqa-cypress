class AccordionsPage {
    static openAccordionsPage() {
        cy.visit('http://www.webdriveruniversity.com/Accordion/index.html')
    }

    static get getHeaderText() {
        return cy.xpath(`//div[@id="main-header"]`).invoke('text').then($el => $el.trim().replace(/[\n\t]/g, ''))
    }

    static get getTextAppearBox() {
        return cy.xpath(`//div[@id="text-appear-box"]`).invoke('text').then($el => $el.trim().replace(/[\n\t]/g, ''))
    }
    
    static getAccordionComponents(selector) {
        return cy.xpath(selector)
    }

}

export default AccordionsPage