

$(document).ready(function(){

var progressBar=$(".progress-bar");
var button=$(".proba div");


button.on('click',function(event){
	var id=$(this).data("id");
				//wypiasanie data , this -na nim wywolany jest nasz event
	var width=$(this).data("width");
	var color=$(this).data("color");

	var myProgressBar = progressBar.filter("#bar" + id); // wyszukanie #bar przefitroanie elemtu progressBAr
		console.log(myProgressBar);
	var mySpan=myProgressBar.find("span"); 

	mySpan.removeClass()		//wyrzucanie klas
	mySpan.addClass(color);		//dodanie klasy color
	mySpan.animate({
		width: width			//klucz- wartosc , nadanie aniamacji
	},1000);


//progressBar.text(width);


})





})


