var Image = Backbone.Model.extend({
  defaults: {
      url: ''
  }
});

var ImageCollection = Backbone.Collection.extend({
  model: Image
});

export default {Image, ImageCollection};
