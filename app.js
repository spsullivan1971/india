var $username = 'Guest';

$(document).ready(function(){
  page.init();
});


var page = {

  url: 'http://tiy-fee-rest.herokuapp.com/collections/muffnpuff',


  init: function() {
    page.initStyling();
    page.initEvents();
  },


  initStyling: function() {


  },


  initEvents: function(event) {
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

      $('#cartContinueShoppingButton').on('click', function(e) {
        e.preventDefault();
        $('#cartPage').removeClass('activePage');
        $('#catalogPage').addClass('activePage');
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
    })
  },


  deleteItem: function(deleteId) {
    $.ajax({
      url: page.urllogin + "/" + deleteId,
      method: 'DELETE',
      success: function (data) {
      }
    });
  },

  loadTemplate: function (tmplName, data, $target){
    var compiledTmpl = _.template(page.getTemplate(tmplName));

    $target.append(compiledTmpl(data));
  },

};
