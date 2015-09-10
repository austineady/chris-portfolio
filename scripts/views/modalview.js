export default Backbone.View.extend({
  template: JST.modal,

  events: {
    'click .close-modal': 'closeModal'
  },

  initialize: function() {
    $('.underlay').removeClass('modal-disabled');
    $('.modal').removeClass('modal-disabled');
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  closeModal: function() {
    $('.underlay').addClass('modal-disabled');
    $('.modal').addClass('modal-disabled');
  }
})
