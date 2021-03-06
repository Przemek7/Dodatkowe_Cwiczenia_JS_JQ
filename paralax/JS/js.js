

$(document).ready(function(){




var scene=$(".scene");
var elements=$(".scene .element");
var oldMousePositionX=0;
var oldMousePositionY=0;


elements.each(function(index, element){
	var jqElement =$(element);
	jqElement.css({
			"z-index": jqElement.data("z"),
			"left": jqElement.data("x"),
			"top":jqElement.data("y")

	});

});

	scene.on("mouseenter",function(event){
		oldMousePositionX= event.offsetX;
		oldMousePositionY= event.offsetY;
	})
 
	scene.on("mousemove",function(event){
		var currentMousePositionX=event.offsetX;
		var currentMousePositionY=event.offsetY;

		

		if(event.target !== this){    //event.target 
			currentMousePositionX +=  parseFloat($(event.target).css("left"));
			currentMousePositionY += parseFloat($(event.target).css("top"));

		}

		var mousemoveX=currentMousePositionX - oldMousePositionX;
		var mousemoveY=currentMousePositionY - oldMousePositionY;
		
		elements.each(function(index, element){
			var jqElement =$(element);
			var spedd=jqElement.data("speed");
			jqElement.css({
				"left" : "+=" + (mousemoveX * spedd),
				"top" : "+=" + (mousemoveY * spedd)
			})
		});

		oldMousePositionX =currentMousePositionX;
		oldMousePositionY =currentMousePositionY;

	});
});
