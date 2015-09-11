import IndexView from './views/indexview';
import PortfolioView from './views/portfolioview';
import WeddingsView from './views/weddingview';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'portfolio': 'portfolio',
    'portfolio/weddings': 'weddings',
    'about': 'about',
    'contact': 'contact'
  },

  initialize: function() {
    //stuff
  },

  index: function() {
    var view = new IndexView();
    $('.page').html(view.el);
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 200,
      gutter: 5
    });
  },

  portfolio: function() {
    var view = new PortfolioView();
    $('.page').html(view.el);
  },

  weddings: function() {
    var view = new WeddingsView();
    $('.page').html(view.el);
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 200,
      gutter: 5
    });
  }
});

var router = new Router();
export default router;
