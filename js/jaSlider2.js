/*
 *	jaSlider
 *	
 *	jQuery plugin to create a menu slider.
 *
 */
$.fn.jaSlider = function (options) {
	this.each(function() {

		// jQuery plugin settings
		var settings = $.extend({
			button: $('button.jaslidder-button'),
			menuDiv: $(".jaslider-menu"),
			contentDiv: $(".jaslider-content")
		}, options);

		var $margin = settings.contentDiv.get(0).style.marginLeft;

		settings.button.click(function() {
			settings.menuDiv.animate({left: parseInt(settings.menuDiv.css('left'),10)==0?-settings.menuDiv.outerWidth():0});
			settings.contentDiv.animate({'margin-left':$margin=='20%'?'0%':'20%'});
		});
	});
}