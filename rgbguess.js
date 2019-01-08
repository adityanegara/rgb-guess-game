
var numSquares = 6; 
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


for(var i = 0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click",clickSquare);
}

function clickSquare(){
	var clickedColor = this.style.backgroundColor;

	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		changeColors(clickedColor); 
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play Again!";
	}
	else{
		this.style.backgroundColor="#232323";
		messageDisplay.textContent = "Try Again";
	}
}

function changeColors(color){
	for(var i = 0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//membuat array
	var arr = [];
	//menambahkan num random corlors ke array

	for(var i = 0;i< num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red dari 0-255
	var r = Math.floor(Math.random() *256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() *256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() *256);
	var rgb= "rgb(" +r +", " + g + ", " +b +")";
	return rgb;
}

function resetGame(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from arrray
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0;i< squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", resetGame);

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];

		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length;i++){
		
			squares[i].style.backgroundColor = colors[i];

		
			squares[i].style.display = "block";
		
	}
});