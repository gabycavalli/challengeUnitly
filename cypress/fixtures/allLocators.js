module.exports = {
  home: {
    navBar: "ul.nav.navbar-nav",
    productButton: ".shop-menu > .nav > :nth-child(2) > a",
    header: ".header-middle > .container > .row",
  },
  productPage: {
    wrapperProductOne: ":nth-child(3) > .product-image-wrapper",
    titleProductOne: ".productinfo h2",
    textProductOne: ".productinfo p",
    priceProductOne:
      ":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2",
    priceProductTwo:
      ":nth-child(4) > .product-image-wrapper > .single-products > .productinfo > h2",
    modal: ".modal-content .modal-footer > .btn",
    modalViweCart: ".modal-body > :nth-child(2)",
    addToCartPone: "a[data-product-id='1'].btn.btn-default.add-to-cart",
    addToCartPtwo: "a[data-product-id='2'].btn.btn-default.add-to-cart",
  },
  cart: {
    cartItems: "#cart_items > :nth-child(1)",
    cartProd1: "#product-1 > .cart_total > .cart_total_price",
    cartProd2: "#product-2 > .cart_total > .cart_total_price",
    emptyCart: "#empty_cart",
    delButton: "#product-1 > .cart_delete > .cart_quantity_delete",
  },
};
