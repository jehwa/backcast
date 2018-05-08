var VideoListView = Backbone.View.extend({
  
  initialize: function() {

    this.render();
    console.log(this.$el);
    
    this.collection.models.forEach(function(video) {
      var view = new VideoListEntryView({'model': video});
      this.$el.append(view.$el);
    }.bind(this));

      
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
