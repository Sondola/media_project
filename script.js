var obj_Audio = document.getElementById("my_audio");
var p_or_p = false;
var song = 1;
var body = document.querySelector("body");
var num = 32;
var array = new Uint8Array(num*2);
var width = 10;
var context;
var logo;
var myElem;
var analyzer;
obj_Audio = new Audio("audio/Marina - How to Be a Heartbreaker.mp3");

function play_audio() {
	if (p_or_p == false) {
		obj_Audio.play();
		p_or_p = true;
		console.log(p_or_p);
	} else {
		obj_Audio.pause();
		p_or_p = false;
		console.log(p_or_p);
	}
}

function previous_song() {
	song--;
}

function next_song() {
	song++;
}

window.onclick = function() {
	if (context) return;

	for (var i = 0; i < num; i++) {
		logo = document.createElement('div');
		logo.className = 'logo';
		logo.style.minWidth = width + 'px';
		body.appendChild(logo);
	}

	myElem = document.getElementByClassName('logo');
	context = new AudioContext();
	analyzer = context.createAnalyzer();

}