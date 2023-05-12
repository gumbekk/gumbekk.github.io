// Code a tip calculator
var x = parseInt(document.getElementById("price").value);
var y = parseInt(document.getElementById("tip").value);
// console.log(x);
// console.log(Number.isInteger(parseInt(x)));
function calculateTip() {
	var x = parseInt(document.getElementById("price").value);
	var y = parseInt(document.getElementById("tip").value);
	// document.getElementById("total").innerHTML = "Tip: $" + (x * (y / 100));
	if (Number.isInteger(x) && Number.isInteger(y)) {
		document.getElementById("total").innerHTML = "Tip: $" + (x * (y / 100));
	}
	else{
		document.getElementById("total").innerHTML = "Please enter a valid number";
	}
	console.log("price is " + Number.isInteger(x));
	console.log("tip is " + Number.isInteger(y));
}