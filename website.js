// JavaScript file for website inapatrice.github.io

var today = new Date();

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
var month = months[today.getMonth()]

var date = month + ' ' + today.getDate() + ' ' + today.getFullYear() + ' at ';
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " (EST)";
document.getElementById("date").innerHTML = "Current Login: " + date + time;
