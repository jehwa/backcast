var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    var sampleVideos = exampleVideoData.map(function(video) {
      return new Video(video);
    });
    this.videos = new Videos(sampleVideos);
    this.render();
    this.videoplayer = new VideoPlayerView({'collection': this.videos});
    this.$el.find('.player').html(this.videoplayer.$el);
    this.videolist = new VideoListView({'collection': this.videos});
    this.$el.find('.list').html(this.videolist.$el);
  },


  render: function() {
    this.$el.html(this.template());
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
