/**
 * @file Scroll to.
 * @author Mike Joyce [hello@mikejoyce.io]
 */

var scrollTo = (function() {

  /**
   * DOM Elements
   */
  var $body = $('html, body');
  var $toggle = $('#toggle');
  var $header = $('#header');
  var $exitOffCanvas = $('.exit-off-canvas')

  $(document).on('click', '.anchor-link', function(event) {
    event.preventDefault();
    scrollToAnchor(event.target.hash);
  });

  $toggle.click(function() {
    if ($header.data('size') == 'small') {
         scrollToAnchor('#feature');
    }
  });

  /**
   * ScrollToAnchor
   * @param {string} target ID
   */
  function scrollToAnchor(target) {

    /** Close the off-canvas menu */
    $exitOffCanvas.click();

    /** After a short delay, scroll to the target anchor */
    setTimeout(function() {
      $body.animate({
        scrollTop: $(target).offset().top
      }, 2000);
    }, 500);
  }

})();
