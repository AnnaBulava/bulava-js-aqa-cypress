/// <reference types="Cypress" />

import HomePage from "../pages/home-page";
import { homePageStep } from "../steps/home-page-step";

const homePage = new HomePage();

//винести методи (кліки) в page object
//дописати перевірки для індикаторів - чи стають вони активними

describe('Home Page', () => {
  it(`Open the page and verify the carousel`, () => {
    homePageStep.openHomePage();
    homePageStep.verifyActiveNavItem();
    homePageStep.verifyCarouselHasRequiredComponents();
    homePageStep.verifyActiveImagesChange();
  })

  it(`Open the page and verify the "Who are we?" container`, () => {
    homePageStep.openHomePage();
    homePageStep.verifyWhoWeAreContainerContent();
    homePageStep.verifyWelcomeModalContent();
    homePageStep.verifyInteractionWithWelcomeModal();
  })

  it(`Open the page and verify the "Why choose Us?" container`, () => {
    homePageStep.openHomePage();
    homePageStep.verifyWhyChooseUsContainerContent();
  })

  it(`Open the page and verify the "GREAT SERVICE!" container`, () => {
    homePageStep.openHomePage();
    homePageStep.verifyGreatServiceContainerContent();
  })

  it(`Open the page and verify the "Excellent Customer Service!" container`, () => {
    homePageStep.openHomePage();
    homePageStep.verifyExcellentServiceContainerContent();
  })

  it(`Experiment with finding a button`, () => {
    homePageStep.openHomePage();
    HomePage.getButtonName('Find Out More').should('have.text', 'Find Out More')
  })
})