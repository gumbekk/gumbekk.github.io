var title = "Display Dialog Boxes";
var button = false;
document.write("<h1>" + title + "</h1>");
showTime = function(){
	document.getElementById("myTime").innerHTML = Date();
}
makeBlue = function(){;
	if(button == false)
	{
		document.getElementById("blue").innerHTML = "It's a bleutiful day";
		document.body.style.backgroundColor = "lightblue";
		button = true;
	}
	else
	{
		document.getElementById("blue").innerHTML = "";
		document.body.style.backgroundColor = "white";
		button = false;
	
	}
}