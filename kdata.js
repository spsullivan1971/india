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

var productPage = [
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
  '<button type="button" class="btn btn-success">Proceed to Checkout</button>',
  '</div>',
  '</div>',
  '</div>',
].join("");
