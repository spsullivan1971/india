$(document).ready(function(){
  page.init();
});




var page = {

  url:""


  init: function() {
    page.initStyling();
    page.initEvents();
  },


  initStyling: function() {


  },


  initEvents: function(event) {


  },


  loadItems: function() {
    $.ajax ({
      url: page.url,
      method: 'GET',
      success: function(data) {

      }
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
