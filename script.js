//your JS code here. If required.
let line = document.getElementById('line');
let deg = 2;
function rotate(){
	line.style.transform = `rotate(${deg}deg)`;
	deg += 2;
}
setInterval(rotate,200);