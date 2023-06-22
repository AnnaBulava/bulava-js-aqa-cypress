/// <reference types="Cypress" />

import { products } from "../test-data/products";
import OurProducts from "../pages/our-products";

const ourProducts = new OurProducts();

describe('Our Products', () =>  {
  beforeEach(() => {
    ourProducts.openOurProducts();//TODO: Check it!!!
  })
  products.forEach(product => {
    it(`Open the page and verify the product ${product.title}`, () => {
      ourProducts.verifyProduct(product);
    })
  })

  it('Verify the modal dialog', () => {
    ourProducts.getModalDialog().should('exist');
    ourProducts.verifyModalText();
    ourProducts.verifyModalAppearanceAndButtons();
  });
});
