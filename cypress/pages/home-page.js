/// <reference types="Cypress" />

class HomePage {
    openHomePage() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html')
    }

    getCarousel() {
        return cy.get('#carousel-example-generic')
    }

    getChevronLeft() {
        return cy.get('.glyphicon-chevron-left');
    }

    clickChevronLeft() {
        this.getChevronLeft().click();
    }

    getChevronRight() {
        return cy.get('.glyphicon-chevron-right');
    }

    clickChevronRight() {
        this.getChevronRight().click();

    }

    getCarouselIndicators() {
        return cy.get('.carousel-indicators');
    }

    getIndicatorByIndex(index) {
        return cy.get('.carousel-indicators li').eq(index);
    }

    getCarouselItemActive() {
        return cy.get('.item.active');
    }

    getImageByIndex(index) {
        return cy.get('.slide-image').eq(index);
    }

    getActiveNavItem() {
        return cy.get('li.active > a');
    }

    getWhoAreWeContainer(){
        return cy.get('.thumbnail').eq(0);
    }

    getWhoAreWeTitle() {
        return cy.contains('Who Are We?');
    }

    getFindOutMoreButton() {
        return cy.get('#button-find-out-more');
    }

    clickFindOutMoreButton() {
        this.getFindOutMoreButton().click();
    }

    getWelcomeModal() {
        return cy.get('.modal-dialog');
    }

    getModalTitle() {
        return cy.get('.modal-title');
    }

    getModalBody() {
        return cy.get('.modal-body p');
    }

    getModalCloseIcon() {
        return cy.get('button.close');
    }

    clickModalCloseIcon() {
        this.getModalCloseIcon().click();
    }

    getModalFindOutMoreButton() {
        return cy.get('.btn-default').contains('Find Out More');
    }

    clickModalFindOutMoreButton() {
        this.getModalFindOutMoreButton().click();
    }

    getModalCloseButton() {
        return cy.get('.btn-default').contains('Close');
    }

    clickModalCloseButton() {
        this.getModalCloseButton().click();
    }

    getWhyChooseUsContainer(){
        return cy.get('.thumbnail').eq(2);
    }
    
    getWhyChooseUsTitle() {
        return cy.contains('Why Choose Us?');
    }

    getGreatServiceContainer(){
        return cy.get('.thumbnail').eq(1);
    }
    
    getGreatServiceTitle() {
        return cy.contains('GREAT SERVICE!');
    }

    getGreatServiceStars() {
        return cy.get('.div-star').eq(0).children();
    }

    getExcellentCustomerServiceContainer() {
        return cy.get('.thumbnail').eq(3);
    }
    
    getExcellentCustomerServiceTitle() {
        return cy.contains('Excellent Customer Service!');
    }

    getExcellentCustomerServiceStars() {
        return cy.get('.div-star').eq(1).children();
    }

    verifyCarouselHasRequiredComponents() {
        this.getCarousel().should('exist');
        this.getCarouselItemActive().should('exist');
        this.getImageByIndex(0).should('be.visible');
        this.getCarouselIndicators().should('exist');
        this.getChevronLeft().should('exist');
        this.getChevronRight().should('exist')
    }

    verifyActiveImagesChange() {
        this.getIndicatorByIndex(0).should('have.class', 'active');
        this.clickChevronLeft();
        this.getImageByIndex(2).should('be.visible');
        this.getIndicatorByIndex(2).should('have.class', 'active');
        cy.wait(3000);
        this.clickChevronRight();
        cy.wait(3000);
        this.clickChevronRight();
        this.getImageByIndex(1).should('be.visible');
        this.getIndicatorByIndex(1).should('have.class', 'active');
        this.getCarouselItemActive().should('exist');
    }

    verifyWhoWeAreContainerContent() {
        this.getWhoAreWeContainer().should('not.be.empty');
        this.getWhoAreWeTitle().should('have.text', 'Who Are We?')
        this.getFindOutMoreButton().should('exist');
    }

    verifyWelcomeModalContent() {
        this.clickFindOutMoreButton();
        this.getWelcomeModal().should('be.visible'); //checking the visibility and content of the "Welcome" modal // create "Open modal" + check its content
        this.getModalTitle().should('have.text', 'Welcome to webdriveruniversity.com'); //move to test data
        this.getModalBody().should('have.text', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
        this.getModalCloseIcon().should('exist');
        this.getModalFindOutMoreButton().should('exist');
        this.getModalCloseButton().should('exist');
    }
    
    verifyInteractionWithWelcomeModal() {
        this.clickModalFindOutMoreButton(); //checking the interaction with the modal buttons: Find out more, Close (x2)
        this.getWelcomeModal().should('not.be.visible');
        this.clickFindOutMoreButton();
        this.getWelcomeModal();
        this.clickModalCloseButton();
        this.getWelcomeModal().should('not.be.visible');
        this.clickFindOutMoreButton();
        this.getWelcomeModal();
        this.clickModalCloseIcon();
        this.getWelcomeModal().should('not.be.visible');
    }

    verifyWhyChooseUsContainerContent() {
        this.getWhyChooseUsContainer().should('not.be.empty');
        this.getWhyChooseUsTitle().should('exist');
    }

    verifyGreatServiceContainerContent() {
        this.getGreatServiceContainer().should('not.be.empty');
        this.getGreatServiceTitle().should('exist');
        this.getGreatServiceStars().should('have.length', 5);
    }

    verifyExcellentServiceContainerContent() {
        this.getExcellentCustomerServiceContainer().should('not.be.empty');
        this.getExcellentCustomerServiceTitle().should('exist');
        this.getExcellentCustomerServiceStars().should('have.length', 5);
    }

};

export default HomePage
