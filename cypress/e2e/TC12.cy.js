import { home, productPage, cart } from "../fixtures/allLocators";
import { getProductPrice } from "../support/commands";

describe("CART experience", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("Test Case 12: Add Products in Cart", function () {
    const price1 = "Rs. 500";
    const price2 = "Rs. 400";

    // Validate that webpage is available
    cy.request("https://automationexercise.com/").then((response) => {
      expect(response.status).to.eq(200);
      cy.get(home.navBar).should("exist");

      //click on product button
      cy.get(home.productButton).click();

      // Scroll to element
      cy.get(productPage.wrapperProductOne).scrollIntoView();

      // validate that some elements are available
      cy.get(productPage.titleProductOne).should("be.visible");
      cy.get(productPage.textProductOne).should("be.visible");

      //add product one to cart
      cy.get(productPage.addToCartPone).click({
        multiple: true,
        force: true,
      });

      // get price product one
      getProductPrice(productPage.priceProductOne);

      cy.wait(3000);
      // Click on continue shopping
      cy.get(productPage.modal).click();

      // get price product one
      getProductPrice(productPage.priceProductTwo);

      cy.get(productPage.addToCartPtwo).click({
        multiple: true,
        force: true,
      });

      //view cart
      cy.get(productPage.modalViweCart).click();

      cy.wait(3000);

      // Verify that cart have more than one product
      cy.get(cart.cartItems).should("have.length.gt", 0);

      // Check if price of cart is equal to price of product
      cy.get(cart.cartProd1).invoke("text").should("eq", price1); //validar precios en el carrito
      cy.get(cart.cartProd1).invoke("text").should("eq", price1); //validar precios en el carrito
    });
  });
});
