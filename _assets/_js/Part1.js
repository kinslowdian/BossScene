
var finalLevelKit;

var tempValue = 199;

function finalLevelSeq_init()
{
	finalLevelKit = {};

	endDeathScene_init();

	finalLevelSeq_show();
}

function finalLevelSeq_show()
{
	$("#finalLevel_wrapper .tween-finalLevelPart")[0].addEventListener("webkitTransitionEnd", finalLevelSeq_showEvent, false);
	$("#finalLevel_wrapper .tween-finalLevelPart")[0].addEventListener("transitionend", finalLevelSeq_showEvent, false);

	$("#finalLevel_wrapper .finalLevel_part1").removeClass("finalLevelPart_hideX").addClass("finalLevelPart_showX");
}

function finalLevelSeq_showEvent(event)
{
	var delay;

	$("#finalLevel_wrapper .tween-finalLevelPart")[0].removeEventListener("webkitTransitionEnd", finalLevelSeq_showEvent, false);
	$("#finalLevel_wrapper .tween-finalLevelPart")[0].removeEventListener("transitionend", finalLevelSeq_showEvent, false);

	delay = setTimeout(finalLevelSeq_zoom, 0.5 * 1000);
}

function finalLevelSeq_zoom()
{
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land")[0].addEventListener("webkitTransitionEnd", finalLevelSeq_zoomEvent, false);
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land")[0].addEventListener("transitionend", finalLevelSeq_zoomEvent, false);

	$("#finalLevel_wrapper .finalLevel_part1 .sunnySky").removeClass("sunnySky_hide").addClass("sunnySky_show");

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land").removeClass("finalLevel_hide").addClass("finalLevel_show");
}

function finalLevelSeq_zoomEvent(event)
{
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land")[0].removeEventListener("webkitTransitionEnd", finalLevelSeq_zoomEvent, false);
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land")[0].removeEventListener("transitionend", finalLevelSeq_zoomEvent, false);

	finalLevelSeq_sunRise();
}

function finalLevelSeq_sunRise()
{
	trace($("#finalLevel_wrapper .finalLevel_part1 .sun_inner"));

	$("#finalLevel_wrapper .finalLevel_part1 .sun_inner")[0].addEventListener("webkitTransitionEnd", finalLevelSeq_bossRise, false);
	$("#finalLevel_wrapper .finalLevel_part1 .sun_inner")[0].addEventListener("transitionend", finalLevelSeq_bossRise, false);

	$("#finalLevel_wrapper .finalLevel_part1 .sun_inner").removeClass("finalLevelSun_hide").addClass("finalLevelSun_show");

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_night").addClass("finalLevelNight_hide");
}

function finalLevelSeq_bossRise(event)
{
	$("#finalLevel_wrapper .finalLevel_part1 .sun_inner")[0].removeEventListener("webkitTransitionEnd", finalLevelSeq_bossRise, false);
	$("#finalLevel_wrapper .finalLevel_part1 .sun_inner")[0].removeEventListener("transitionend", finalLevelSeq_bossRise, false);

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_container_bossShadow")[0].addEventListener("webkitTransitionEnd", finalLevelSeq_bossRiseEvent, false);
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_container_bossShadow")[0].addEventListener("transitionend", finalLevelSeq_bossRiseEvent, false);


	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_container_bossShadow").removeClass("finalLevel_bossShadow_hide").addClass("finalLevel_bossShadow_show");
}

function finalLevelSeq_bossRiseEvent(event)
{
	var delay;

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_container_bossShadow")[0].removeEventListener("webkitTransitionEnd", finalLevelSeq_bossRiseEvent, false);
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_container_bossShadow")[0].removeEventListener("transitionend", finalLevelSeq_bossRiseEvent, false);

	delay = setTimeout(finalLevelSeq_bossJump0, 3 * 1000);
}

function finalLevelSeq_bossJump0()
{
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_container_bossShadow")[0].addEventListener("webkitAnimationEnd", finalLevelSeq_bossJump0Event, false);
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_container_bossShadow")[0].addEventListener("animationend", finalLevelSeq_bossJump0Event, false);

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_container_bossShadow").removeClass("tween-finalLevel_container_bossShadow").addClass("tween-finalLevelBossJump0");
}

function finalLevelSeq_bossJump0Event(event)
{
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_container_bossShadow")[0].removeEventListener("webkitAnimationEnd", finalLevelSeq_bossJump0Event, false);
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_container_bossShadow")[0].removeEventListener("animationend", finalLevelSeq_bossJump0Event, false);

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_container_bossShadow").remove();

	$("#finalLevel_wrapper .finalLevel_part1 #finalLevel-boss .boss-face").removeClass("boss-face-default").addClass("boss-face-happy");

	$("#finalLevel_wrapper .finalLevel_part1 #finalLevel-boss .bossCont").addClass("tween-finalLevelBossJump1");

	$("#finalLevel_wrapper .finalLevel_part1 #finalLevel-boss .boss-armL-Cont").removeClass("boss-armL-Cont-UP");
	$("#finalLevel_wrapper .finalLevel_part1 #finalLevel-boss .boss-armR-Cont").removeClass("boss-armL-Cont-UP");

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land").addClass("tween-finalLevelBossJumpGround");

	$("#finalLevel_wrapper .finalLevel_part1 #finalLevel_player .map-goat-head").addClass("mapPlayer_head_fear");

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land")[0].addEventListener("webkitAnimationEnd", finalLevelSeq_bossJumpEnd, false);
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land")[0].addEventListener("animationend", finalLevelSeq_bossJumpEnd, false);
}

function finalLevelSeq_bossJumpEnd(event)
{
	var delay;

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land")[0].removeEventListener("webkitAnimationEnd", finalLevelSeq_bossJumpEnd, false);
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land")[0].removeEventListener("animationend", finalLevelSeq_bossJumpEnd, false);

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land").removeClass("tween-finalLevelBossJumpGround").addClass("tween-finalLevel");

	$("#finalLevel_wrapper .finalLevel_part1 .sun_inner").removeClass("tween-finalLevelSun").addClass("tween-finalLevel");

	$("#finalLevel_wrapper .finalLevel_part1 #finalLevel_player .map-goat-head").removeClass("mapPlayer_head_fear");

	$("#finalLevel_wrapper .finalLevel_part1 #finalLevel-boss .boss-face").removeClass("boss-face-happy").addClass("boss-face-default");

	delay = setTimeout(finalLevelSeq_focusBoss, 1 * 1000);
}

function finalLevelSeq_focusBoss()
{
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land")[0].addEventListener("webkitTransitionEnd", finalLevlSeq_storm, false);
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land")[0].addEventListener("transitionend", finalLevlSeq_storm, false);

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land").removeClass("finalLevel_show").addClass("finalLevel_drop");

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_far").removeClass("finalLevel_show").addClass("finalLevel_drop");

	$("#finalLevel_wrapper .finalLevel_part1 .sun_inner").removeClass("finalLevelSun_show").addClass("finalLevelSun_drop");
}

function finalLevlSeq_storm(event)
{
	trace(event);

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land")[0].removeEventListener("webkitTransitionEnd", finalLevlSeq_storm, false);
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_land")[0].removeEventListener("transitionend", finalLevlSeq_storm, false);

	$("#finalLevel_wrapper .finalLevel_part1 .sun_inner").removeClass("finalLevelSun_drop").addClass("finalLevelSun_evil");

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_night").removeClass("finalLevelNight_hide").addClass("finalLevelNight_evil");

	$("#finalLevel_wrapper .finalLevel_part1 .tween-cloudySky")[0].addEventListener("webkitTransitionEnd", finalLevSeq_stormEvent, false);

	$("#finalLevel_wrapper .finalLevel_part1 .tween-cloudySky")[0].addEventListener("transitionend", finalLevSeq_stormEvent, false);

	$("#finalLevel_wrapper .finalLevel_part1 .cloudySky").removeClass("cloudySky_hide").addClass("cloudySky_show");
}

function finalLevSeq_stormEvent(event)
{
	var delay_demo;

	trace(event);

	$("#finalLevel_wrapper .finalLevel_part1 .tween-cloudySky")[0].removeEventListener("webkitTransitionEnd", finalLevSeq_stormEvent, false);

	$("#finalLevel_wrapper .finalLevel_part1 .tween-cloudySky")[0].removeEventListener("transitionend", finalLevSeq_stormEvent, false);

	delay_demo = setTimeout(finalLevelSeq_bossDefeat, 1 * 1000);
}

function finalLevelSeq_bossDefeat()
{
	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_night").removeClass("finalLevelNight_evil").addClass("finalLevelNight_hide");

	$("#finalLevel_wrapper .finalLevel_part1 .tween-cloudySky")[0].addEventListener("webkitTransitionEnd", finalLevelSeq_bossDefeatEvent, false);

	$("#finalLevel_wrapper .finalLevel_part1 .tween-cloudySky")[0].addEventListener("transitionend", finalLevelSeq_bossDefeatEvent, false);

	$("#finalLevel_wrapper .finalLevel_part1 .cloudySky").removeClass("cloudySky_show").addClass("cloudySky_hide");

	$("#finalLevel_wrapper .finalLevel_part1 #finalLevel-boss .boss-face").removeClass("boss-face-default").addClass("boss-face-dead");

	$("#finalLevel_wrapper .finalLevel_part1 .portal_bleed .portal_bleed_drop").removeClass("portal_bleed_drop_hide").addClass("portal_bleed_drop_show");
}

function finalLevelSeq_bossDefeatEvent(event)
{
	$("#finalLevel_wrapper .finalLevel_part1 .tween-cloudySky")[0].removeEventListener("webkitTransitionEnd", finalLevelSeq_bossDefeatEvent, false);

	$("#finalLevel_wrapper .finalLevel_part1 .tween-cloudySky")[0].removeEventListener("transitionend", finalLevelSeq_bossDefeatEvent, false);

	finalLevelSeq_portalLight();
}

function finalLevelSeq_portalLight()
{
	$("#finalLevel_wrapper .finalLevel_part1 .tween-finalLevelPortalLight")[0].addEventListener("webkitTransitionEnd", finalLevelSeq_portalLightEvent, false);
	$("#finalLevel_wrapper .finalLevel_part1 .tween-finalLevelPortalLight")[0].addEventListener("transitionend", finalLevelSeq_portalLightEvent, false);

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_portalLight").removeClass("finalLevelPortalLight_hide").addClass("finalLevelPortalLight_show");
}

function finalLevelSeq_portalLightEvent(event)
{
	var delay;

	$("#finalLevel_wrapper .finalLevel_part1 .tween-finalLevelPortalLight")[0].removeEventListener("webkitTransitionEnd", finalLevelSeq_portalLightEvent, false);
	$("#finalLevel_wrapper .finalLevel_part1 .tween-finalLevelPortalLight")[0].removeEventListener("transitionend", finalLevelSeq_portalLightEvent, false);

	delay = setTimeout(finalLevelSeq_brightLight, 1.2 * 1000);
}

function finalLevelSeq_brightLight()
{
	$("#finalLevel_wrapper .finalLevel_part1 .tween-finalLevelLightFlare")[0].addEventListener("webkitTransitionEnd", finalLevelSeq_intoPart2, false);
	$("#finalLevel_wrapper .finalLevel_part1 .tween-finalLevelLightFlare")[0].addEventListener("transitionend", finalLevelSeq_intoPart2, false);

	$("#finalLevel_wrapper .finalLevel_part1 .finalLevel_lightFlare").removeClass("finalLevelLightFlare_hide").addClass("finalLevelLightFlare_show");
}

function finalLevelSeq_intoPart2(event)
{
	$("#finalLevel_wrapper .finalLevel_part1 .tween-finalLevelLightFlare")[0].removeEventListener("webkitTransitionEnd", finalLevelSeq_intoPart2, false);
	$("#finalLevel_wrapper .finalLevel_part1 .tween-finalLevelLightFlare")[0].removeEventListener("transitionend", finalLevelSeq_intoPart2, false);

	endDeathScene_run();
}

function finalLevelSeq_purge()
{
	$("#finalLevel_wrapper .finalLevel_part1").html("");
}