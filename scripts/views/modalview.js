export default Backbone.View.extend({
  template: JST.modal,

  initialize: function() {
    $('.underlay').removeClass('modal-disabled');
    $('.modal').removeClass('modal-disabled');
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  }
});
