"use strict";

window.addEventListener("DOMContentLoaded", rollUp);

const cookie = document.querySelector("#cookie");
const close = Array.from(document.getElementsByClassName("close"));

function rollUp(){
   cookie.style.right = `0px`;    
    close.forEach(function(button){
        button.addEventListener(`click`, bounce)
    })
}
function bounce() {
    setTimeout(rollOut, 500);
}
function rollOut() {
    cookie.style.right = `-500px`;
}