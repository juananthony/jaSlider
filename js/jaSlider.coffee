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
 			menuWidth: 250
 			options
 		
 		# Setting the width and left to the menu
 		settings.menuDiv.css('width', settings.menuWidth)
 		settings.menuDiv.css('left', -settings.menuWidth)

 		# Click event handler
 		settings.button.click ->
 			settings.slide()

 		### Function to slide menu ###
 		# Animate menuDiv and contentDiv to show the menu
 		settings.slide = ->
 			settings.menuDiv.animate
 				left: if parseInt(settings.menuDiv.css('left'),10) == 0 then -settings.menuDiv.outerWidth() else 0
 			settings.contentDiv.animate
 				left: if parseInt(settings.menuDiv.css('left'),10) == 0 then 0 else settings.menuDiv.outerWidth()