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
   var angle1
   var angle2
   var angle3

   if ((angle1 == angle2) && (angle2 == angle3)) {
    document.getElementById("answers").innerHTML = "Your triangle is an equilateral triangle."
   }
   else if ((angle1 == angle2) || (angle2 == angle3) || (angle3 == angle1)) {
    document.getElementById("answers").innerHTML = "Your triangle is an isosceles triangle."
   }
   else {
    document.getElementById("answers").innerHTML = "Your triangle is a scalene triangle."
   }
 }
