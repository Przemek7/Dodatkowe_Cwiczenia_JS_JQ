

$(document).ready(function(){

	var popupBackground=$(".popupBackground");
	var open=$(".open-popup-lampa");
	var wlacznik=$(".zarowka-container");
	var wlacznik2=$(".zarowka");


	function start(){
		popupBackground.fadeIn();	
		wlacznik.fadeIn();
	};

	window.onload=start;

	open.on('click',function(){
		popupBackground.fadeIn(100);
		wlacznik.fadeIn(100);	
	});

	wlacznik2.on('click',function(){
		popupBackground.fadeOut(100);
		wlacznik.fadeOut(100);
	});


})
