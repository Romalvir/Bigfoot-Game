//there is a problem in the game where bigfoot loads before the background image.
//make a function to fix that

function loadBigFoot() {
	document.getElementById("bigFoot").src = "bigfoot.png"
}

//make game harder! move big foot around

function moveBigFoot(){
	//Alert
	alert('Woohoo, you win! You found Bigfoot!')
	//always make a const first
	const picOFBf = document.getElementById("bigFoot")
	//Positiong, you always have to look from Top & Left
	//Create 2 new variables Top and Left
	//below will generate numbers between 0-300

	var x = Math.random() * 300
	var y = Math.random() * 300

	//Now that we have random positions, Apple them to the image

	picOFBf.style.top = x + "px"
	picOFBf.style.left = y + "px"
	//take the pic then add the style and position equal to the variable + "px"
}