export default Backbone.View.extend({
  template: JST.application,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});
