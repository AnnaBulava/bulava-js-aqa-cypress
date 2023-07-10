import AccordionsPage from "../pages/accordions-page";

export class AccordionsStep {
    openAccordionsPage() {
        cy.visit('http://www.webdriveruniversity.com/Accordion/index.html');
        cy.url().should('include', 'Accordion');
    }

    verifyHeaderText() {
        AccordionsPage.getHeaderText.should('eq', "Click on One of the Accordian Items Below!")
    }

    verifyTextAppearBoxOnPageLoad() {
        AccordionsPage.getTextAppearBox.should('eq', "LOADING.. PLEASE WAIT..")
    }

    verifyAccordionsTitleAndDescription(accordion) {
        AccordionsPage.getAccordionComponents(accordion.accordionId).should('have.text', accordion.title);
        AccordionsPage.getAccordionComponents(accordion.titleId).click().invoke('text').then($el => $el.trim().replace(/[\n\t]/g, '')).should('eq', accordion.description)
    };

    verifyTextAppearBoxAfter5Seconds() {
        AccordionsPage.getTextAppearBox.should('eq', "LOADING COMPLETE.")
    }
}

export const accordionsStep = new AccordionsStep();