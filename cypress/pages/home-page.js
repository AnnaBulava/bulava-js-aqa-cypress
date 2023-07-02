/// <reference types="Cypress" />

class HomePage {
    openHomePage() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html')
    }

    getCarousel() {
        return cy.get('#carousel-example-generic')
    }

    getChevronLeft() {
        return cy.xpath('//a[@data-slide="prev"]');
    }

    clickChevronLeft() {
        this.getChevronLeft().click();
    }

    getChevronRight() {
        return cy.xpath('//a[@data-slide="next"]');
    }

    clickChevronRight() {
        this.getChevronRight().click();

    }

    getCarouselIndicators() {
        return cy.xpath('//ol[@class="carousel-indicators"]');
    }

    getIndicatorByIndex(index) {
        return cy.xpath('//ol//li').eq(index);
    }

    getCarouselItemActive() {
        return cy.xpath('//div[@class="item active"]');
    }

    getImageByIndex(index) {
        return cy.xpath('//div/img[@class="slide-image"]').eq(index);
    }

    getActiveNavItem() {
        return cy.xpath('//li[@class="active"]/a[@href="index.html"]');
    }

    getWhoAreWeContainer(){
        return cy.xpath('(//div[@class="row"])[2]/div[1]');
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
        return cy.xpath('//div[@class="modal-dialog modal-md"]');
    }

    getModalTitle() {
        return cy.xpath('//h4[@class="modal-title"]');
    }

    getModalBody() {
        return cy.xpath('//div[@class="modal-body"]/p');
    }

    getModalCloseIcon() {
        return cy.xpath('//button[@class="close"]');
    }

    clickModalCloseIcon() {
        this.getModalCloseIcon().click();
    }

    getModalFindOutMoreButton() {
        return cy.xpath('//div[@class="modal-footer"]/button[(text()="Find Out More")]');
    }

    clickModalFindOutMoreButton() {
        this.getModalFindOutMoreButton().click();
    }

    getModalCloseButton() {
        return cy.xpath('//div[@class="modal-footer"]/button[(text()="Close")]');
    }

    clickModalCloseButton() {
        this.getModalCloseButton().click();
    }

    getWhyChooseUsContainer(){
        return cy.xpath('(//div[@class="row"])[2]/div[3]');
    }
    
    getWhyChooseUsTitle() {
        return cy.contains('Why Choose Us?');
    }

    getGreatServiceContainer(){
        return cy.xpath('(//div[@class="row"])[2]/div[2]');
    }
    
    getGreatServiceTitle() {
        return cy.contains('GREAT SERVICE!');
    }

    getGreatServiceStars() {
        return cy.xpath('(//div[@class="caption"])[2]/div[@class="div-star"]').children();
    }

    getExcellentCustomerServiceContainer() {
        return cy.xpath('(//div[@class="row"])[2]/div[4]');
    }
    
    getExcellentCustomerServiceTitle() {
        return cy.contains('Excellent Customer Service!');
    }

    getExcellentCustomerServiceStars() {
        return cy.xpath('(//div[@class="caption"])[4]/div[@class="div-star"]').children();
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

    getButtonName(name){
        return cy.xpath(`//button[contains(text(), '${name}')]`)
    }

};

export default HomePage
