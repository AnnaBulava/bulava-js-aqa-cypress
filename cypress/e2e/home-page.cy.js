/// <reference types="Cypress" />

import HomePage from "../pages/home-page";

const homePage = new HomePage();

//винести методи (кліки) в page object
//дописати перевірки для індикаторів - чи стають вони активними

describe('Home Page', () => {
  it(`Open the page and verify the carousel`, () => {
    homePage.openHomePage();
    homePage.getActiveNavItem().should('have.text', 'Home');
    homePage.verifyCarouselHasRequiredComponents();
    homePage.verifyActiveImagesChange();
  })

  it(`Open the page and verify the "Who are we?" container`, () => {
    homePage.openHomePage();
    homePage.verifyWhoWeAreContainerContent();
    homePage.verifyWelcomeModalContent();
    homePage.verifyInteractionWithWelcomeModal();
  })

  it(`Open the page and verify the "Why choose Us?" container`, () => {
    homePage.openHomePage();
    homePage.verifyWhyChooseUsContainerContent();
  })

  it(`Open the page and verify the "GREAT SERVICE!" container`, () => {
    homePage.openHomePage();
    homePage.verifyGreatServiceContainerContent();
  })

  it(`Open the page and verify the "Excellent Customer Service!" container`, () => {
    homePage.openHomePage();
    homePage.verifyExcellentServiceContainerContent();
  })

  it.only(`Experiment with finding a button`, () => {
    homePage.openHomePage();
    homePage.getButtonName('Find Out More').should('have.text', 'Find Out More')
  })
})