jQuery(document).ready(function ($) {
	console.log('start');
	$('.email-input[type="text"]').focus(function() {
		// $('#logo').attr('src', 'assets/images/temp-logo-cyan.png');
		$("#logo").fadeOut(500, function() {
	        $("#logo").attr('src', 'assets/images/temp-logo-cyan.png');
	    }).fadeIn(0);
	    return false;

	});
});