import router from './router';

(function(){
  'use strict';

  $(document).ready(function(){
    Backbone.history.start();



    $(window).scroll(function() {
      var height = $('body').height();
      var scrollTop = $('body').scrollTop();

      if(scrollTop > 200) {
        $('.nav').addClass('collapsed');
        $('.nav-title').addClass('nav-hidden');
        $('.menu-bar').addClass('menu-active');
      } else {
        $('.nav').removeClass('collapsed');
        $('.nav-title').removeClass('nav-hidden');
        $('.menu-bar').removeClass('menu-active');
        $('.side-nav').removeClass('side-nav-active');
      }
    });

    $('.menu-bar').click(function(e) {
      if($('.side-nav').hasClass('side-nav-active')) {
        $('.side-nav').removeClass('side-nav-active');
      } else {
        $('.side-nav').addClass('side-nav-active');
      }
    });
    $('.nav-portfolio').click(function(e) {
      $('.nav-title').removeClass('nav-active');
      $('.nav-portfolio').addClass('nav-active');
    });
    $('.nav-about').click(function(e) {
      $('.nav-title').removeClass('nav-active');
      $('.nav-about').addClass('nav-active');
    });
    $('.nav-contact').click(function(e) {
      $('.nav-title').removeClass('nav-active');
      $('.nav-contact').addClass('nav-active');
    });
    $('.nav-index').click(function(e) {
      $('.nav-title').removeClass('nav-active');
      $('.nav-index').addClass('nav-active');
    });
});
})();
