var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(query) {
    // this.fetch({
    //   data: {
    //     part: 'snippet',
    //     key: window.YOUTUBE_API_KEY,
    //     q: query,
    //     maxResults: 5,
    //     type: 'video',
    //     videoEmbeddable: 'true',
    //   },
    //   success: function(a, b, c) {
    //     console.log(a, b, c);
    //   }
    // });
    $.ajax({
      type: 'GET',
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true',
      },
      url: this.url,
      success: function(data) {
        this.set(data.items);
      }.bind(this)
    });
  },
});
