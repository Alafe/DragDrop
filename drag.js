function drag(elemento) {
	var x = 0, y = 0;
	elemento.onmousedown = function(e) {
		window.addEventListener('mousemove', mover);
		x = e.pageX - elemento.offsetLeft;
		y = e.pageY - elemento.offsetTop;
	}
	elemento.onmouseup = function() {
		window.removeEventListener('mousemove', mover);
		x = 0, y = 0;
	}
	function mover(e) {
		elemento.style.position = "absolute";
		elemento.style.top = (e.pageY - y) + "px";
		elemento.style.left = (e.pageX - x) + "px";
	}
}
function dragClass(elementos) {
	for (var i = 0; i <= elementos.length; i++) {
		drag(elementos[i]);
	}
}