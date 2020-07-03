const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");

//initiate date object and get hours, minutes and seconds
var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// move the hands according to the current time
let hrPosition = (hr * 360 / 12 ) + (min * (360 /60)/12) ;
let minPosition = (min * 360 / 60) + (sec * (360/60) / 60 );
let secPosition = (sec * 360) / 60;

hourHand.style.transform = "rotate(" + hrPosition + "deg)";
minuteHand.style.transform = "rotate(" + minPosition + "deg)";
secondHand.style.transform = "rotate(" + secPosition + "deg)";
