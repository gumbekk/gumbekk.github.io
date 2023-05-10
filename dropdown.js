for (let i = 1; i <= 1000; i++){
	document.write(makeInput(i));
}
function makeInput(number){
	var returnNumber = `<option>${number}`;
	return returnNumber;
}
// for (let i = 0; i <= 10; i++){
// 	document.write(makeInput(i));
// }