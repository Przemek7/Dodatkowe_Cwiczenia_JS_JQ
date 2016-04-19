// <div class="fullscreen">
// 	<img src="http://lorempixel.com/g/400/200/" alt="">
// 	<button class="close">CLOSE</button>
// </div>

document.addEventListener("DOMContentLoaded", function () {
	var list = document.querySelectorAll(".gallery ul li img"); //wyciaga img
	
	var body = document.querySelector("body");			//wyciaga element body

	for (var i=0; i<list.length; i++) {					//petla po obrazkach do ich ilosci
		list[i].addEventListener("click", function (event) { // wywolanie eventu na danym od i elemencie
			var src = this.getAttribute("src");				// wyciagam dany atrybut src	
			var newDiv = document.createElement("div");			// tworze diva
			var newButton = document.createElement("button");   //tworze buttona
			var newImg = document.createElement("img");			//tworze nowy img

			newDiv.classList.add("fullScreen");					//nadaje klasy
			newButton.classList.add("close");
			newImg.setAttribute("src", src);					//dodaje atrybu
			newButton.innerHTML = ("ZAMKNIJ");					//dodaje text do buttona

			newDiv.appendChild(newImg);						//wkladam do diva img
			newDiv.appendChild(newButton);					//wkladam do diva buttona

			newButton.addEventListener("click", function (event) {   
				body.removeChild(newDiv);					//do body dodaje usuwanie nowego diva
			});
			body.appendChild(newDiv);						// dodaje do body diva
		})
	}
});

// Next / Prev (--> slider)