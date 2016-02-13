function draw() {
var cv = document.getElementById("myChart");
var ctx = cv.getContext("2d");
ctx.fillStyle = "red";
ctx.strokeStyle = "black";
ctx.font='bold 15px Arial';
  ctx.fillText("GameOver", 160, 300);
  ctx.fillText("Your Score is: ", 145, 320);
  ctx.strokeRect(100, 350, 50, 30);
  ctx.strokeRect(250, 350, 50, 30);
  ctx.fillStyle = "black";
  ctx.fillText("Replay", 100, 370);
  ctx.fillText("Exit", 260, 370);
}