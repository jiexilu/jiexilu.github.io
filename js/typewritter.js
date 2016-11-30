(function typeAnimation() {
	var hello = "Hello World! ", name = "I'm Cici.";
	type(hello + name);
})();

function type(text) {
	var string_length = document.getElementById("name").innerHTML.length;
	if (string_length >= text.length) {
		return;
	}

	document.getElementById("name").innerHTML += text.charAt(string_length); 

	setTimeout(type, 100, text);
};

function fadeIn(element, display) {
	// TODO
}

function erase() {
	var text = document.getElementById("name").innerHTML;
	if (text.length == 0) {
		return; 
	}
	document.getElementById("name").innerHTML = text.slice(0, -1);
	setTimeout(erase, 80);
}