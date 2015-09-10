import IndexView from './views/indexview';
import PortfolioView from './views/portfolioview';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'portfolio': 'portfolio',
    '/about': 'about',
    '/contact': 'contact'
  },

  initialize: function() {
    //stuff
  },

  // events: {
  //   'click .nav-index': 'index',
  //   'click .nav-portfolio': 'porfolio',
  //   'click .nav-about': 'about',
  //   'click .nav-contact': 'contact'
  // },

  index: function() {
    var view = new IndexView();
    $('.page').html(view.el);
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 200
    });
  },

  portfolio: function() {
    var view = new PortfolioView();
    $('.page').html(view.el);
    console.log('hello');
  },
});

var router = new Router();
export default router;
