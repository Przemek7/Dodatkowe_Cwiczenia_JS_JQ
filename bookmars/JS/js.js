$(document).ready(function(){
 
var tabs=$(".tabs li");
var div=$(".tabs div");
var currentVisibleElement=-1; /// wartosc bledna ,niewidoczna

tabs.each(function(index,element){		// przechodzi po eleme listy
	$(element).on("click",function(event){       //do kazdego z elementu na click
		if(currentVisibleElement !==-1 && currentVisibleElement!== index){//jesli cu.. rozne od-1 i nie jest indexem
			div.eq(currentVisibleElement).hide();   //ukrywa 
		}
		currentVisibleElement = index;	// przypisuje wartosc "dodatnia"
		div.eq(currentVisibleElement).show(); //pokazuje
	});
});




});

