

$(document).ready(function(){

var cookies=$(".cookies");
var close=$("#close");


function start(){
	cookies.fadeIn();	
};

window.onload=start();

close.on('click',function(){
	cookies.fadeOut();	
	
});




})


/*<div class="popupBackground"></div>
	
 <div class="popupContainer">
 	<button id="close">X</button>
 </div> */