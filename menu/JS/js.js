document.addEventListener("DOMContentLoaded", function(){

var list= document.querySelectorAll(".nav>ul>li");// szuka wszytskie LI w nav po ul i przypisuje do zmiennej list

for(var i=0;i<list.length;i++){ 			// puszcza petle do ilosci Li
	list[i].addEventListener("mouseover",function(event){ // zdarzenie typu mouseover na dany element listy
		var subList = this.querySelector("ul");  //wstawia do zmiennej wszytskie elememty ul tej listy[i]
		
		if(subList !==null){ 			//jesli sublist nie jest null to..
			subList.style.display="block";// nastawiam klase na "widoczna"
		}
	});

	list[i].addEventListener("mouseout",function(event){
		var subList = this.querySelector("ul");
		if(subList !==null){
			subList.style.display="none";// nastawia na "znikanie"
		} 
	})
}





});