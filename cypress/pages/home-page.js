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
        cy.get('.glyphicon-chevron-left').click();
    }

    getChevronRight() {
        return cy.get('.glyphicon-chevron-right');
    }

    clickChevronRight() {
        cy.get('.glyphicon-chevron-right').click();

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
        cy.get('#button-find-out-more').click();
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

    getModalFindOutMoreButton() {
        return cy.get('.btn-default').contains('Find Out More');
    }

    clickModalFindOutMoreButton() {
        cy.get('.btn-default').contains('Find Out More').click();
    }

    getModalCloseButton() {
        return cy.get('.btn-default').contains('Close');
    }

    clickModalCloseButton() {
        cy.get('.btn-default').contains('Close').click();
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

};

export default HomePage
