// Ina Patrice
// website.js
// JavaScript file for website inapatrice.github.io

// date and time at the beginning of the page
var headerClock = setInterval(dateClock, 0);

// prints the date and time on the screen at the beginning of the page
function dateClock() {
	var today = new Date();
	// date
	const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var month = months[today.getMonth()]
	var date = month + ' ' + today.getDate() + ' ' + today.getFullYear() + ' at ';
	// local time for users
	var time = today.toLocaleTimeString();
	// print to screen
	document.getElementById("date").innerHTML = "Current Login: " + date + time;
}

// blinking cursor
        var cursor = true;
        var speed = 250;
        setInterval(() => {
          if(cursor) {
            document.getElementById('cursor').style.opacity = 0;
            cursor = false;
          }else {
            document.getElementById('cursor').style.opacity = 1;
            cursor = true;
          }
        }, speed);
