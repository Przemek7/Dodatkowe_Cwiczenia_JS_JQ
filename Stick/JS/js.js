$(document).ready(function(){
 
 var nav=$(".nav");
var navPosition= nav.position().top; //dystnas od top 
 var placeholder=$("<div></div>");
	
 placeholder.css("height",nav.outerHeight());	//nadje divovi klase o wyskosci



$(window).resize(function(){       // za kazdym razme jak okno zmienia wielkosc liczy odleglos
if(nav.hasClass("sticky")){
	navPosition=placeholder.position().top;
}else
{
	navPosition=nav.position().top;
} 

});

$(window).on('scroll', function(event){
 var currentPosition=$(document).scrollTop(); //wysokosc scrolowania 
 console.log(currentPosition)	
 if(currentPosition>navPosition){
 	nav.removeClass('nav-logo'); 
 	nav.addClass('sticky'); 

 	if(placeholder.parent().length===0) {   //sprawdza czy jest drzewie
 		placeholder.insertBefore(nav); }//dodaj przedemnie nav
 }else{

 	nav.removeClass('sticky');       //zabiera z nav kalse sticky
 		if(placeholder.parent().length!==0){
 			placeholder.detach();
 		}
 }
});

});
