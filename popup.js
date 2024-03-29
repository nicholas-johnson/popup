/* Convert any div into a popup box */
/* (c) Nicholas Johnson - www.trivial.ly */
/* Please use and modify as you see fit. */
/* If you repost on a code sharing site, please give attribution: www.trivial.ly */
(function($) {
  $.fn.popUp = function() {
    this.addClass('poppedUp').css({
      position: "fixed",
      'z-index':10001,
      width: "50%",
      height: "auto",
      'min-width': '350px',
      'max-height': '350px'
    });
    var _window = $(window);
    this.css({
      top: (_window.height()/2) - (this.height()/2),
      left: (_window.width()/2) - (this.width()/2),
    })
    this.fadeIn();
    return this;
  }
})(jQuery);