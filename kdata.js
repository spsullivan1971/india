var templates = {};

templates.items = [
  '<div class="catalogProductBlock">',
  '<div class="catalogProductBlockImage">',
  '<%= image %>',
  '</div>',
  '<div class="catalogProductBlockInfo">',
  '<%= blockInfo %>'
  '<div class="catalogProductBlockTitle">',
  '<%= productTitle %>',
  '</div>',
  '<div class="catalogProductBlockPrice">',
  '<%= productPrice %>',
  '</div>',
  '</div>',
  '</div>'
].join("");

templates.cartPage = [
  '<div id="cartPageContent">',
  '<div id="cartItemsBlock">',
  '<div class="cartItem">',
  '<div class="cartItemLeft">',
    '<div class="cartItemImage">',
    '<%= image %>',
      '</div>',
    '</div>',
    '<div class="cartItemMiddle">',
      '<div class="cartItemTitle">',
      '<%= productTitle %>',
      '</div>',
    '</div>',
    '<div class="cartItemRight">',
      '<div class="cartItemPrice">',
      '<%= productPrice %>',
      '</div>',
    '</div>',
  '</div>',
  '<div id="cartInfoBlock">',
    '<div id="cartTotalPriceBlock">',
      '<div id="cartTotalPrice">',
      '<%= subtotalPrice %>',
      '</div>',
    '</div>',
    '<div id="cartCheckOutBlock">',
      '<div id="cartCheckOut">',
        '<button id="cartCheckOutButton">Checkout</button>',
      '</div>',
    '</div>',
  '</div>',
  '</div>',
  '</div>'
].join("");
