var trace = function(msg){ console.log(msg); };

var display;

var Display = function()
{
	this.screen_w = window.screen.width;
	this.screen_h = window.screen.height;
}

$(document).ready(function(){ init(); });

function init()
{
	display = new Display();

	var delay = setTimeout(run, 1000);
}

function run()
{
	finalLevelSeq_init();
}

function getY()
{
	var s = {};
	var v;
	var e = document.querySelector(".player-sprite");

	v = $(".player-sprite")[0].offsetTop;

	s = window.getComputedStyle(e);

	trace(v);
	trace(s);
}