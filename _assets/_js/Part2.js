
function endDeathScene_init()
{
	finalLevelKit = {};

	finalLevelKit.html = {};
	finalLevelKit.html.endDeathScene = "";

	finalLevelKit.countShake;
	finalLevelKit.countShakeMax = 10;

	// JSON
	finalLevelKit.displayText = {};
	finalLevelKit.displayText.line0 = "well done!";
	finalLevelKit.displayText.line1 = "this forest is now free from worm holes.";
	finalLevelKit.displayText.lineDy0 = "you were defeated ";
	finalLevelKit.displayText.lineDy1 = " times.";

	finalLevelKit.html.endDeathScene = $("#finalLevel_wrapper .finalLevel_part2").html();

	$("#finalLevel_wrapper .finalLevel_part2").html("");

	endDeathScene_populate();
}

function endDeathScene_run()
{
	$("#finalLevel_wrapper .finalLevel_part2").html(finalLevelKit.html.endDeathScene);

	$("#finalLevel_wrapper .finalLevel_part2")[0].addEventListener("webkitTransitionEnd", endDeathScene_inPlace, false);
	$("#finalLevel_wrapper .finalLevel_part2")[0].addEventListener("transitionend", endDeathScene_inPlace, false);

	$("#finalLevel_wrapper .finalLevel_part2").removeClass("finalLevelPart_hideX").addClass("finalLevelPart_showX");
}

function endDeathScene_inPlace(event)
{
	$("#finalLevel_wrapper .finalLevel_part2")[0].removeEventListener("webkitTransitionEnd", endDeathScene_inPlace, false);
	$("#finalLevel_wrapper .finalLevel_part2")[0].removeEventListener("transitionend", endDeathScene_inPlace, false);

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevel_lightFlare").removeClass("finalLevelLightFlare_show").addClass('finalLevelLightFlare_hide');

	finalLevelSeq_purge();

	// endDeathScene_portalOpen();

	endDeathScene_scroll();
}

function endDeathScene_populate()
{
	var defeatString = "";

	defeatString = finalLevelKit.displayText.lineDy0 + tempValue + finalLevelKit.displayText.lineDy1;

	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEnd_infoBox .finalLevelEndInfoBoxText0").html(finalLevelKit.displayText.line0);

	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEnd_infoBox .finalLevelEndInfoBoxText1").html(finalLevelKit.displayText.line1);

	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEnd_infoBox .finalLevelEndInfoBoxText2").html(defeatString);
}

function endDeathScene_scroll()
{
	$("#finalLevel_wrapper .finalLevel_part2 .finalLevel_part2_inner")[0].addEventListener("webkitTransitionEnd", endDeathScene_portalOpen, false);
	$("#finalLevel_wrapper .finalLevel_part2 .finalLevel_part2_inner")[0].addEventListener("transitionend", endDeathScene_portalOpen, false);

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevel_part2_inner").removeClass("finalLevelPart2Inner_start").addClass("finalLevelPart2Inner_show");
}

function endDeathScene_portalOpen(event)
{
	$("#finalLevel_wrapper .finalLevel_part2 .finalLevel_part2_inner")[0].removeEventListener("webkitTransitionEnd", endDeathScene_portalOpen, false);
	$("#finalLevel_wrapper .finalLevel_part2 .finalLevel_part2_inner")[0].removeEventListener("transitionend", endDeathScene_portalOpen, false);

	$("#finalLevel_wrapper .finalLevel_part2 .tween-bossLeavePortal")[0].addEventListener("webkitTransitionEnd", endDeathScene_bossRemove0, false);
	$("#finalLevel_wrapper .finalLevel_part2 .tween-bossLeavePortal")[0].addEventListener("transitionend", endDeathScene_bossRemove0, false);

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bossPart2LeavePortal").removeClass("bossLeavePortal_hide").addClass("bossLeavePortal_show");

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevel_lightFlare").remove();
}

function endDeathScene_bossRemove0(event)
{
	$("#finalLevel_wrapper .finalLevel_part2 .tween-bossLeavePortal")[0].removeEventListener("webkitTransitionEnd", endDeathScene_bossRemove0, false);
	$("#finalLevel_wrapper .finalLevel_part2 .tween-bossLeavePortal")[0].removeEventListener("transitionend", endDeathScene_bossRemove0, false);

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bossPart2 .bossCont").addClass("tween-finalLevelEndBossDeath0");

	$("#finalLevel_wrapper .finalLevel_part2 .tween-finalLevelEndBossDeath0")[0].addEventListener("webkitAnimationIteration", endDeathScene_bossRemove1, false);
	$("#finalLevel_wrapper .finalLevel_part2 .tween-finalLevelEndBossDeath0")[0].addEventListener("animationiteration", endDeathScene_bossRemove1, false);

	// e.addEventListener("animationiteration", listener, false);
}

function endDeathScene_bossRemove1(event)
{
	if(!finalLevelKit.countShake)
	{
		finalLevelKit.countShake = 0;
	}

	if(event.animationName === "tweenFinalLevelEndBossDeath0Frames")
	{
		finalLevelKit.countShake ++;

		trace(finalLevelKit.countShake + " " + (finalLevelKit.countShakeMax - 1));

		if(finalLevelKit.countShake == (finalLevelKit.countShakeMax - 1))
		{
			$("#finalLevel_wrapper .finalLevel_part2 .tween-finalLevelEndBossDeath0")[0].removeEventListener("webkitAnimationIteration", endDeathScene_bossRemove1, false);
			$("#finalLevel_wrapper .finalLevel_part2 .tween-finalLevelEndBossDeath0")[0].removeEventListener("animationiteration", endDeathScene_bossRemove1, false);

			$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bossPart2 .bossCont").removeClass("tween-finalLevelEndBossDeath0");

			$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bossPart2").addClass("tween-finalLevelEndBossDeath1");

			$("#finalLevel_wrapper .finalLevel_part2 .tween-finalLevelEndBossDeath1")[0].addEventListener("webkitAnimationEnd", endDeathScene_portalClose, false);
			$("#finalLevel_wrapper .finalLevel_part2 .tween-finalLevelEndBossDeath1")[0].addEventListener("animationend", endDeathScene_portalClose, false);
		}
	}
}

function endDeathScene_portalClose(event)
{
	$("#finalLevel_wrapper .finalLevel_part2 .tween-finalLevelEndBossDeath1")[0].removeEventListener("webkitAnimationEnd", endDeathScene_portalClose, false);
	$("#finalLevel_wrapper .finalLevel_part2 .tween-finalLevelEndBossDeath1")[0].removeEventListener("animationend", endDeathScene_portalClose, false);

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bossPart2LeavePortal").removeClass("bossLeavePortal_show").addClass("bossLeavePortal_hide");

	$("#finalLevel_wrapper .finalLevel_part2 .tween-bossLeavePortal")[0].addEventListener("webkitTransitionEnd", endDeathScene_portalCloseEvent, false);
	$("#finalLevel_wrapper .finalLevel_part2 .tween-bossLeavePortal")[0].addEventListener("transitionend", endDeathScene_portalCloseEvent, false);
}

function endDeathScene_portalCloseEvent(event)
{
	$("#finalLevel_wrapper .finalLevel_part2 .tween-bossLeavePortal")[0].removeEventListener("webkitTransitionEnd", endDeathScene_portalCloseEvent, false);
	$("#finalLevel_wrapper .finalLevel_part2 .tween-bossLeavePortal")[0].removeEventListener("transitionend", endDeathScene_portalCloseEvent, false);

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bossPart2").remove();
	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bossPart2LeavePortal").remove();

	/*
	$("#finalLevel_wrapper")[0].addEventListener("webkitTransitionEnd", endDeathScene_sceneFocusEnd, false);
	$("#finalLevel_wrapper")[0].addEventListener("transitionend", endDeathScene_sceneFocusEnd, false);

	$("#finalLevel_wrapper").addClass("finalLevelEndWrapperFocus");
	*/

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevel_part2_inner")[0].addEventListener("webkitTransitionEnd", endDeathScene_sceneFocusEnd, false);
	$("#finalLevel_wrapper .finalLevel_part2 .finalLevel_part2_inner")[0].addEventListener("transitionend", endDeathScene_sceneFocusEnd, false);

	// $("#finalLevel_wrapper .finalLevel_part2 .finalLevel_part2_inner").addClass("finalLevelEndWrapperFocus");

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevel_part2_inner").removeClass("finalLevelPart2Inner_show").addClass("finalLevelPart2Inner_end");
}

function endDeathScene_sceneFocusEnd(event)
{
	$("#finalLevel_wrapper .finalLevel_part2 .finalLevel_part2_inner")[0].removeEventListener("webkitTransitionEnd", endDeathScene_sceneFocusEnd, false);
	$("#finalLevel_wrapper .finalLevel_part2 .finalLevel_part2_inner")[0].removeEventListener("transitionend", endDeathScene_sceneFocusEnd, false);

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bird_sprite")[0].addEventListener("webkitTransitionEnd", endDeathScene_birdWalk, false);

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bird_sprite")[0].addEventListener("transitionend", endDeathScene_birdWalk, false);

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bird_sprite").removeClass("finalLevelEndBirdFade_hide").addClass("finalLevelEndBirdFade_show");
}

function endDeathScene_birdWalk(event)
{
	var delay;

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bird_sprite")[0].removeEventListener("webkitTransitionEnd", endDeathScene_birdWalk, false);

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bird_sprite")[0].removeEventListener("transitionend", endDeathScene_birdWalk, false);

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bird_L .finalLevelEnd_bird_cont").removeClass("finalLevelEndBirdCont_hideL").addClass("finalLevelEndBirdCont_show");

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bird_R .finalLevelEnd_bird_cont").removeClass("finalLevelEndBirdCont_hideR").addClass("finalLevelEndBirdCont_show");

	delay = setTimeout(endDeathScene_birdHappy, 0.4 * 1000);
}

function endDeathScene_birdHappy()
{
	var delay;

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_bird").addClass("tween-finalLevelEndBird");

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_player .map-goat-head").addClass("mapPlayer_head_happy");


	delay = setTimeout(endDeathScene_endTitleInit, 2 * 1000);
}

function endDeathScene_endTitleInit()
{
	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxText2")[0].addEventListener("webkitTransitionEnd", endDeathScene_endTitleColor, false);
	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxText2")[0].addEventListener("transitionend", endDeathScene_endTitleColor, false);

	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxName0")[0].addEventListener("webkitTransitionEnd", endDeathScene_endTitleColor, false);
	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxName0")[0].addEventListener("transitionend", endDeathScene_endTitleColor, false);

	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxName1")[0].addEventListener("webkitTransitionEnd", endDeathScene_endTitleColor, false);
	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxName1")[0].addEventListener("transitionend", endDeathScene_endTitleColor, false);



	$("#finalLevel_wrapper .finalLevel_part3 .tween-finalLevelEndInfoBox")[0].addEventListener("webkitTransitionEnd", endDeathScene_endTitle0, false);
	$("#finalLevel_wrapper .finalLevel_part3 .tween-finalLevelEndInfoBox")[0].addEventListener("transitionend", endDeathScene_endTitle0, false);



	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEnd_infoBox").removeClass("finalLevelEndInfoBox_hide").addClass("finalLevelEndInfoBox_show");
}

function endDeathScene_endTitleColor(event)
{
	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxText2")[0].removeEventListener("webkitTransitionEnd", endDeathScene_endTitleColor, false);
	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxText2")[0].removeEventListener("transitionend", endDeathScene_endTitleColor, false);

	$(event.target).removeClass("finalLevelEndInfoBox_white");
}

function endDeathScene_endTitle0(event)
{
	$("#finalLevel_wrapper .finalLevel_part3 .tween-finalLevelEndInfoBox")[0].removeEventListener("webkitTransitionEnd", endDeathScene_endTitle0, false);
	$("#finalLevel_wrapper .finalLevel_part3 .tween-finalLevelEndInfoBox")[0].removeEventListener("transitionend", endDeathScene_endTitle0, false);

	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxText0").removeClass("finalLevelEndInfoBox_white");
	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxText1").removeClass("finalLevelEndInfoBox_white");

	endDeathScene_endTitle1();
}

function endDeathScene_endTitle1()
{
	var delay;

	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxText2").removeClass("finalLevelEndInfoBox_hide").addClass("finalLevelEndInfoBox_show");

	delay = setTimeout(endDeathScene_endTitle2, 0.5 * 1000);
}


function endDeathScene_endTitle2()
{
	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxName0").removeClass("finalLevelEndInfoBox_hide").addClass("finalLevelEndInfoBox_show");
	$("#finalLevel_wrapper .finalLevel_part3 .finalLevelEndInfoBoxName1").removeClass("finalLevelEndInfoBox_hide").addClass("finalLevelEndInfoBox_show");

	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_blossom .snow").addClass("tween-snow");
	$("#finalLevel_wrapper .finalLevel_part2 .finalLevelEnd_blossom").removeClass("finalLevelEndBlossom_hide").addClass("finalLevelEndBlossom_show");
}