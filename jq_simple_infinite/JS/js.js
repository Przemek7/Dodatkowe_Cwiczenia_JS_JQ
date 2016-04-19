$(document).ready(function(){
 
var ul=$(".slider ul");
var firstUlChild= ul.children().first();
var lastUlChild= ul.children().last();

firstUlChild.before(lastUlChild.clone());//wstawiamy w odpowiendim miejscu
lastUlChild.after(firstUlChild.clone());



var images=$(".slider img");
//console.log(images.length);
var pictureWidth = 400;
var next=$("#nextPicture");
var prev=$("#prevPicture");
var position=1;

ul.css("width",pictureWidth * images.length +"px");
ul.css("left", -position * pictureWidth + "px");


	next.on("click",function(event){
		
		position++;
		ul.animate({
			"left": -position * pictureWidth + "px"},1000,function(){
				if(position===images.length -1){
					position=1;
					ul.css("left", -position * pictureWidth + "px");

				}
			});
	});
			


	prev.on("click",function(event){
		position--;
		ul.animate({
			"left": -position *pictureWidth +"px"},1000,function(){
				if(position===0){
					position=images.length -2;
					ul.css("left", -position * pictureWidth + "px");
				}
			});
		
	});


});



