
/*		<li>
			<h1>task1</h1>
			<button>Delete</button>
			<button>Complete</button>
		</li>
		<li class="done">
			<h1>task1</h1>
			<button>Delete</button>
			<button>Complete</button>
		</li>
*/



document.addEventListener("DOMContentLoaded", function(){

	var addTaskButton= document.getElementById("addTaskButton"); //wycigam zmienne
	var taskList= document.getElementById("taskList");
	var taskInput= document.getElementById("taskInput");
	
	var removeDoneButton=document.getElementById("removeFinishedTaskButton");

	removeDoneButton.addEventListener("click",function(){

		var allTasksToDelete=document.querySelectorAll("#taskList .done");  //wycga wszystkie taskie z klasa done
		for(var i=0; i<allTasksToDelete.length;i++){		
			taskList.removeChild(allTasksToDelete[i]); // usuwa wszytskie dzieci
		}
	});





	addTaskButton.addEventListener("click",function(event){
		var taskText= taskInput.value;							//pobiera zawartosc inputa

		if(taskText.length<4){								//jesli slowo jest krotsze niz 4znaki retun
			return;
		}


	var newHeader=document.createElement("H1");					//tworze elementy i wstawiam do zmiennych
	var newCompleteButton=document.createElement("BUTTON");
	var newDeleteButton=document.createElement("BUTTON");
	var newLi= document.createElement("LI");

	newLi.appendChild(newHeader);							//dodaje elementy do li
	newLi.appendChild(newCompleteButton);				
	newLi.appendChild(newDeleteButton);

	newHeader.innerHTML = taskText;							//dodanie do newHeder tekstu z taskText
	newCompleteButton.innerHTML = "complete";				//dodanie do buttona tekstu "complete"
	newDeleteButton.innerHTML = "Delete";					//dodanie do buttona tesktu "delete"



	newCompleteButton.addEventListener("click",function(){ //wywolanie eevntu na buttonie new...

		this.parentNode.classList.add("done");				// na ten element nadaje rodzicowi klase "done" 

	});


	newDeleteButton.addEventListener("click",function(){
		taskList.removeChild(this.parentNode);				// usuwa dziecko //czemu this

	});


	taskList.appendChild(newLi);

   });


});


