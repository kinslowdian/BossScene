
function finalLevelSeq_zoom()
{
	$("#finalLevel_wrapper .finalLevel_land")[0].addEventListener("webkitTransitionEnd", finalLevelSeq_zoomEvent, false);
	$("#finalLevel_wrapper .finalLevel_land")[0].addEventListener("transitionend", finalLevelSeq_zoomEvent, false);

	$("#finalLevel_wrapper .sunnySky").removeClass("sunnySky_hide").addClass("sunnySky_show");

	$("#finalLevel_wrapper .finalLevel_land").removeClass("finalLevel_hide").addClass("finalLevel_show");
}

function finalLevelSeq_zoomEvent(event)
{
	$("#finalLevel_wrapper .finalLevel_land")[0].removeEventListener("webkitTransitionEnd", finalLevelSeq_zoomEvent, false);
	$("#finalLevel_wrapper .finalLevel_land")[0].removeEventListener("transitionend", finalLevelSeq_zoomEvent, false);

	finalLevelSeq_sunRise();
}

function finalLevelSeq_sunRise()
{
	trace($("#finalLevel_wrapper .sun_inner"));

	$("#finalLevel_wrapper .sun_inner")[0].addEventListener("webkitTransitionEnd", finalLevelSeq_bossRise, false);
	$("#finalLevel_wrapper .sun_inner")[0].addEventListener("transitionend", finalLevelSeq_bossRise, false);

	$("#finalLevel_wrapper .sun_inner").removeClass("finalLevelSun_hide").addClass("finalLevelSun_show");

	$("#finalLevel_wrapper .finalLevel_night").addClass("finalLevelNight_hide");
}

function finalLevelSeq_bossRise(event)
{
	$("#finalLevel_wrapper .sun_inner")[0].removeEventListener("webkitTransitionEnd", finalLevelSeq_bossRise, false);
	$("#finalLevel_wrapper .sun_inner")[0].removeEventListener("transitionend", finalLevelSeq_bossRise, false);

	$("#finalLevel_wrapper .finalLevel_container_bossShadow")[0].addEventListener("webkitTransitionEnd", finalLevelSeq_bossRiseEvent, false);
	$("#finalLevel_wrapper .finalLevel_container_bossShadow")[0].addEventListener("transitionend", finalLevelSeq_bossRiseEvent, false);


	$("#finalLevel_wrapper .finalLevel_container_bossShadow").removeClass("finalLevel_bossShadow_hide").addClass("finalLevel_bossShadow_show");
}

function finalLevelSeq_bossRiseEvent(event)
{
	var delay;

	$("#finalLevel_wrapper .finalLevel_container_bossShadow")[0].removeEventListener("webkitTransitionEnd", finalLevelSeq_bossRiseEvent, false);
	$("#finalLevel_wrapper .finalLevel_container_bossShadow")[0].removeEventListener("transitionend", finalLevelSeq_bossRiseEvent, false);

	delay = setTimeout(finalLevelSeq_bossJump0, 3 * 1000);
}

function finalLevelSeq_bossJump0()
{
	$("#finalLevel_wrapper .finalLevel_container_bossShadow")[0].addEventListener("webkitAnimationEnd", finalLevelSeq_bossJump0Event, false);
	$("#finalLevel_wrapper .finalLevel_container_bossShadow")[0].addEventListener("animationend", finalLevelSeq_bossJump0Event, false);

	$("#finalLevel_wrapper .finalLevel_container_bossShadow").removeClass("tween-finalLevel_container_bossShadow").addClass("tween-finalLevelBossJump0");
}

function finalLevelSeq_bossJump0Event(event)
{
	$("#finalLevel_wrapper .finalLevel_container_bossShadow")[0].removeEventListener("webkitAnimationEnd", finalLevelSeq_bossJump0Event, false);
	$("#finalLevel_wrapper .finalLevel_container_bossShadow")[0].removeEventListener("animationend", finalLevelSeq_bossJump0Event, false);

	$("#finalLevel_wrapper .finalLevel_container_bossShadow").remove();

	$("#finalLevel_wrapper #finalLevel-boss .boss-face").removeClass("boss-face-default").addClass("boss-face-happy");

	$("#finalLevel_wrapper #finalLevel-boss .bossCont").addClass("tween-finalLevelBossJump1");

	$("#finalLevel_wrapper #finalLevel-boss .boss-armL-Cont").removeClass("boss-armL-Cont-UP");
	$("#finalLevel_wrapper #finalLevel-boss .boss-armR-Cont").removeClass("boss-armL-Cont-UP");

	$("#finalLevel_wrapper .finalLevel_land").addClass("tween-finalLevelBossJumpGround");

	$("#finalLevel_wrapper #finalLevel_player .map-goat-head").addClass("mapPlayer_head_fear");

	$("#finalLevel_wrapper .finalLevel_land")[0].addEventListener("webkitAnimationEnd", finalLevelSeq_bossJumpEnd, false);
	$("#finalLevel_wrapper .finalLevel_land")[0].addEventListener("animationend", finalLevelSeq_bossJumpEnd, false);
}

function finalLevelSeq_bossJumpEnd(event)
{
	var delay;

	$("#finalLevel_wrapper .finalLevel_land")[0].removeEventListener("webkitAnimationEnd", finalLevelSeq_bossJumpEnd, false);
	$("#finalLevel_wrapper .finalLevel_land")[0].removeEventListener("animationend", finalLevelSeq_bossJumpEnd, false);

	$("#finalLevel_wrapper .finalLevel_land").removeClass("tween-finalLevelBossJumpGround").addClass("tween-finalLevel");

	$("#finalLevel_wrapper .sun_inner").removeClass("tween-finalLevelSun").addClass("tween-finalLevel");

	$("#finalLevel_wrapper #finalLevel_player .map-goat-head").removeClass("mapPlayer_head_fear");

	$("#finalLevel_wrapper #finalLevel-boss .boss-face").removeClass("boss-face-happy").addClass("boss-face-default");

	delay = setTimeout(finalLevelSeq_focusBoss, 1 * 1000);
}

function finalLevelSeq_focusBoss()
{
	$("#finalLevel_wrapper .finalLevel_land")[0].addEventListener("webkitTransitionEnd", finalLevlSeq_storm, false);
	$("#finalLevel_wrapper .finalLevel_land")[0].addEventListener("transitionend", finalLevlSeq_storm, false);

	$("#finalLevel_wrapper .finalLevel_land").removeClass("finalLevel_show").addClass("finalLevel_drop");

	$("#finalLevel_wrapper .finalLevel_far").removeClass("finalLevel_show").addClass("finalLevel_drop");

	$("#finalLevel_wrapper .sun_inner").removeClass("finalLevelSun_show").addClass("finalLevelSun_drop");
}

function finalLevlSeq_storm(event)
{
	$("#finalLevel_wrapper .finalLevel_land")[0].removeEventListener("webkitTransitionEnd", finalLevlSeq_storm, false);
	$("#finalLevel_wrapper .finalLevel_land")[0].removeEventListener("transitionend", finalLevlSeq_storm, false);

	$("#finalLevel_wrapper .sun_inner").removeClass("finalLevelSun_drop").addClass("finalLevelSun_evil");

	$("#finalLevel_wrapper .finalLevel_night").removeClass("finalLevelNight_hide").addClass("finalLevelNight_evil");

	$("#finalLevel_wrapper .cloudySky").removeClass("cloudySky_hide").addClass("cloudySky_show");
}