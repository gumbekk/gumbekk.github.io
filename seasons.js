var seasons = ["Winter", "Spring", "Summer", "Fall"];
var pictures = ["winter.jpg", "spring.jpg", "summer.jpg", "fall.jpg"];
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = "Winter";
// document.getElementById("picture").innerHTML = '<img src="winter.jpg" alt="seasons" width="500" height="333">';
document.getElementById("picture").src = pictures[0];
slider.oninput = function() {
  output.innerHTML = seasons[this.value];
  // document.getElementById("picture").innerHTML = '<img src="' + pictures[this.value] + '" alt="seasons" width="500" height="333">';
  document.getElementById("picture").src = pictures[this.value];
}