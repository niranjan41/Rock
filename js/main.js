$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// build a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#chat1 img',
		triggerHook: 0.4

	})
	.setClassToggle('#chat1', 'fade-in') // add class to project01
	// this requires a plugin

	.addTo(controller);


	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#chat2 img',
		triggerHook: 0.4

	})
	.setClassToggle('#chat2', 'fade-in') // add class to project01
	// this requires a plugin
	.addTo(controller);


	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#chat3 img',
		triggerHook: 0.4

	})
	.setClassToggle('#chat3', 'fade-in') // add class to project01
	 // this requires a plugin
	.addTo(controller);

	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#chat4 img',
		triggerHook: 0.4

	})
	.setClassToggle('#chat4', 'fade-in') // add class to project01
	// this requires a plugin
	.addTo(controller);

});
