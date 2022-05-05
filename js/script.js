// Created by: Zaida Hammel
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-05-JS/sw.js", {
    scope: "/ICS2O-Unit5-05-JS/",
  });
}

/**
 * This function determines what angles create what triangle.
 */
function myButtonClicked() {
  var side1 = document.getElementById("side1").value
  var side2 = document.getElementById("side2").value
  var side3 = document.getElementById("side3").value

  if (side1 == side2 && side2 == side3) {
    document.getElementById("answers").innerHTML = "Your triangle is an equilateral triangle."
  } else if (side == side || side == side || side == side) {
    document.getElementById("answers").innerHTML = "Your triangle is an isosceles triangle."
  } else {
    document.getElementById("answers").innerHTML = "Your triangle is a scalene triangle."
  }
}
