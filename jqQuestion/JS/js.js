$(document).ready(function(){
 
 	var question=$(".QA h1");
 	var answer=$(".QA p")

 	question.on('click',function(event){
 		var jqThis =$(this);	
 		var myPar=jqThis.next(); //dziecko 	

 		answer.not(myPar).slideUp();  //jelsi dziecko nie jest moje
 		myPar.slideToggle();
 	});


});