'use strict';

console.log("working");

function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav1") {
        x.className += " responsive";
    } else {
        x.className = "nav1";
    }
}

// Get the container element
var btnContainer = document.getElementById("nav1");

// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("navAnchor");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activeNav");
    current[0].className = current[0].className.replace(" activeNav", "");
    this.className += " activeNav";
  });
  console.log("forloop");
}
