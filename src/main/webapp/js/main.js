$(document).ready(function()
{
	$("#raw").fadeOut()
	$("#enviro").fadeOut()
	$("#manu").fadeOut()
	
	$("#althead").click(function() {
		$("#enviro").fadeOut();
		$("#manu").fadeOut();
		$("#raw").fadeToggle();
	});
	$("#althead2").click(function() {
		$("#manu").fadeOut();
		$("#raw").fadeOut();
		$("#enviro").fadeToggle();
	});
	$("#mainhead").click(function() {
		$("#raw").fadeOut();
		$("#enviro").fadeOut();
		$("#manu").fadeToggle();
	});
});