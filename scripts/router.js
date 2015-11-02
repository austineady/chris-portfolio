import IndexView from './views/indexview';
import PortfolioView from './views/portfolioview';
import WeddingsView from './views/weddingview';
import EventsView from './views/eventsview';
import PeopleView from './views/peopleview';
import InspirationView from './views/inspirationview';
import ContactView from './views/contactview';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'portfolio': 'portfolio',
    'portfolio/weddings': 'weddings',
    'portfolio/events': 'events',
    'portfolio/people': 'people',
    'portfolio/inspiration': 'inspiration',
    'contact': 'contact'
  },

  initialize: function() {
    //stuff
  },

  index: function() {
    var view = new IndexView();
    $('.page').html(view.el);
    var grid = document.querySelector('.grid');
  var msnry;

  imagesLoaded( grid, function() {
    // init Isotope after all images have loaded
    msnry = new Masonry( grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  });

  },

  portfolio: function() {
    var view = new PortfolioView();
    $('.page').html(view.el);
  },

  weddings: function() {
    var view = new WeddingsView();
    $('.page').html(view.el);
    var grid = document.querySelector('.grid');
  var msnry;

  imagesLoaded( grid, function() {
    // init Isotope after all images have loaded
    msnry = new Masonry( grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  });
  },

  events: function() {
    var view = new EventsView();
    $('.page').html(view.el);
    var grid = document.querySelector('.grid');
  var msnry;

  imagesLoaded( grid, function() {
    // init Isotope after all images have loaded
    msnry = new Masonry( grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  });
  },

  people: function() {
    var view = new PeopleView();
    $('.page').html(view.el);
    var grid = document.querySelector('.grid');
  var msnry;

  imagesLoaded( grid, function() {
    // init Isotope after all images have loaded
    msnry = new Masonry( grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  });
  },

  inspiration: function() {
    var view = new InspirationView();
    $('.page').html(view.el);
    var grid = document.querySelector('.grid');
  var msnry;

  imagesLoaded( grid, function() {
    // init Isotope after all images have loaded
    msnry = new Masonry( grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  });
},

  contact: function() {
    var view = new ContactView();
    $('.page').html(view.el);
  }
});

var router = new Router();
export default router;
