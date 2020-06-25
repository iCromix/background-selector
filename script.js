var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById('color3');
var body = document.getElementById("gradient");
var clipboard = document.getElementById("clipboard");

clipboard.addEventListener("click", copyText);

color1.addEventListener("input", function(){
	setGradient();
	color3.value = body.style.background;
})

color2.addEventListener("input", function(){
	setGradient();
	color3.value = body.style.background;
})

/* Functions */

function setGradient() {
	body.style.background = 'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
}

function copyText() {
	color3.select();
	color3.setSelectionRange(0, 99999);
	document.execCommand("copy");
}