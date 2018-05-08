var VideoListView = Backbone.View.extend({
  
  initialize: function() {

    this.render();
    console.log(this.$el);
    this.$el.find('.video-list').children().detach();
    this.collection.models.forEach(function(video) {
      var view = new VideoListEntryView({'model': video});
      this.$el.find('.video-list').append(view.$el);
    }.bind(this));

      
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
