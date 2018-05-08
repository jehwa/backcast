var VideoListView = Backbone.View.extend({
  
  initialize: function() {

    this.render();
    
    // this.listenTo(this.collection, 'change', function(){console.log('changed')})
    this.collection.on('update', function() {
      this.render();
    }, this);
  },

  render: function() {
    // this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.models.forEach(function(video) {
      var view = new VideoListEntryView({'model': video});
      this.$el.find('.video-list').append(view.$el);
    }.bind(this));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
