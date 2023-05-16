function calculateTip() {
	var x = parseFloat(document.getElementById("price").value);
	var y = parseFloat(document.getElementById("tip").value / 100);
	var z = document.getElementById("numPeople").value;
	// document.getElementById("total").innerHTML = "Tip: $" + (x * (y / 100));
	if (Number.isNaN(x) == false && Number.isNaN(y) == false) {
		document.getElementById("tipTotal").innerHTML = "Tip: $" + (x * y);
		if(z > 1){document.getElementById("perPerson").innerHTML = "Total per person: " + ((x + (x * y)) / z);}
		else{document.getElementById("perPerson").innerHTML = null}
		document.getElementById("total").innerHTML = "Total w/ tip: $" + (x + (x * y));
	}
	else{
		document.getElementById("tipTotal").innerHTML = "Please enter a valid number";
	}
}