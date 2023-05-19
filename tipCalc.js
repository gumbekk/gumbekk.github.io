function calculateTip() {
	var x = parseFloat(document.getElementById("price").value);
	var y = parseFloat(document.getElementById("tip").value / 100);
	var z = document.getElementById("numPeople").value;
	// document.getElementById("total").innerHTML = "Tip: $" + (x * (y / 100));
	if (Number.isNaN(x) == false && Number.isNaN(y) == false) {
		document.getElementById("tipTotal").innerHTML = "Tip: $" + (x * y).toFixed(2);
		if(z > 1){document.getElementById("perPerson").innerHTML = "Total per person: " + ((x + (x * y)) / z).toFixed(2);}
		else{document.getElementById("perPerson").innerHTML = null;}
		document.getElementById("total").innerHTML = "Total w/ tip: $" + (x + (x * y)).toFixed(2);
	}
	else{
		document.getElementById("tipTotal").innerHTML = "Please enter a valid number";
	}
}