document.addEventListener("DOMContentLoaded", function(){

	var next=document.querySelector("#nextPicture");      //wycigam buttona
	var prev=document.querySelector("#prevPicture");	
	var pictures=document.querySelectorAll(".slider li"); //wycigam liste z obrazmkami
	
	
	var currentPicture=0;		

	pictures[currentPicture].classList.add("visible"); //do zerowego obrazka dodaje klase visible
	
	// drugi sposob === pictures[currentImage].style.display="inline-block");

	next.addEventListener("click", function(event){	//na buttonie next wywoluje zdarzenie click
			pictures[currentPicture].classList.remove("visible"); //usuwa klase 
			currentPicture++; // podnosi current o1
			if(currentPicture>=pictures.length){// jesli aktualny obrazek jest ma wartosc >= ilosci obrazkow to zeruje go
				currentPicture=0;
			}

			pictures[currentPicture].classList.add("visible"); // do obrazka dodaje klase visible

	});
	
	prev.addEventListener("click", function(event){
			pictures[currentPicture].classList.remove("visible");
			currentPicture--;
			if(currentPicture<0){    
				currentPicture=pictures.length-1;    
			}
			
			pictures[currentPicture].classList.add("visible");
	});

		


});