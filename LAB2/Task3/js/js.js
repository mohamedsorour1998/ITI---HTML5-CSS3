var canvas = document.getElementById("canvas");
var pen = canvas.getContext("2d");
const circAn = document.getElementById("circ");
const rectAn = document.getElementById("rect");
const lineAn = document.getElementById("line");
const freelineAn = document.getElementById("freeline");
const eraserAn = document.getElementById("eraser");
var cpfv;
const cpf = document.getElementById("cpf");
var cpsv;
const cps = document.getElementById("cps");
// console.log(cpf);
cpf.addEventListener("change", (e) => {
  cpfv = e.target.value;
});
cps.addEventListener("change", (e) => {
  cpsv = e.target.value;
});
lineAn.addEventListener("click", () => {
  drawLine();
});

rectAn.addEventListener("click", () => {
  drawRect();
});
circAn.addEventListener("click", () => {
  drawCircle();
});
freelineAn.addEventListener("click", () => {
  drawFreeHand();
});
eraserAn.addEventListener("click", () => {
  eraser();
});

function drawLine() {
  var startPoint = { x: 0, y: 0 };
  canvas.addEventListener("mousedown", (event) => {
    startPoint.x = event.offsetX;
    startPoint.y = event.offsetY;
    pen.strockStyle = cpsv;
    pen.beginPath();
    pen.moveTo(startPoint.x, startPoint.y);
  });
  canvas.addEventListener("mouseup", (event) => {
    pen.lineTo(event.offsetX, event.offsetY);
    pen.stroke();
  });
}
function drawRect() {
  // console.log(cpv.value);
  pen.beginPath();
  pen.rect(0, 0, 150, 75);
  pen.lineWidth = "3";
  pen.strockStyle = cpsv;
  pen.fillStyle = cpfv;
  pen.fillRect(0, 0, 150, 75);
  pen.stroke();
}
function drawCircle() {
  pen.beginPath();
  pen.arc(100, 75, 50, 0, 2 * Math.PI);
  pen.lineWidth = "3";
  pen.strockStyle = cpsv;
  pen.fillStyle = cpfv;
  pen.fill();
  pen.stroke();
}
function drawFreeHand() {
  var drawFlag = false;
  var sp = { x: 0, y: 0 }; //start point
  var ep = { x: 0, y: 0 }; //end point
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mouseup", endDrawing);
  canvas.addEventListener("mousemove", continueDrawing);
  function startDrawing(e) {
    pen.beginPath();
    sp.x = e.offsetX;
    sp.y = e.offsetY;
    pen.moveTo(sp.x, sp.y);
    drawFlag = true;
  }
  function endDrawing(e) {
    drawFlag = false;
  }

  function continueDrawing(e) {
    if (drawFlag) {
      ep.x = e.offsetX;
      ep.y = e.offsetY;
      pen.strockStyle = cpsv;
      pen.lineTo(ep.x, ep.y);
      pen.stroke();
    }
  }
}
function eraser() {
  pen.clearRect(0, 0, canvas.width, canvas.height);
}
