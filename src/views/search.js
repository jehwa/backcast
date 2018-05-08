var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.$el.on('click', '.btn', function(event) {
      var query = $('.form-control').val();
      this.collection.search(query);
    }.bind(this));
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
