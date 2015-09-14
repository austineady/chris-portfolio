import IndexView from './views/indexview';
import PortfolioView from './views/portfolioview';
import WeddingsView from './views/weddingview';
import EventsView from './views/eventsview';
import PeopleView from './views/peopleview';
import InspirationView from './views/inspirationview';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'portfolio': 'portfolio',
    'portfolio/weddings': 'weddings',
    'portfolio/events': 'events',
    'portfolio/people': 'people',
    'portfolio/inspiration': 'inspiration',
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
  },

  events: function() {
    var view = new EventsView();
    $('.page').html(view.el);
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 200,
      gutter: 5
    });
  },

  people: function() {
    var view = new PeopleView();
    $('.page').html(view.el);
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 200,
      gutter: 5
    });
  },

  inspiration: function() {
    var view = new InspirationView();
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
