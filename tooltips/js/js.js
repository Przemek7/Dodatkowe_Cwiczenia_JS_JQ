//<span class="tooltip-text">Text nowy</span>

document.addEventListener("DOMContentLoaded", function(){

	var tooltipList= document.querySelectorAll(".tooltip");

    for(var i=0; i<tooltipList.length;i++){
    	tooltipList[i].addEventListener("mouseover",function(event){
    		var tooltipText=this.dataset.text;   //dataset -wszytskie dataset -jego text
    		
    		var newElement = document.createElement("SPAN"); //stworzenie nowego eleme
    		newElement.classList.add("tooltip-text"); // dodanie do nowego elementu stylu
    		newElement.innerHTML = tooltipText; //dodanie do newelementu textu pobranego z tooltipaText

    		this.appendChild(newElement); //dodanie do drzewa
    	});

    	tooltipList[i].addEventListener("mouseout",function(event){
    		var elementToRemove= this.querySelector(".tooltip-text");//szuka klasy tooltip-text
    		this.removeChild(elementToRemove); // usuwa ja po zjechaniu myszki
    	});

    }


});