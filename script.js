const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");

// move the hands to the given number position using js
let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

//initiate date object and get hours, minutes and seconds 
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

hourHand.style.transform = "rotate(" + hrPosition + "deg)";
minuteHand.style.transform = "rotate(" + minPosition + "deg)";
secondHand.style.transform = "rotate(" + secPosition + "deg)";