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
      } else {
        $('.nav').removeClass('collapsed');
      }
    });
  });
})();
