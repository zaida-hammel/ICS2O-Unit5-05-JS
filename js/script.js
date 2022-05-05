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
  var angle1 = document.getElementById("side1").innerHTML
  var angle2 = document.getElementById("side2").innerHTML
  var angle3 = document.getElementById("side3").innerHTML

  if (angle1 == angle2 && angle2 == angle3) {
    document.getElementById("answers").innerHTML = "Your triangle is an equilateral triangle."
  } else if (angle1 == angle2 || angle2 == angle3 || angle3 == angle1) {
    document.getElementById("answers").innerHTML = "Your triangle is an isosceles triangle."
  } else {
    document.getElementById("answers").innerHTML = "Your triangle is a scalene triangle."
  }
}
