var trace = function(msg){ console.log(msg); };

var stage;

function init(event)
{
	trace("ready!!!");

	stage = {};

	stage.sunnySky				= document.querySelector("#finalLevel_wrapper .sunnySky");
	stage.cloudySky				= document.querySelector("#finalLevel_wrapper .cloudySky");
	stage.nearLand 				= document.querySelector("#finalLevel_wrapper .finalLevel_land");
	stage.farLand 				= document.querySelector("#finalLevel_wrapper .finalLevel_far");
	stage.shadowBoss 			= document.querySelector("#finalLevel_wrapper .finalLevel_container_bossShadow");
	stage.finalSun 				= document.querySelector("#finalLevel_wrapper .sun_inner");
	stage.night 					= document.querySelector("#finalLevel_wrapper .finalLevel_night");
	stage.finalBoss 			= document.querySelector("#finalLevel_wrapper #finalLevel-boss");
	stage.player					= document.querySelector("#finalLevel_wrapper #finalLevel_player");

	var delay = setTimeout(run, 1000);
}

function run()
{
	finalLevelSeq_zoom();
}

function finalLevelSeq_zoom()
{
	stage.nearLand.addEventListener("webkitTransitionEnd", finalLevelSeq_zoomEvent, false);
	stage.nearLand.addEventListener("transitionend", finalLevelSeq_zoomEvent, false);

	stage.sunnySky.classList.remove("sunnySky_hide");
	stage.sunnySky.classList.add("sunnySky_show");

	stage.nearLand.classList.remove("finalLevel_hide");
	stage.nearLand.classList.add("finalLevel_show");
}

function finalLevelSeq_zoomEvent(event)
{
	stage.nearLand.removeEventListener("webkitTransitionEnd", finalLevelSeq_zoomEvent, false);
	stage.nearLand.removeEventListener("transitionend", finalLevelSeq_zoomEvent, false);

	finalLevelSeq_sunRise();
}

function finalLevelSeq_sunRise()
{
	trace(stage.finalSun);

	stage.finalSun.addEventListener("webkitTransitionEnd", finalLevelSeq_bossRise, false);
	stage.finalSun.addEventListener("transitionend", finalLevelSeq_bossRise, false);

	stage.finalSun.classList.remove("finalLevelSun_hide");
	stage.finalSun.classList.add("finalLevelSun_show");

	stage.night.classList.add("finalLevelNight_hide");
}

function finalLevelSeq_bossRise(event)
{
	stage.finalSun.removeEventListener("webkitTransitionEnd", finalLevelSeq_bossRise, false);
	stage.finalSun.removeEventListener("transitionend", finalLevelSeq_bossRise, false);

	stage.shadowBoss.addEventListener("webkitTransitionEnd", finalLevelSeq_bossRiseEvent, false);
	stage.shadowBoss.addEventListener("transitionend", finalLevelSeq_bossRiseEvent, false);


	stage.shadowBoss.classList.remove("finalLevel_bossShadow_hide");
	stage.shadowBoss.classList.add("finalLevel_bossShadow_show");
}

function finalLevelSeq_bossRiseEvent(event)
{
	var delay;

	stage.shadowBoss.removeEventListener("webkitTransitionEnd", finalLevelSeq_bossRiseEvent, false);
	stage.shadowBoss.removeEventListener("transitionend", finalLevelSeq_bossRiseEvent, false);

	delay = setTimeout(finalLevelSeq_bossJump0, 3 * 1000);
}

function finalLevelSeq_bossJump0()
{
	stage.shadowBoss.addEventListener("webkitAnimationEnd", finalLevelSeq_bossJump0Event, false);
	stage.shadowBoss.addEventListener("animationend", finalLevelSeq_bossJump0Event, false);

	stage.shadowBoss.classList.remove("tween-finalLevel_container_bossShadow");
	stage.shadowBoss.classList.add("tween-finalLevelBossJump0");
}

function finalLevelSeq_bossJump0Event(event)
{
	stage.shadowBoss.removeEventListener("webkitAnimationEnd", finalLevelSeq_bossJump0Event, false);
	stage.shadowBoss.removeEventListener("animationend", finalLevelSeq_bossJump0Event, false);

	// stage.farLand.removeChild(stage.shadowBoss);

	stage.farLand.querySelector(".finalLevel_focus").removeChild(stage.shadowBoss);

	stage.finalBoss.querySelector(".boss-face").classList.remove("boss-face-default");
	stage.finalBoss.querySelector(".boss-face").classList.add("boss-face-happy");

	stage.finalBoss.querySelector(".bossCont").classList.add("tween-finalLevelBossJump1");

	stage.finalBoss.querySelector(".boss-armL-Cont").classList.remove("boss-armL-Cont-UP");
	stage.finalBoss.querySelector(".boss-armR-Cont").classList.remove("boss-armL-Cont-UP");

	stage.nearLand.classList.add("tween-finalLevelBossJumpGround");

	stage.player.querySelector(".map-goat-head").classList.add("mapPlayer_head_fear");

	stage.nearLand.addEventListener("webkitAnimationEnd", finalLevelSeq_bossJumpEnd, false);
	stage.nearLand.addEventListener("animationend", finalLevelSeq_bossJumpEnd, false);
}

function finalLevelSeq_bossJumpEnd(event)
{
	var delay;

	stage.nearLand.removeEventListener("webkitAnimationEnd", finalLevelSeq_bossJumpEnd, false);
	stage.nearLand.removeEventListener("animationend", finalLevelSeq_bossJumpEnd, false);

	stage.nearLand.classList.remove("tween-finalLevelBossJumpGround");
	stage.nearLand.classList.add("tween-finalLevel");

	stage.finalSun.classList.remove("tween-finalLevelSun");
	stage.finalSun.classList.add("tween-finalLevel");

	stage.player.querySelector(".map-goat-head").classList.remove("mapPlayer_head_fear");

	stage.finalBoss.querySelector(".boss-face").classList.remove("boss-face-happy");
	stage.finalBoss.querySelector(".boss-face").classList.add("boss-face-default");

	delay = setTimeout(finalLevelSeq_focusBoss, 1 * 1000);
}

function finalLevelSeq_focusBoss()
{
	stage.nearLand.addEventListener("webkitTransitionEnd", finalLevlSeq_storm, false);
	stage.nearLand.addEventListener("transitionend", finalLevlSeq_storm, false);

	stage.nearLand.classList.remove("finalLevel_show");
	stage.nearLand.classList.add("finalLevel_drop");

	stage.farLand.classList.remove("finalLevel_show");
	stage.farLand.classList.add("finalLevel_drop");

	stage.finalSun.classList.remove("finalLevelSun_show");
	stage.finalSun.classList.add("finalLevelSun_drop");
}

function finalLevlSeq_storm(event)
{
	stage.nearLand.removeEventListener("webkitTransitionEnd", finalLevlSeq_storm, false);
	stage.nearLand.removeEventListener("transitionend", finalLevlSeq_storm, false);

	stage.finalSun.classList.remove("finalLevelSun_drop");
	stage.finalSun.classList.add("finalLevelSun_evil");

	stage.night.classList.remove("finalLevelNight_hide");
	stage.night.classList.add("finalLevelNight_evil");

	stage.cloudySky.classList.remove("cloudySky_hide");
	stage.cloudySky.classList.add("cloudySky_show");
}