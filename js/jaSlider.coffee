 #
 #	jaSlider
 #	
 #	jQuery plugin to create a menu slider.
 #
 #
 $.fn.jaSlider = (options) ->
 	@.each ->
 		settings = $.extend
 			button: $ 'button.jaslider-button'
 			menuDiv: $(".jaslider-menu")
 			contentDiv: $(".jaslider-content")
 			options

 		margin = settings.contentDiv.get(0).style.marginLeft;
 		settings.button.click ->
 			settings.menuDiv.animate
 				left: if parseInt(settings.menuDiv.css('left'),10) == 0 then -settings.menuDiv.outerWidth() else 0
 			settings.contentDiv.animate
 				left: if parseInt(settings.menuDiv.css('left'),10) == 0 then 0 else settings.menuDiv.outerWidth()
 				#'margin-left': if margin == '20%' then '0%' else '20%'