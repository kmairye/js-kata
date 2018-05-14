"use strict;"
window.addEventListener("DOMContentLoaded", rollUp);
const cookie = document.querySelector("#container #cookie");

function rollUp(){
    cookie.style.backgroundColor = `hsl(${Math.random()*360}180, 50%, 50%)`;
}
