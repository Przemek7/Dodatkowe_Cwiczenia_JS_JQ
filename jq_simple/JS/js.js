$(document).ready(function(){
 
var ul=$(".slider ul");
var images=$(".slider img");
console.log(images.length);
var pictureWidth = 400;
var next=$("#nextPicture");
var prev=$("#prevPicture");
var position=0;

ul.css("width", pictureWidth * images.length + "px");// dodaje klase o szerkosci 400* ilosc obrazkow
ul.css("left", -position * pictureWidth + "px"); //dodaje klase -400




	next.on("click",function(event){
		
		position++;					//zwieksza o1
		if(position >= images.length){//sprawdza czy jest wieksza od ilosciobrazkow
			//console.log(slider1);
			position=images.length-1;			//zmiejsza position o 1
		}else{
			ul.animate({									
			"left": -position * pictureWidth + "px"},1000);// animuje przesuwa obrazek
		}	
	});

	prev.on("click",function(event){
		position--;
		if(position <=0){
			position = 0;
		}
		ul.animate({
			"left": -position *pictureWidth +"px"},1000);
		
	});


});



