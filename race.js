window.onload = function() {
	// #1: Grab my elements from the page so I can use them
	var blueCar = document.getElementById('blueCar');
	var redCar = document.getElementById('redCar');
	var speed = 20;
	var trackLength = 750;

	document.addEventListener('keydown', drive);

	function drive(e) {
	    // #2: Figure out keypresses for gameplay.
	    // #3: Test it. Log my keypresses to see if it works (D key for blue, L for red).
	    // #4: Use a switch for keypresses to move each player based on key pressed.
	    switch(e.keyCode) {
	        case 68:
	            console.log('Blue move right (D).');
	            moveCar(blueCar, speed);
	            break;
	        case 76:
	            console.log('Red move right (L).');
	            moveCar(redCar, speed);
	            break;
	    }
	}

	function moveCar(car, speed) {
		// car.style.left will not be visible unless it is an inline HTML style!
		var carPosition = parseInt(car.style.left) || 0
		if (carPosition < trackLength) {
			pos = carPosition + speed;
			car.style.left = pos + 'px';
		} else {
			alert("We have a winner!")
		}
	}
}

// How about a reset button ...
function reset() {
    console.log("Resetting.");
    blueCar.style.left = '0px';
    redCar.style.left = '0px';
}
