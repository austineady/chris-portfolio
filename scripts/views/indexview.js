import ImageView from './imageview';
import {ImageCollection} from './../models/imagemodel';

export default Backbone.View.extend({
  template: JST.application,

  initialize: function() {
    this.collection = new ImageCollection([
      {
        url: 'https://images.unsplash.com/photo-1433148749784-5e235e9efd12?q=80&fm=jpg&s=7c1592ac1b4d576a48af77f6c2e0ab14'
      },
      {
        url: 'https://images.unsplash.com/photo-1433148749784-5e235e9efd12?q=80&fm=jpg&s=7c1592ac1b4d576a48af77f6c2e0ab14'
      },
      {
        url: 'https://images.unsplash.com/photo-1433148749784-5e235e9efd12?q=80&fm=jpg&s=7c1592ac1b4d576a48af77f6c2e0ab14'
      },
      {
        url: 'https://images.unsplash.com/photo-1433148749784-5e235e9efd12?q=80&fm=jpg&s=7c1592ac1b4d576a48af77f6c2e0ab14'
      },
      {
        url: 'https://images.unsplash.com/photo-1433148749784-5e235e9efd12?q=80&fm=jpg&s=7c1592ac1b4d576a48af77f6c2e0ab14'
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
