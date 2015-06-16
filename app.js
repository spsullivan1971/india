var products = [
  {
    productTitle: 'Blueberry Muffin',
    productDescription: 'A delicious classic! Blueberry muffins are a delicious way to start your day.',
    productPrice: 4.99,
    productImage: '<img src="images/store_large/blueberry_coconut.jpg">',
    productThumb: '<img src="images/thumbs/blueberry_coconut.jpg">'
  },
  {
    productTitle: 'Carrot Cake Muffin',
    productDescription: 'A muffin fit for dessert! Carrot cake muffins go great with milk.',
    productPrice: 5.99,
    productImage: '<img src="images/store_large/carrot_cake_muffin.jpg">',
    productThumb: '<img src="images/thumbs/carrot_cake_muffin.jpg">'
  },
  {
    productTitle: 'Cranberry Orange Muffin',
    productDescription: 'Citrusy and fulfilling! Cranberry and orange muffins are great-tasting and great for you.',
    productPrice: 3.99,
    productImage: '<img src="images/store_large/cranberry_orange.jpg">',
    productThumb: '<img src="images/thumbs/cranberry_orange.jpg">'
  },
  {
    productTitle: 'Chocolate Chip Muffin',
    productDescription: 'A muffin filled with chocolatey goodness! Terrific for when you want diabetes.',
    productPrice: 5.99,
    productImage: '<img src="images/store_large/chocolate_chip.jpg">',
    productThumb: '<img src="images/thumbs/chocolate_chip.jpg">'
  }
];

var $username = 'Guest';

$(document).ready(function(){
  page.init();
});


var page = {

  url: 'http://tiy-fee-rest.herokuapp.com/collections/muffnpuff',
  urlCart: "http://tiy-fee-rest.herokuapp.com/collections/" + $username,


  init: function() {
    page.initStyling();
    page.initEvents();
  },


  initStyling: function() {
    $('#usernameBlock').text($username);
    page.createCatalog();
    page.refreshCart();
  },


  initEvents: function(event) {

  //NAVIGATION BETWEEN PAGES
    $('#headerRight').on('click', '#cartBlock', function(e) {
      e.preventDefault();
      $('#productPage').removeClass('activePage');
      $('#catalogPage').removeClass('activePage');
      $('#cartPage').addClass('activePage');
    });
    $('#headerLeftLogo img').on('click', function(e){
      e.preventDefault();
      $('#productPage').removeClass('activePage');
      $('#cartPage').removeClass('activePage');
      $('#catalogPage').addClass('activePage');
    });
    $('#catalogPage').on('click', '.catalogProductBlock', function(e){
      e.preventDefault();
      $('#cartPage').removeClass('activePage');
      $('#catalogPage').removeClass('activePage');
      $('#productPage').addClass('activePage');
    });
  /////////////////////////

    $('#catalogPageContent').on('click', '.catalogProductBlock', function(e) {
      var newProduct = page.getProductFromCatalog(this);
      $('#productPage').html("");
      page.loadTemplate('productPage', newProduct, $('#productPage'));
    });

    $('#productPage').on('click', '#productAddToCartButton', function(e) {
      e.preventDefault();
      var newProduct = page.getProductFromProductPage(this);
      console.log(newProduct);
      $.ajax({
        url: page.urlCart,
        method: 'POST',
        data: newProduct,
        success: function (data) {
          page.refreshCart(data);
        },
        error: function (err) {
          console.log("error ", err);
        }
      });
    });

    $('#cartItemsBlock').on('click', '.cartItemDelete', function(e){
      var deleteId = $(this).closest('.cartItem').data('id');
      console.log(deleteId);
      page.deleteItem(deleteId);
    });

  },


  loadItems: function() {
    $.ajax ({
      url: page.url,
      method: 'GET',
      success: function(data) {

      },
      error: function(err) {
        console.log("error");
      }
    });
  },

  deleteItem: function(deleteId) {
    $.ajax({
      url: page.urlCart + "/" + deleteId,
      method: 'DELETE',
      success: function (data) {
        console.log('Item deleted');
        page.refreshCart();
      }
    });
  },

  refreshCart: function() {
    $.ajax ({
      url: page.urlCart,
      method: 'GET',
      success: function(data) {
        $('#cartItemsBlock').html("");
        _.each(data, function(el,idx,arr) {
          page.loadTemplate('cartItem', data[idx], $('#cartItemsBlock'));
        });
        page.calculateCartTotal(data);
        $('#cartBlockAmount').html(data.length);
      },
      error: function(err) {
        console.log("error");
      }
    });
  },

  getProductFromCatalog: function(product) {
    var matchedProduct;
    _.each(products, function(el,idx,arr) {
      if ($(product).find(".catalogProductBlockTitle").text().trim() === el.productTitle) {
        matchedProduct = el;
      }
    });
    var newProduct = {
      productTitle: matchedProduct.productTitle,
      productDescription: matchedProduct.productDescription,
      productPrice: matchedProduct.productPrice,
      productImage: matchedProduct.productImage,
      productThumb: matchedProduct.productThumb
    }
    return newProduct;
  },

  getProductFromProductPage: function(product) {
    var matchedProduct;
    _.each(products, function(el,idx,arr) {
      if ($(product).closest("#productPage").find("#productPageTitle").children().text().trim() === el.productTitle) {
        matchedProduct = el;
      }
    });
    var newProduct = {
      productTitle: matchedProduct.productTitle,
      productDescription: matchedProduct.productDescription,
      productPrice: matchedProduct.productPrice,
      productImage: matchedProduct.productImage,
      productThumb: matchedProduct.productThumb
    }
    return newProduct;
  },

  calculateCartTotal: function(products) {
    $("#cartTotalPrice").html("");
    var totalPrice = 0;
    _.each(products, function(el,idx,arr) {
      totalPrice += Number(el.productPrice);
    });
    $('#cartTotalPrice').text("$" + totalPrice);
  },

  createCatalog: function() {
    _.each(products, function(el, idx, arr) {
      page.loadTemplate('catalogBlock', products[idx], $('#catalogPageContent'));
    });
  },

  loadTemplate: function (tmplName, data, $target){
    var compiledTmpl = _.template(page.getTemplate(tmplName));

    $target.append(compiledTmpl(data));
  },

  getTemplate: function(name) {
    return templates[name];
  },

};
