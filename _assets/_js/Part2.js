
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

	endDeathScene_portalOpen();

}

function endDeathScene_populate()
{
	var defeatString = "";

	defeatString = finalLevelKit.displayText.lineDy0 + tempValue + finalLevelKit.displayText.lineDy1;

	$(".finalLevelEnd_infoBox .finalLevelEndInfoBoxText0").html(finalLevelKit.displayText.line0);

	$(".finalLevelEnd_infoBox .finalLevelEndInfoBoxText1").html(finalLevelKit.displayText.line1);

	$(".finalLevelEnd_infoBox .finalLevelEndInfoBoxText2").html(defeatString);

	finalLevelKit.html.endDeathScene = $("#finalLevel_wrapper .finalLevel_part2").html();

	$("#finalLevel_wrapper .finalLevel_part2").html("");
}

function endDeathScene_portalOpen()
{
	$(".tween-bossLeavePortal")[0].addEventListener("webkitTransitionEnd", endDeathScene_bossRemove0, false);
	$(".tween-bossLeavePortal")[0].addEventListener("transitionend", endDeathScene_bossRemove0, false);

	$(".finalLevelEnd_bossLeavePortal").removeClass("bossLeavePortal_hide").addClass("bossLeavePortal_show");
}

function endDeathScene_bossRemove0(event)
{
	$(".tween-bossLeavePortal")[0].removeEventListener("webkitTransitionEnd", endDeathScene_bossRemove0, false);
	$(".tween-bossLeavePortal")[0].removeEventListener("transitionend", endDeathScene_bossRemove0, false);

	$("#finalLevelEnd_boss .bossCont").addClass("tween-finalLevelEndBossDeath0");

	$(".tween-finalLevelEndBossDeath0")[0].addEventListener("webkitAnimationIteration", endDeathScene_bossRemove1, false);
	$(".tween-finalLevelEndBossDeath0")[0].addEventListener("animationiteration", endDeathScene_bossRemove1, false);

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
			$(".tween-finalLevelEndBossDeath0")[0].removeEventListener("webkitAnimationIteration", endDeathScene_bossRemove1, false);
			$(".tween-finalLevelEndBossDeath0")[0].removeEventListener("animationiteration", endDeathScene_bossRemove1, false);

			$("#finalLevelEnd_boss .bossCont").removeClass("tween-finalLevelEndBossDeath0");

			$("#finalLevelEnd_boss").addClass("tween-tween-finalLevelEndBossDeath1");

			$(".tween-tween-finalLevelEndBossDeath1")[0].addEventListener("webkitAnimationEnd", endDeathScene_portalClose, false);
			$(".tween-tween-finalLevelEndBossDeath1")[0].addEventListener("animationend", endDeathScene_portalClose, false);
		}
	}
}

function endDeathScene_portalClose(event)
{
	$(".tween-tween-finalLevelEndBossDeath1")[0].removeEventListener("webkitAnimationEnd", endDeathScene_portalClose, false);
	$(".tween-tween-finalLevelEndBossDeath1")[0].removeEventListener("animationend", endDeathScene_portalClose, false);

	$(".finalLevelEnd_bossLeavePortal").removeClass("bossLeavePortal_show").addClass("bossLeavePortal_hide");

	$(".tween-bossLeavePortal")[0].addEventListener("webkitTransitionEnd", endDeathScene_portalCloseEvent, false);
	$(".tween-bossLeavePortal")[0].addEventListener("transitionend", endDeathScene_portalCloseEvent, false);
}

function endDeathScene_portalCloseEvent(event)
{
	$(".tween-bossLeavePortal")[0].removeEventListener("webkitTransitionEnd", endDeathScene_portalCloseEvent, false);
	$(".tween-bossLeavePortal")[0].removeEventListener("transitionend", endDeathScene_portalCloseEvent, false);

	$("#finalLevelEnd_boss").remove();
	$(".finalLevelEnd_bossLeavePortal").remove();

	$("#finalLevelEnd_wrapper")[0].addEventListener("webkitTransitionEnd", endDeathScene_sceneFocusEnd, false);
	$("#finalLevelEnd_wrapper")[0].addEventListener("transitionend", endDeathScene_sceneFocusEnd, false);

	$("#finalLevelEnd_wrapper").addClass("finalLevelEndWrapperFocus");
}

function endDeathScene_sceneFocusEnd(event)
{
	trace(event.target);
	if(event.target.id === "finalLevelEnd_wrapper")
	{
		$("#finalLevelEnd_wrapper")[0].removeEventListener("webkitTransitionEnd", endDeathScene_sceneFocusEnd, false);
		$("#finalLevelEnd_wrapper")[0].removeEventListener("transitionend", endDeathScene_sceneFocusEnd, false);

		$(".finalLevelEnd_bird_sprite")[0].addEventListener("webkitTransitionEnd", endDeathScene_birdWalk, false);

		$(".finalLevelEnd_bird_sprite")[0].addEventListener("transitionend", endDeathScene_birdWalk, false);

		$(".finalLevelEnd_bird_sprite").removeClass("finalLevelEndBirdFade_hide").addClass("finalLevelEndBirdFade_show");
	}
	// TODO
	// WALK IN
	// HAPPY JUMP
}

function endDeathScene_birdWalk(event)
{
	var delay;

	$(".finalLevelEnd_bird_sprite")[0].removeEventListener("webkitTransitionEnd", endDeathScene_birdWalk, false);

	$(".finalLevelEnd_bird_sprite")[0].removeEventListener("transitionend", endDeathScene_birdWalk, false);

	$(".finalLevelEnd_bird_L .finalLevelEnd_bird_cont").removeClass("finalLevelEndBirdCont_hideL").addClass("finalLevelEndBirdCont_show");

	$(".finalLevelEnd_bird_R .finalLevelEnd_bird_cont").removeClass("finalLevelEndBirdCont_hideR").addClass("finalLevelEndBirdCont_show");

	delay = setTimeout(endDeathScene_birdHappy, 0.4 * 1000);
}

function endDeathScene_birdHappy()
{
	var delay;

	$(".finalLevelEnd_bird").addClass("tween-finalLevelEndBird");

	$(".finalLevelEnd_player .map-goat-head").addClass("mapPlayer_head_happy");


	delay = setTimeout(endDeathScene_endTitleInit, 2 * 1000);
}

function endDeathScene_endTitleInit()
{
	$(".finalLevelEndInfoBoxText2")[0].addEventListener("webkitTransitionEnd", endDeathScene_endTitleColor, false);
	$(".finalLevelEndInfoBoxText2")[0].addEventListener("transitionend", endDeathScene_endTitleColor, false);

	$(".finalLevelEndInfoBoxName0")[0].addEventListener("webkitTransitionEnd", endDeathScene_endTitleColor, false);
	$(".finalLevelEndInfoBoxName0")[0].addEventListener("transitionend", endDeathScene_endTitleColor, false);

	$(".finalLevelEndInfoBoxName1")[0].addEventListener("webkitTransitionEnd", endDeathScene_endTitleColor, false);
	$(".finalLevelEndInfoBoxName1")[0].addEventListener("transitionend", endDeathScene_endTitleColor, false);



	$(".tween-finalLevelEndInfoBox")[0].addEventListener("webkitTransitionEnd", endDeathScene_endTitle0, false);
	$(".tween-finalLevelEndInfoBox")[0].addEventListener("transitionend", endDeathScene_endTitle0, false);



	$(".finalLevelEnd_infoBox").removeClass("finalLevelEndInfoBox_hide").addClass("finalLevelEndInfoBox_show");
}

function endDeathScene_endTitleColor(event)
{
	$(".finalLevelEndInfoBoxText2")[0].removeEventListener("webkitTransitionEnd", endDeathScene_endTitleColor, false);
	$(".finalLevelEndInfoBoxText2")[0].removeEventListener("transitionend", endDeathScene_endTitleColor, false);

	$(event.target).removeClass("finalLevelEndInfoBox_white");
}

function endDeathScene_endTitle0(event)
{
	$(".tween-finalLevelEndInfoBox")[0].removeEventListener("webkitTransitionEnd", endDeathScene_endTitle0, false);
	$(".tween-finalLevelEndInfoBox")[0].removeEventListener("transitionend", endDeathScene_endTitle0, false);

	$(".finalLevelEndInfoBoxText0").removeClass("finalLevelEndInfoBox_white");
	$(".finalLevelEndInfoBoxText1").removeClass("finalLevelEndInfoBox_white");

	endDeathScene_endTitle1();
}

function endDeathScene_endTitle1()
{
	var delay;

	$(".finalLevelEndInfoBoxText2").removeClass("finalLevelEndInfoBox_hide").addClass("finalLevelEndInfoBox_show");

	delay = setTimeout(endDeathScene_endTitle2, 0.5 * 1000);
}


function endDeathScene_endTitle2()
{
	$(".finalLevelEndInfoBoxName0").removeClass("finalLevelEndInfoBox_hide").addClass("finalLevelEndInfoBox_show");
	$(".finalLevelEndInfoBoxName1").removeClass("finalLevelEndInfoBox_hide").addClass("finalLevelEndInfoBox_show");
}