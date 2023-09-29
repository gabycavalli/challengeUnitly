import { home, productPage, cart } from "../fixtures/allLocators";
import { deleteProduct } from "../support/commands";

describe("Cart experiences", function () {
  beforeEach(function () {
    // Aquí puedes realizar acciones comunes de configuración antes de cada prueba, como visitar una página.
    cy.visit("/");
  });

  it("Test Case 17: Remove Products From Cart", function () {
    // Validate that webpage is available
    cy.request("https://automationexercise.com/").then((response) => {
      expect(response.status).to.eq(200);
      cy.get(home.navBar).should("exist");

      //click on product button
      cy.get(home.productButton).click();

      // Scroll to element
      cy.get(productPage.wrapperProductOne).scrollIntoView();

      //add product one to cart
      cy.get(productPage.addToCartPone).click({
        multiple: true,
        force: true,
      });

      cy.wait(3000);
      // Click on continue shopping
      cy.get(productPage.modal).click();

      cy.get(productPage.addToCartPtwo).click({
        multiple: true,
        force: true,
      });

      //view cart
      cy.get(productPage.modalViweCart).click();
      cy.wait(3000);

      // delete product

      deleteProduct();

      //cy.get("#product-1 > .cart_delete > .cart_quantity_delete").click();
      //cy.get("#product-2 > .cart_delete > .cart_quantity_delete").click();

      cy.wait(3000);

      // Verify that cart have more than one product
      cy.get(cart.emptyCart).should("contain", "Cart is empty!");
      cy.get(home.header).scrollIntoView();
    });
  });
});
