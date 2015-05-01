//
// Part 1
//
var arr = document.getElementsByTagName("li");
for (var i = 0; i < arr.length; i++){
	arr[i].style.borderBottom = "5px solid black";
}

//
// Part 2
//
var arr = document.getElementsByClassName("datatype");
for (var i = 0; i < arr.length; i++){
	arr[i].style.color = "red";
}

//
// Part 3
//
var arr = document.querySelectorAll(".function");
for (var i = 0; i < arr.length; i++){
	arr[i].style.color = "blue";
}
// or 
for (var x of Array.prototype.slice.call(document.querySelectorAll(".function"))) {
	x.style.color = "green";
}