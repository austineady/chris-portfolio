export default Backbone.View.extend({
  template: JST.portfolio,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});
