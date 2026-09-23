let mx = 0;
let my = 0;
let mmx = 0;
let mmy = 0;

let rd = 3;

let hand = document.getElementById("hand");

function getmousepos(mev) {
	mx = mev.clientX;
	my = mev.clientY;
	mmx = mev.movementX;
	mmy = mev.movementY;
}
function x(num,x) {if (num > x) {return num-x;}else {return num-x;}}

function uh(event) {
	getmousepos(event);
	hand.style.left   = mx + "px";
	hand.style.top    = (my- 140) + "px";
	hand.style.rotate = (-45+mmx/rd-mmy/rd) + "deg";
	// image is 1540x4096
}
hand.style.position = "fixed";
hand.style.rotate   = -45 + "deg";
document.getElementById("hi").addEventListener("mousemove", uh);
document.getElementById("hi").addEventListener("click", function(){
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
});
