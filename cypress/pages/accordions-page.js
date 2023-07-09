class AccordionsPage {
    openAccordionsPage() {
        cy.visit('http://www.webdriveruniversity.com/Accordion/index.html')
    }

    getAllAccordions() {
        return cy.xpath(`//button[@class="accordion"]`)
    }

    getAccordionComponents(selector) {
        return cy.xpath(selector)
    }

    verifyAccordionsTitleAndDescription(accordion, index) {
        this.getAccordionComponents(accordion.accordionId).should('be.visible');
        this.getAccordionComponents(accordion.accordionId).should('have.text', accordion.title);
        this.getAccordionComponents(accordion.titleId).click().invoke('text').then($el => $el.trim().replace(/[\n\t]/g, '')).should('eq', accordion.description)
    };

    verifyAccordionsTextDisplayedImmediately(accordion) {
    }

}

export default AccordionsPage