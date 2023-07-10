/// <reference types="Cypress" />

class HomePage {
    static openHomePage() {
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/index.html')
    }

    static get getContactUsButton() {
        return cy.xpath('//a[@href="../Contact-Us/contactus.html"]');
    }
    
    static get getCarousel() {
        return cy.get('#carousel-example-generic')
    }

    static get getChevronLeft() {
        return cy.xpath('//a[@data-slide="prev"]');
    }

    static clickChevronLeft() {
        this.getChevronLeft().click();
    }

    static get getChevronRight() {
        return cy.xpath('//a[@data-slide="next"]');
    }

    static clickChevronRight() {
        this.getChevronRight().click();

    }

    static get getCarouselIndicators() {
        return cy.xpath('//ol[@class="carousel-indicators"]');
    }

    static getIndicatorByIndex(index) {
        return cy.xpath('//ol//li').eq(index);
    }

    static get getCarouselItemActive() {
        return cy.xpath('//div[@class="item active"]');
    }

    static getImageByIndex(index) {
        return cy.xpath('//div/img[@class="slide-image"]').eq(index);
    }

    static get getActiveNavItem() {
        return cy.xpath('//li[@class="active"]/a[@href="index.html"]');
    }

    static get getWhoAreWeContainer(){
        return cy.xpath('(//div[@class="row"])[2]/div[1]');
    }

    static get getWhoAreWeTitle() {
        return cy.contains('Who Are We?');
    }

    static get getFindOutMoreButton() {
        return cy.get('#button-find-out-more');
    }

    static clickFindOutMoreButton() {
        this.getFindOutMoreButton().click();
    }

    static get getWelcomeModal() {
        return cy.xpath('//div[@class="modal-dialog modal-md"]');
    }

    static get getModalTitle() {
        return cy.xpath('//h4[@class="modal-title"]');
    }

    static get  getModalBody() {
        return cy.xpath('//div[@class="modal-body"]/p');
    }

    static get getModalCloseIcon() {
        return cy.xpath('//button[@class="close"]');
    }

    static clickModalCloseIcon() {
        this.getModalCloseIcon().click();
    }

    static get getModalFindOutMoreButton() {
        return cy.xpath('//div[@class="modal-footer"]/button[(text()="Find Out More")]');
    }

    static clickModalFindOutMoreButton() {
        this.getModalFindOutMoreButton().click();
    }

    static get getModalCloseButton() {
        return cy.xpath('//div[@class="modal-footer"]/button[(text()="Close")]');
    }

    static clickModalCloseButton() {
        this.getModalCloseButton().click();
    }

    static get getWhyChooseUsContainer(){
        return cy.xpath('(//div[@class="row"])[2]/div[3]');
    }
    
    static get getWhyChooseUsTitle() {
        return cy.contains('Why Choose Us?');
    }

    static get getGreatServiceContainer(){
        return cy.xpath('(//div[@class="row"])[2]/div[2]');
    }
    
    static get getGreatServiceTitle() {
        return cy.contains('GREAT SERVICE!');
    }

    static get getGreatServiceStars() {
        return cy.xpath('(//div[@class="caption"])[2]/div[@class="div-star"]').children();
    }

    static get getExcellentCustomerServiceContainer() {
        return cy.xpath('(//div[@class="row"])[2]/div[4]');
    }
    
    static get getExcellentCustomerServiceTitle() {
        return cy.contains('Excellent Customer Service!');
    }

    static get getExcellentCustomerServiceStars() {
        return cy.xpath('(//div[@class="caption"])[4]/div[@class="div-star"]').children();
    }

    static verifyCarouselHasRequiredComponents() {
        this.getCarousel().should('exist');
        this.getCarouselItemActive().should('exist');
        this.getImageByIndex(0).should('be.visible');
        this.getCarouselIndicators().should('exist');
        this.getChevronLeft().should('exist');
        this.getChevronRight().should('exist')
    }

    static verifyActiveImagesChange() {
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

    static verifyWhoWeAreContainerContent() {
        this.getWhoAreWeContainer().should('not.be.empty');
        this.getWhoAreWeTitle().should('have.text', 'Who Are We?')
        this.getFindOutMoreButton().should('exist');
    }

    static verifyWelcomeModalContent() {
        this.clickFindOutMoreButton();
        this.getWelcomeModal().should('be.visible'); //checking the visibility and content of the "Welcome" modal // create "Open modal" + check its content
        this.getModalTitle().should('have.text', 'Welcome to webdriveruniversity.com'); //move to test data
        this.getModalBody().should('have.text', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
        this.getModalCloseIcon().should('exist');
        this.getModalFindOutMoreButton().should('exist');
        this.getModalCloseButton().should('exist');
    }
    
    static verifyInteractionWithWelcomeModal() {
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

    static verifyWhyChooseUsContainerContent() {
        this.getWhyChooseUsContainer().should('not.be.empty');
        this.getWhyChooseUsTitle().should('exist');
    }

    static verifyGreatServiceContainerContent() {
        this.getGreatServiceContainer().should('not.be.empty');
        this.getGreatServiceTitle().should('exist');
        this.getGreatServiceStars().should('have.length', 5);
    }

    static verifyExcellentServiceContainerContent() {
        this.getExcellentCustomerServiceContainer().should('not.be.empty');
        this.getExcellentCustomerServiceTitle().should('exist');
        this.getExcellentCustomerServiceStars().should('have.length', 5);
    }

    static getButtonName(name){
        return cy.xpath(`//button[contains(text(), '${name}')]`)
    }

};

export default HomePage
