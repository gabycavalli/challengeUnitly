import { allLocators, cart } from "../fixtures/allLocators";

export const getProductPrice = (product) => {
  cy.get(product)
    .invoke("text")
    .then((text) => {
      const price1 = text.trim(); // Elimina espacios en blanco alrededor del texto
      cy.log(`El precio es: ${price1}`);
    });
};

export const deleteProduct = () => {
  cy.get(cart.cartItems).then((productList) => {
    const productCount = productList.length; // Obtener la cantidad de productos en el carrito

    for (let i = 1; i <= productCount + 1; i++) {
      cy.get(`#product-${i} > .cart_delete > .cart_quantity_delete`).click();
    }
    cy.log(productCount);
  });
};
