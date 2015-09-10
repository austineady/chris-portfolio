import ImageView from './imageview';
import {ImageCollection} from './../models/imagemodel';

export default Backbone.View.extend({
  template: JST.portfolio,

  initialize: function() {
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
    this.$('.grid').append(view.el);
    return view;
  }.bind(this));

  return this;
},

remove: function(){
  _.invoke(this.children || [], 'remove');
  Backbone.View.prototype.remove.apply(this, arguments);
}
});
