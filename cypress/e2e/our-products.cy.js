/// <reference types="Cypress" />

import { products } from "../test-data/products";
import OurProducts from "../pages/our-products";
import { ourProductsStep } from "../steps/our-products-step";

const ourProducts = new OurProducts();

describe('Our Products', () =>  {
 
  beforeEach(() => {
    ourProductsStep.openOurProducts();
  })

  products.forEach(product => {
    it(`Open the page and verify the product ${product.title}`, () => {
      ourProductsStep.verifyProduct(product);
    })
  })

  it('Verify the modal dialog', () => {
    ourProductsStep.verifyModalDialogExists();
    ourProductsStep.verifyModalText();
    ourProductsStep.verifyModalAppearanceAndButtons();
  });
});
