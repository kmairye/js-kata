"use strict";
// listen for clicks on the color-selectors
const root = document.documentElement;
const parent = document.querySelector("#colorselector")
let allSelectors = Array.from(parent.children);

allSelectors.forEach(function(elm) {
    elm.addEventListener("click", isClicked);
});


// when one is clicked:
function isClicked(){
    // find the element that was clicked
    console.log(this);
    
    // find the color from that element
    let number = this.getAttribute("data-color");

    let orgVar = getComputedStyle(root).getPropertyValue("--basecolor");
    console.log(orgVar);

    // set the css variable --basecolor 
    root.style.setProperty(`--basecolor`, number);
}