var templates = {};

templates.catalogBlock = [
  '<div class="catalogProductBlock">',
  '<div class="catalogProductBlockImage">',
  '<%= productThumb %>',
  '</div>',
  '<div class="catalogProductBlockInfo">',
  '<div class="catalogProductBlockTitle">',
  '<%= productTitle %>',
  '</div>',
  '<div class="catalogProductBlockPrice">',
  '$<%= productPrice %>',
  '</div></div></div>',
].join("");

templates.productPage = [
  '<div id="productPageTitle">',
    '<h2><%= productTitle %></h2>',
  '</div>',
  '<div id="productPageContent">',
    '<div id="productPageLeft">',
      '<div id="productPageLeftBlock">',
        '<%= productImage %>',
      '</div>',
    '</div>',
    '<div id="productPageRight">',
      '<div id="productPageRightBlock">',
        '<div id="productDescriptionBlock">',
          '<%= productDescription %>',
        '</div>',
        '<div id="productPriceBlock">',
          '$<%= productPrice %>',
        '</div>',
        '<div id="productCartBlock">',
          '<button id="productAddToCartButton">Add To Cart</button>',
        '</div>',
      '</div>',
    '</div>',
  '</div>'
].join("");

templates.cartItem = [
  '<div class="cartItem" data-id="<%= _id %>">',
    '<div class="cartItemLeft">',
      '<div class="cartItemImage">',
        '<%= productImage %>',
      '</div>',
    '</div>',
    '<div class="cartItemMiddle">',
      '<div class="cartItemTitle">',
        '<%= productTitle %>',
      '</div>',
    '</div>',
    '<div class="cartItemRight">',
      '<div class="cartItemPriceBlock">',
        '$<%= productPrice %>',
      '</div>',
      '<div class="cartItemDeleteBlock">',
        '<div class="cartItemDelete">',
          '<i class="fa fa-times"></i>',
        '</div>',
      '</div>',
    '</div>',
  '</div>'
].join("");

templates.headerRightBlock = [
  '<div id="headerRightBlock2Inner">',
    '<div id="usernameBlock">',
      '<%= username %>',
    '</div>',
    '<div id="cartBlock">',
      '<div id="cartBlockImage">',
        '<i class="fa fa-shopping-cart"></i>',
      '</div>',
      '<div id="cartBlockAmount">',
        '<%= cartAmount %>',
      '</div>',
    '</div>',
  '</div>'
].join("");
