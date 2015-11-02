export default Backbone.View.extend({
  template: JST.contact,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});
