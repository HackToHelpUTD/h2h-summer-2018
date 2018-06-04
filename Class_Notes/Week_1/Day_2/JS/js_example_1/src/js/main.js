// Variable Scopes

var total = 100;

console.log(total);

// Functions
function add_x_and_y() {
  var x = 10;
  var y = 20;
  var total = x + y;
  return total;
}

console.log(add_x_and_y());

// Scopes
console.log(total);

// Function to add to numbers
function add(x, y) {
  var total = x + y;
  return total;
}

console.log(add(400, 20));

// Define a Global Variable
// Change the GLOBAL VARIABLE's value inside of a function
// Print out that value OUTSIDE of that function

var div = window.document.createElement("div");
div.classList.add("orange");
div.innerHTML = "Hi, I am a div!";

var body = document.getElementsByTagName("body")[0];

// Event Listerners
div.addEventListener("click", function () {
  alert("Hey! You just clicked the Document!");
});

body.appendChild(div);
