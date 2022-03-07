window.addEventListener("load", function() {
	var hash = window.location.hash;
	
	if (hash === "")
		window.location.hash = "tipsandtricks";
}, false);