var canvasElement = document.querySelector("canvas");
var context = canvasElement.getContext("2d");

var btnPause = document.querySelector("button:nth-of-type(1)");
var btnStop = document.querySelector("button:nth-of-type(2)");
var btnMute = document.querySelector("button:nth-of-type(3)");

var audio = new Audio('https://raw.githubusercontent.com/rafaelreis-hotmart/Audio-Sample-files/master/sample.mp3');


btnPause.addEventListener('click',function () {
    audio.pause()
})

btnStop.addEventListener('click',function () {
    audio.currentTime = 0
    audio.pause()

})

btnMute.addEventListener('click',function () {
    audio.muted = true
})
// the triangle
context.beginPath();
context.moveTo(6,6);
context.lineTo(14,10);
context.lineTo(6,14);
context.closePath();

// the outline
context.lineWidth = 1;
context.strokeStyle = '#fff';
context.stroke();

canvasElement.addEventListener("click",function () {
    audio.muted = false

    audio.play();
})