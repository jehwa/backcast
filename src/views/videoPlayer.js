var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.on('select', function(model) {
      this.render(model);
    }, this);
  },

  render: function(model) {
    if (model) {
      this.$el.html(this.template(model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
