/**
 * @file Mobile menu.
 * @author Mike Joyce [hello@mikejoyce.io]
 */

var mobileMenu = (function() {

  /**
   * DOM Elements
   */
  var $toggleIcon = $('#toggleIcon');

  /** When the off-canvas menu is opened, switch out the icon */
  $(document).on('open.fndtn.offcanvas', '[data-offcanvas]', function () {
      $toggleIcon.removeClass('fa-bars').addClass('fa-times');
  });

  /** When the off-canvas menu is closed, switch out the icon */
  $(document).on('close.fndtn.offcanvas', '[data-offcanvas]', function () {
      $toggleIcon.removeClass('fa-times').addClass('fa-bars');
  });

})();
