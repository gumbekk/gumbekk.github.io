var title = "Display Dialog Boxes";
var button = false;
document.write("<h1>" + title + "</h1>");
showTime = function(){
	document.getElementById("myTime").innerHTML = Date();
}
makeBlue = function(){
	// document.body.innerHTML = "<h3>Hi! It's a bluetiful Day</h3>";
	if(button == false){
	document.getElementById("blue").innerHTML = "It's a bleutiful day";
	document.body.style.backgroundColor = "lightblue";
	button = true;
	}
	else{
		document.getElementById("blue").innerHTML = "";
		document.body.style.backgroundColor = "white";
		button = false;
	
	}
}