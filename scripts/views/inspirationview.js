import ImageView from './imageview';
import {ImageCollection} from './../models/imagemodel';

export default Backbone.View.extend({
  template: JST.inspiration,

  events: {
    'click .close-modal': 'close',
    'click .underlay': 'close',
  },

  initialize: function() {
    this.collection = new ImageCollection([
      {
        url: "https://images.unsplash.com/photo-1431361426216-5b0506d60eb9?q=80&fm=jpg&s=bb4215d211f32de44d4e6da6fde65400"
      },
      {
        url: "https://images.unsplash.com/photo-1431361426216-5b0506d60eb9?q=80&fm=jpg&s=bb4215d211f32de44d4e6da6fde65400"
      },
      {
        url: "https://images.unsplash.com/photo-1431361426216-5b0506d60eb9?q=80&fm=jpg&s=bb4215d211f32de44d4e6da6fde65400"
      },
      {
        url: "https://images.unsplash.com/photo-1431361426216-5b0506d60eb9?q=80&fm=jpg&s=bb4215d211f32de44d4e6da6fde65400"
      },
      {
        url: "https://images.unsplash.com/photo-1431361426216-5b0506d60eb9?q=80&fm=jpg&s=bb4215d211f32de44d4e6da6fde65400"
      },
      {
        url: "https://images.unsplash.com/photo-1431361426216-5b0506d60eb9?q=80&fm=jpg&s=bb4215d211f32de44d4e6da6fde65400"
      },
      {
        url: "https://images.unsplash.com/photo-1431361426216-5b0506d60eb9?q=80&fm=jpg&s=bb4215d211f32de44d4e6da6fde65400"
      }
    ]);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function(){
  _.invoke(this.children || [], 'remove');
    this.children = this.collection.map(function(child) {
    var view = new ImageView({
      model: child
    });
    this.$('.grid').append(view.el);
    return view;
  }.bind(this));

  return this;
},

remove: function(){
  _.invoke(this.children || [], 'remove');
  Backbone.View.prototype.remove.apply(this, arguments);
},

close: function() {
  $('.modal').addClass('modal-disabled');
  $('.underlay').addClass('modal-disabled');
}
});
