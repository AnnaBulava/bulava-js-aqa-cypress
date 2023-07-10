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

    static verifyHeaderText() {
        this.getHeaderText().should('eq', "Click on One of the Accordian Items Below!")
    }

    static verifyTextAppearBoxOnPageLoad() {
        this.getTextAppearBox().invoke('text').then($el => $el.trim().replace(/[\n\t]/g, '')).should('eq', "LOADING.. PLEASE WAIT..")
    }
    
    static verifyAccordionsTitleAndDescription(accordion) {
        this.getAccordionComponents(accordion.accordionId).should('be.visible');
        this.getAccordionComponents(accordion.accordionId).should('have.text', accordion.title);
        this.getAccordionComponents(accordion.titleId).click().invoke('text').then($el => $el.trim().replace(/[\n\t]/g, '')).should('eq', accordion.description)
    };

    static verifyTextAppearBoxAfter5Seconds() {
        this.getTextAppearBox().should('eq', "LOADING COMPLETE.")
    }

}

export default AccordionsPage