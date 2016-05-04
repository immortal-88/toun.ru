
$(function() {
  var waypoint = new Waypoint({
    element: document.getElementById('content'),
    handler: function(direction) {
      // notify(this.id + ' hit');
      // $('#menuTop').toggleClass('inverse-nav');
      // $('#menu').toggleClass('inverse-menu');
      // $('#menu li p').toggleClass('inverse-arrows');
      $('#menuTop').removeClass('menu-hide');
      $('#small-menu-buttton').toggleClass('inverse-small-menu-buttton');
      // if(direction == 'down') {
      //     $('#menu img').replaceWith("<img src='icon/img/logo_invert.png' />");
      // }else{
      //     $('#menu img').replaceWith("<img src='icon/img/teatr-logo-small-white.png' />");
      // }
    },
    offset: 180
  });

// Scroll up and down Menu visibility toggle
  (function () {
      var previousScroll = 0;

      $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();

        if (currentScroll === 0) {
          $('#menuTop').removeClass('menu-hide');
          $('#menuTop').removeClass('inverse-nav');
          $('#menu').removeClass('inverse-menu');
          $('#menu li p').addClass('inverse-arrows');
          // $('#small-menu-buttton').removeClass('inverse-small-menu-buttton');
          $('#menu img').replaceWith("<img src='icon/img/teatr-logo-small-white.png' />");
        }
        else if(currentScroll > 0) {
          if (!($('#menuTop').hasClass('inverse-nav'))) {
            $('#menuTop').addClass('inverse-nav');
            $('#menu').addClass('inverse-menu');
            $('#menu li p').removeClass('inverse-arrows');
            $('#menu img').replaceWith("<img src='icon/img/logo_invert.png' />");
          }
          if (currentScroll > previousScroll && $('#menuTop').css('top') == '0px' && $('#menu-small').css('display') == 'none'){
            $('#menuTop').addClass('menu-hide');
          } else if(currentScroll < previousScroll && $('#menuTop').css('top') == '-150px') {
            $('#menuTop').removeClass('menu-hide');
          }
       }
         previousScroll = currentScroll;
      });
  }());


});
