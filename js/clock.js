function updateClock() 
{
	Date.getMinutesTwoDigits = function()
	{
		var retval = now.getMinutes();
		if (retval < 10) return ("0" + retval.toString());
		else return retval.toString();
	}
	var now = new Date(),
	time = now.getHours() + ':' + Date.getMinutesTwoDigits();
	document.getElementById('time').innerHTML = ["", time].join('');
	setTimeout(updateClock, 1000);
}
updateClock();
