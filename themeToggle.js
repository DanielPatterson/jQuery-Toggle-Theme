$("document").ready(function() {
	
	// theme toggle
	$("button.default").click(function() {
		$("head").append('<link rel="stylesheet" type="text/css" href="default.css" id="default" />');
		$("link").remove("#blue, #red");
	});
	
	$("button.red").click(function() {
		$("head").append('<link rel="stylesheet" type="text/css" href="red.css" id="red" />');
		$("link").remove("#default, #blue");
	});
	
	$("button.blue").click(function() {
		$("head").append('<link rel="stylesheet" type="text/css" href="blue.css" id="blue" />');
		$("link").remove("#default, #red");
	});
	// endOf theme toggle

});