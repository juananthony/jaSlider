$.fn.jaSlider = function(options) {
  return this.each(function() {
    var settings;
    settings = $.extend({
      button: $('button.jaslider-button'),
      menuDiv: $(".jaslider-menu"),
      contentDiv: $(".jaslider-content"),
      menuWidth: 250
    }, options);
    settings.menuDiv.css('width', settings.menuWidth);
    settings.menuDiv.css('left', -settings.menuWidth);
    settings.button.click(function() {
      return settings.slide();
    });
    /* Function to slide menu*/

    return settings.slide = function() {
      settings.menuDiv.animate({
        left: parseInt(settings.menuDiv.css('left'), 10) === 0 ? -settings.menuDiv.outerWidth() : 0
      });
      return settings.contentDiv.animate({
        left: parseInt(settings.menuDiv.css('left'), 10) === 0 ? 0 : settings.menuDiv.outerWidth()
      });
    };
  });
};
