/// <reference types="Cypress" />

import HomePage from "../pages/home-page";

const homePage = new HomePage();

//винести методи (кліки) в page object
//дописати перевірки для індикаторів - чи стають вони активними

describe('Home Page', () => {
  it.only(`Open the page and verify the carousel`, () => {
    homePage.openHomePage();
    homePage.getActiveNavItem().should('have.text', 'Home');
    homePage.getCarousel().should('exist');
    homePage.getCarouselItemActive().should('exist');
    homePage.getImageByIndex(0).should('be.visible');
    homePage.getCarouselIndicators().should('exist');
    homePage.getIndicatorByIndex(0).should('have.class', 'active');
    homePage.getChevronLeft().should('exist');
    homePage.getChevronRight().should('exist');
    homePage.clickChevronLeft();
    homePage.getImageByIndex(2).should('be.visible');
    homePage.getIndicatorByIndex(2).should('have.class', 'active');
    cy.wait(3000);
    homePage.clickChevronRight();
    cy.wait(3000);
    homePage.clickChevronRight();
    homePage.getImageByIndex(1).should('be.visible');
    homePage.getIndicatorByIndex(1).should('have.class', 'active');
    homePage.getCarouselItemActive().should('exist');
  })

  it(`Open the page and verify the "Who are we?" container`, () => {
    homePage.openHomePage();
    homePage.getWhoAreWeContainer().should('not.be.empty');
    homePage.getWhoAreWeTitle().should('have.text', 'Who Are We?') //checking the content of the "Who are we? container
    homePage.getFindOutMoreButton().should('exist');
    homePage.clickFindOutMoreButton();
    homePage.getWelcomeModal().should('be.visible'); //checking the visibility and content of the "Welcome" modal
    homePage.getModalTitle().should('have.text', 'Welcome to webdriveruniversity.com');
    homePage.getModalBody().should('have.text', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
    homePage.getModalCloseIcon().should('exist');
    homePage.getModalFindOutMoreButton().should('exist');
    homePage.getModalCloseButton().should('exist');
    homePage.clickModalFindOutMoreButton(); //checking the interaction with the modal buttons: Find out more, Close (x2)
    homePage.getWelcomeModal().should('not.be.visible');
    homePage.clickFindOutMoreButton();
    homePage.getWelcomeModal();
    homePage.clickModalCloseButton();
    homePage.getWelcomeModal().should('not.be.visible');
    homePage.clickFindOutMoreButton();
    homePage.getWelcomeModal();
    homePage.clickModalCloseButton();
    homePage.getWelcomeModal().should('not.be.visible');
  })

  it(`Open the page and verify the "Why choose Us?" container`, () => {
    homePage.openHomePage();
    homePage.getWhyChooseUsContainer().should('not.be.empty');
    homePage.getWhyChooseUsTitle().should('exist');
  })

  it(`Open the page and verify the "GREAT SERVICE!" container`, () => {
    homePage.openHomePage();
    homePage.getGreatServiceContainer().should('not.be.empty');
    homePage.getGreatServiceTitle().should('exist');
    homePage.getGreatServiceStars().should('have.length', 5);
  })

  it(`Open the page and verify the "Excellent Customer Service!" container`, () => {
    homePage.openHomePage();
    homePage.getExcellentCustomerServiceContainer().should('not.be.empty');
    homePage.getExcellentCustomerServiceTitle().should('exist');
    homePage.getExcellentCustomerServiceStars().should('have.length', 5);
  })
})