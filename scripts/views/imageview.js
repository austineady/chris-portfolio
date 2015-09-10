import ModalView from './modalview';

export default Backbone.View.extend({
  template: JST.picture,

  events: {
    'click .grid-item': 'showModal',
  },

  initialize: function() {
    console.log(this.model);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  showModal: function() {
    var view = new ModalView({model: this.model});
    $('.modal').html(view.el);
  }
});
