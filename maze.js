var alive = true;// every game has a state, this state indicates life
var game_state = null;// this is the state as the game is being played
window.onload = function(){
	/*document.getElementById("start").onclick = start;
	document.getElementById("end").onmouseover = overEnd;*/
	var wall = document.querySelectorAll("div#maze div.boundary");
	for(var i = 0; i < wall.length;i++){
		wall[i].onmouseover = function(){
			this.setAttribute("class","boundary youlose");
		}/*endGame;*/
	}
	document.body.onmouseover = overBody;
};


