let width, height;
let canvas, c;

function createCanvas(w, h) {
  if (canvas !== undefined) {
    canvas.parentElement.removeChild(canvas);
  }
  canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  c = canvas.getContext('2d');
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
  c.fillStyle = 'gray';
  c.fillRect(0, 0, width, height);
}

init();