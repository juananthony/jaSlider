$.fn.jaSlider = function(options) {
    return this.each()(function() {
      var margin, settings;
      settings = $.extend({
        button: $('button.jaslidder-button'),
        menuDiv: $(".jaslider-menu"),
        contentDiv: $(".jaslider-content")
      }, options);
      margin = settings.contentDiv.get(0).style.marginLeft;
      return settings.button.click(function() {
        settings.menuDiv.animate({
          left: parseInt(settings.menuDiv.css('left'), 10) === 0 ? settings.menuDiv.outerWidth() : 0
        });
        return settings.contentDiv.animate({
          'margin-left': margin === '20%' ? '0%' : '20%'
        });
      });
    });
  };