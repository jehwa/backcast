var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.$el.on('click', '.btn', this.handlebutton.bind(this));
    this.$el.on('keypress', '.form-control', function(event) {
      if (event.keyCode === 13) {
        this.handlebutton();
      }
    }.bind(this));
  },
  
  handlebutton: function() {
    var query = $('.form-control').val();
    this.collection.search(query);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
