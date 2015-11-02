import ImageView from './imageview';
import {ImageCollection} from './../models/imagemodel';

export default Backbone.View.extend({
  template: JST.application,

  events: {
    'click .close-modal': 'close',
    'click .underlay': 'close',
  },

  initialize: function() {
    this.collection = new ImageCollection([
      {
        url: './../../assets/inspiration-1.jpeg',
        name: "Mountain View at Sunset"
      },
      {
        url: './../../assets/inspiration-landscape-3.jpeg'
      },
      {
        url: './../../assets/inspiration-portrait-2.jpeg'
      },
      {
        url: './../../assets/people-landscape-1.jpeg',
        name: "Skaters at the Beach"
      },
      {
        url: './../../assets/people-landscape-2.jpeg'
      },
      {
        url: './../../assets/wedding-landscape-2.jpeg'
      },
      {
        url: './../../assets/wedding-landscape-1.jpeg'
      },
      {
        url: './../../assets/wedding-portrait-3.jpeg'
      },
    ]);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function(){
  _.invoke(this.children || [], 'remove');
  console.log(this.collection);
    this.children = this.collection.map(function(child) {
    var view = new ImageView({
      model: child
    });
    this.$('.grid-sizer').append(view.el);
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
