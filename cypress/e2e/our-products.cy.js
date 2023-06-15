/// <reference types="Cypress" />

import OurProducts from "../pages/our-products";
const ourProducts = new OurProducts();

describe('Our Products', () => {
  it(`Open the page and verify the products`, () => {
    ourProducts.openOurProducts();
  });
});