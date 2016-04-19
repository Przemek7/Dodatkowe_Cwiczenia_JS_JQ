$(document).ready(function(){

	var NameInput=$("#nameInput");
	var EmailInput=$("#emailInput");
	var MessageInput=$("#mesageInput");
	var form=$("#contactForm");
	var DivError=$(".error");


	form.on("submit",function(event){
		var name=NameInput.val();
		var emial=EmailInput.val();
		var message=MessageInput.val();
		var errorMessage="";

		if(name.length<5){
			errorMessage += "Name is shorter than 5 chars. ";
			event.preventDefault();
		}
		if(email.indexOf("@")===-1 || email.indexOf(".")===-1){
			errorMessage +=  "Provide proper email ";
			event.preventDefault();
		}
		if(message.length<10){
			 errorMessage += "Message have to be longer than 10 chars";
			event.preventDefault();
		}

		DivError.text(errorMessage);
	})



});



