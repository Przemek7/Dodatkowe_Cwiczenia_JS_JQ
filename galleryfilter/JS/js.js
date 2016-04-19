document.addEventListener("DOMContentLoaded", function(){

var allPictures=document.querySelectorAll(".gallery img"); //pobiera do zmiennej liste/tablice z obrazkami
var showButton=document.querySelector("#showButton");// pobiera do zmiennej buttona o idshowbutton
var hideButton=document.querySelector("#hideButton");// pobiera do zmiennej buttona o idhidebutton
var tagInput=document.querySelector("#tagInput");//  pobieta do zmiennej inputa


hideButton.addEventListener("click", function(event){ //oblsuguje zdarzenie typu click na obiekt hideButton

	var tag =tagInput.value; // wyciaga zawartosc inputa
	var tag=tag.trim(); //usuwa  z inputa  puste znaki

	if(tag.length===0){      //jesli nic nie wpiszemy to return
		return;
	}

	
	for(var i=0; i<allPictures.length;i++){            //petla liczy do ilosci obrazkow
		var pictureTags= allPictures[i].dataset.tag;   //picturesTags pobiera wartość atrybutu data-tag z allPictures o indeksie i
			if(pictureTags.indexOf(tag) !==-1){           		//??sprawdza czy treść wpisywanego taga jest zgodna z istniejącymi tagami jesli 	rozne od-1		 
			allPictures[i].classList.add("invisible");  // do obrazka [i]dodjaemy klase "invisible"
		}      
	}
});

showButton.addEventListener("click",function(event){

	var tag= tagInput.value; //wyciaga zawartosc inputa
	var tag=tag.trim();		//usuwa z inputa puste znaki
	for(var i=0;i<allPictures.length;i++){         //petla liczy do ilosci obrazkow
		var pictureTags=allPictures[i].dataset.tag;   //picturesTags pobiera wartość atrybutu data-tag z allPictures o indeksie i
		if(pictureTags.indexOf(tag)!==1){
			allPictures[i].classList.remove("invisible");  // usuwamy klase
		}
	}




});


});
