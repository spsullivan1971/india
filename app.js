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

      $('#headerRight').on('click', '#logInSubmitButton', function(event) {
      event.preventDefault();
      var $username = $('input[id="logInUsername"]').val()
      $('#usernameBlock').append($username)
      $('input[id="logInUsername"]').val('')
      $('#logInForm').hide()
      $('#usernameBlock').addClass('activePage')
      })

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

      $('#productContinueShoppingButton').on('click', function(e) {
        e.preventDefault();
        $('#cartPage').removeClass('activePage');
        $('productPage').removeClass('activePage');
        $('#catalogPage').addClass('activePage');
      });

      $('#cartContinueShoppingButton').on('click', function(e) {
        e.preventDefault();
        $('#cartPage').removeClass('activePage');
        $('productPage').removeClass('activePage');
        $('#catalogPage').addClass('activePage');
      });

  },

  addOneItemToCart: function() {
    page.loadTemplate()
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
