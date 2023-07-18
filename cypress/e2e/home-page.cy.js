/// <reference types="Cypress" />

import HomePage from "../pages/home-page";
import { homePageStep } from "../steps/home-page-step";

const homePage = new HomePage();

//винести методи (кліки) в page object
//дописати перевірки для індикаторів - чи стають вони активними

describe('Home Page', () => {

  beforeEach(() => {
    homePageStep.openHomePage()
  })

  it(`Open the page and verify the carousel`, () => {
    homePageStep.verifyActiveNavItem();
    homePageStep.verifyCarouselHasRequiredComponents();
    homePageStep.verifyActiveImagesChange();
  })

  it(`Open the page and verify the "Who are we?" container`, () => {
    homePageStep.verifyWhoWeAreContainerContent();
    homePageStep.verifyWelcomeModalContent();
    homePageStep.verifyInteractionWithWelcomeModal();
  })

  it(`Open the page and verify the "Why choose Us?" container`, () => {
    homePageStep.verifyWhyChooseUsContainerContent();
  })

  it(`Open the page and verify the "GREAT SERVICE!" container`, () => {
    homePageStep.verifyGreatServiceContainerContent();
  })

  it(`Open the page and verify the "Excellent Customer Service!" container`, () => {
    homePageStep.verifyExcellentServiceContainerContent();
  })

  it(`Find a button by name`, () => {
    homePageStep.verifyButtonName()
  })
})