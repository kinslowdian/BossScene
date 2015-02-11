var trace = function(msg){ console.log(msg); };

$(document).ready(function(){ init(); });

function init()
{
	var delay = setTimeout(run, 1000);
}

function run()
{
	finalLevelSeq_init();
}