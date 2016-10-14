var alive = 1;// every game has a state, this state indicates life
var game_state = null;// this is the state as the game is being played
var stopclock = null;//timer used to check game time
var totaltime = 0;// counter for seconds in gameplay

/// main function which is run once the browser support javascipt 
window.onload = function(){
	document.getElementById("end").onmouseover = overEnd;
	document.getElementById("start").onclick = start;
	var wall = document.querySelectorAll("div#maze div.boundary");
	for(var i = 0; i < wall.length; i++){
		wall[i].onmouseover = endGame;/*function(){
			this.setAttribute("class","boundary youlose");
		}*/
	}
	document.body.onmouseover = overBody;
};

/// function for when the player fails to navigate the maze 
function endGame(event){
	if (game_state === false){
		state = true;
		var lose = document.getElementById("status");
		lose.innerHTML = "you're a loser :0";
		var wall = document.querySelectorAll("div#maze div.boundary");
		for (var i = 0; i<wall.length;i++){
			wall[i].classList.add("youlose");
		}
		clearInterval(stopclock);
		stopclock = null;
		totaltime = 0;
		//alive = 1;
	}
}

/// function for when the game play is succesful hence the maze was navigated 
function overEnd(){
	if(game_state === false){
		document.getElementById("status").innerHTML = "you wON!!! in "+ Math.round(10*totaltime)/10 + " seconds .... congrats";
		clearInterval(stopclock);
		stopclock = null;
		totaltime = 0;
		game_state = null;
	}
}

/// function for starting the game 
function start(){
	if( alive > 0){
		clearInterval(stopclock);
		stopclock = null;
		totaltime = 0;
		document.getElementById("status").innerHTML ="0";
		stopclock = setInterval(function(){ mytracking(); },100);
		game_state = false;
		var wall = document.querySelectorAll("div#maze div.boundary");
		for ( var i = 0 ; i < wall.length ; i++ ){
			wall[i].classList.remove("youlose");
		}
	}
}
//// function for tracking the program and is stop at any endgame condition 
function mytracking(){
	totaltime += 0.1;
	document.getElementById("status").innerHTML = Math.round(10*totaltime)/10;
}
/// fucntion for when the game is started and the player leaves the maze 
function overBody(event){
	if ((game_state === false) && (event.target == document.body)){
		endGame(event);
	}
}

