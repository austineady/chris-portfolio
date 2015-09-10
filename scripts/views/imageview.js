export default Backbone.View.extend({
  template: JST.picture,

  initialize: function() {
    console.log(this.model);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  }
});
