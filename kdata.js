var items = [
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

var cartPage = [
  '<div id="cartPageContent">',
  '<div id="cartItemsBlock">',
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
  '<div class="catalogProductQuantity">',
  '<%= productQuantity %>',
  '</div>',
  '<div class="catalogProductSubtotalPrice">',
  '<%= subtotalPrice %>',
  '</div>',
  '<div class="proceedToCheckout">',
  '<button id="cartCheckOutButton">Checkout</button>',
  '</div>',
  '</div>',
  '</div>',
  '</div>',
  '</div>'
].join("");
