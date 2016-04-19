

$(document).ready(function(){

var popupBackground=$(".popupBackground");
var popupContainer=$(".popupContainer");
var close=$("#close");
var open=$("#open");



function start(){
	popupBackground.fadeIn();	
	popupContainer.fadeIn();
};

window.onload=start;

close.on('click',function(){
	popupBackground.fadeOut();	
	popupContainer.fadeOut();
});


open.on('click',function(){
	popupBackground.fadeIn(1000);	
	popupContainer.fadeIn(1000);
});


})


/*<div class="popupBackground"></div>
	
 <div class="popupContainer">
 	<button id="close">X</button>
 </div> */