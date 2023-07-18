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

    static get getChevronRight() {
        return cy.xpath('//a[@data-slide="next"]');
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

    static get getModalFindOutMoreButton() {
        return cy.xpath('//div[@class="modal-footer"]/button[(text()="Find Out More")]');
    }

    static get getModalCloseButton() {
        return cy.xpath('//div[@class="modal-footer"]/button[(text()="Close")]');
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

    static getButtonName(name){
        return cy.xpath(`//button[contains(text(), '${name}')]`)
    }

};

export default HomePage
