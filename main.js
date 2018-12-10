// Name: _your name here_
// Date: _add date here_
// Section: CSE 154 _your section here_
//
// -- your description of what this file does here --
//

(function () {
  "use strict";

  window.addEventListener("load", initialize);
  const navElements = ["nav-home", "nav-about", "nav-projects", "nav-contact"];

  function initialize() {
    console.log("All Linked");

    addNavBarHoverHighlights();

    document.getElementById("nav-about").addEventListener("click", function () {
      adjustPageDisplay("#about-text");
    });
  }

  function adjustPageDisplay(element) {

    document.querySelector("#home-text").classList.add("hidden");
    document.querySelector("#about-text").classList.add("hidden");
    document.querySelector("#projects-text").classList.add("hidden");
    document.querySelector("#contact-text").classList.add("hidden");

    document.querySelector(element).classList.remove("hidden");


  }


  function addNavBarHoverHighlights() {
    navElements.forEach(element => {
      document
        .getElementById(element)
        .addEventListener("mouseover", function () {
          document.getElementById(element).classList.add("hover-button");
        });
    });

    navElements.forEach(element => {
      document
        .getElementById(element)
        .addEventListener("mouseout", function () {
          document.getElementById(element).classList.remove("hover-button");
        });
    });
  }
})();