/// <reference types="Cypress" />

import OurProducts from "../pages/our-products";

const ourProducts = new OurProducts();

describe('Our Products', () => {
  it(`Open the page and verify the products`, () => {
    ourProducts.openOurProducts();
    ourProducts.getProducts().should('have.length', 8);
    ourProducts.verifySpecialOffers();
    ourProducts.verifyCameras();
    ourProducts.verifyNewLaptops();
    ourProducts.verifyUsedLaptops();
    ourProducts.verifyGameConsoles();
    ourProducts.verifyComponents();
    ourProducts.verifyDesktopSystems();
    ourProducts.verifyAudio();
  });

  it('Verify the modal dialog', () => {
    ourProducts.openOurProducts();
    ourProducts.getModalDialog().should('exist');
    ourProducts.verifyModalText();
    ourProducts.verifyModalAppearanceAndButtons();
  });
});
