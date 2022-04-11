export function showTime() {
	const time = new Date();
	let hour = time.getHours();
	let minute = time.getMinutes();
	let sec = time.getSeconds();
 
	hour = checkTime(hour);
	minute = checkTime(minute);
	sec = checkTime(sec);
 
	let timeOutput = hour + ":" + minute + ":" + sec;
 
	document.getElementById("clock").innerHTML = timeOutput;
 }
 
 function checkTime(i) {
	if (i < 10) {
	  i = "0" + i;
	} // add zero in front of numbers < 10
	return i;
 }