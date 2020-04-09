let width, height;
let canvas, ctx;

function createCanvas(w, h) {
	if (canvas) canvas.parentElement.removeChild(canvas);
	canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	ctx = canvas.getContext('2d');
	canvas.width = w;
	canvas.height = h;
	width = w;
	height = h;
}

function init() {
	createCanvas(320, 320);
	render();
}

function render() {
	requestAnimationFrame(render);
	ctx.fillStyle = 'gray';
	ctx.fillRect(0, 0, width, height);
}