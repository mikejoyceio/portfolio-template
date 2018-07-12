/**
 * @file Sticky navigation.
 * @author Mike Joyce [hello@mikejoyce.io]
 */

var stickyNavigation = (function() {

  /**
   * DOM Elements
   */
  var $toggle = $('#toggle');
  var $toggleIcon = $('#toggleIcon');
  var $header = $('#header');
  var $feature = $('#feature');
  var $nav = $('#headerNav ul');

  $header.data('size','big');

  $(window).on('scroll touchmove', function(event){

      if ($(document).scrollTop() > 100) {

          if ($header.data('size') == 'big') {
              $header.data('size','small');
              $header.addClass('sticky').show();
              $nav.prepend('<li><a class="anchor-link" href="#feature">Start</a></li>');
              $toggleIcon.removeClass('fa-bars right-off-canvas-toggle').addClass('fa-arrow-circle-o-up');
          }

      } else {

          if ($header.data('size') == 'small') {
              $header.data('size','big');
              $header.removeClass('sticky');
              $nav.children('li:first').remove();
              $toggleIcon.removeClass('fa-arrow-circle-o-up').addClass('fa-bars right-off-canvas-toggle');
          }

      }
  });

})();
