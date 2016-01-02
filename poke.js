//Richard Cotran Assignment 10 Javascript file

var num = 3;
//The Pokemon's identification number for the script file
var correct = 0;
//Number of answers correct
var incorrect = 0;
//Number of answers incorrect


/*Checks to see if the user has named the proper Pokemon and sets the next Pokemon to be named*/

function checkGuess(){
	var theGuess = document.getElementById("guess").value;

//Takes name of Pokemon inserted by user




	if (num == 0){
		if (theGuess == "Bulbasaur" || theGuess == "bulbasaur" || theGuess == "BULBASAUR"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 1){
		if (theGuess == "Charmander" || theGuess == "charmander" || theGuess == "CHARMANDER"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 2){
		if (theGuess == "Squirtle" || theGuess == "squirtle" || theGuess == "SQUIRTLE"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}


	if (num == 3){
		if (theGuess == "Pikachu" || theGuess == "pikachu" || theGuess == "PIKACHU"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 4){
		if (theGuess == "Butterfree" || theGuess == "butterfree" || theGuess == "BUTTERFREE"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 5){
		if (theGuess == "Gengar" || theGuess == "gengar" || theGuess == "GENGAR"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 6){
		if (theGuess == "Mewtwo" || theGuess == "mewtwo" || theGuess == "MEWTWO"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 7){
		if (theGuess == "Jigglypuff" || theGuess == "jigglypuff" || theGuess == "JIGGLYPUFF"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 8){
		if (theGuess == "Mew" || theGuess == "mew" || theGuess == "MEW"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 9){
		if (theGuess == "Onix" || theGuess == "onix" || theGuess == "ONIX"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 10){
		if (theGuess == "Zubat" || theGuess == "zubat" || theGuess == "ZUBAT"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 11){
		if (theGuess == "Ponyta" || theGuess == "ponyta" || theGuess == "PONYTA"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 12){
		if (theGuess == "Staryu" || theGuess == "staryu" || theGuess == "STARYU"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 13){
		if (theGuess == "Magikarp" || theGuess == "magikarp" || theGuess == "MAGIKARP"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 14){
		if (theGuess == "Eevee" || theGuess == "eevee" || theGuess == "EEVEE"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 15){
		if (theGuess == "Vaporeon" || theGuess == "vaporeon" || theGuess == "VAPOREON"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 16){
		if (theGuess == "Flareon" || theGuess == "flareon" || theGuess == "FLAREON"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 17){
		if (theGuess == "Jolteon" || theGuess == "jolteon" || theGuess == "JOLTEON"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 18){
		if (theGuess == "Dragonite" || theGuess == "dragonite" || theGuess == "DRAGONITE"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}

	if (num == 19){
		if (theGuess == "Ditto" || theGuess == "ditto" || theGuess == "DITTO"){
			alert("You are correct!");
			correct++;
		} else{
			alert("Sorry, you were wrong...");
			incorrect++;
		}
	}


//Checks to see whether the user has chosen the correct Pokemon or not





	num = Math.floor(Math.random() * 20);

//Picks the next random Pokemon






	if (num == 0){
		document.getElementById("thatPokemon").src="images/bulbasaur.png";
	}

	if (num == 1){
		document.getElementById("thatPokemon").src="images/charmander.png";
	}

	if (num == 2){
		document.getElementById("thatPokemon").src="images/squirtle.png";
	}

	if (num == 3){
		document.getElementById("thatPokemon").src="images/pikachu.png";
	}

	if (num == 4){
		document.getElementById("thatPokemon").src="images/butterfree.png";
	}

	if (num == 5){
		document.getElementById("thatPokemon").src="images/gengar.png";
	}

	if (num == 6){
		document.getElementById("thatPokemon").src="images/mewtwo.png";
	}

	if (num == 7){
		document.getElementById("thatPokemon").src="images/jigglypuff.png";
	}

	if (num == 8){
		document.getElementById("thatPokemon").src="images/mew.png";
	}

	if (num == 9){
		document.getElementById("thatPokemon").src="images/onix.png";
	}

	if (num == 10){
		document.getElementById("thatPokemon").src="images/zubat.png";
	}

	if (num == 11){
		document.getElementById("thatPokemon").src="images/ponyta.png";
	}

	if (num == 12){
		document.getElementById("thatPokemon").src="images/staryu.png";
	}

	if (num == 13){
		document.getElementById("thatPokemon").src="images/magikarp.png";
	}

	if (num == 14){
		document.getElementById("thatPokemon").src="images/eevee.png";
	}

	if (num == 15){
		document.getElementById("thatPokemon").src="images/vaporeon.png";
	}

	if (num == 16){
		document.getElementById("thatPokemon").src="images/flareon.png";
	}

	if (num == 17){
		document.getElementById("thatPokemon").src="images/jolteon.png";
	}

	if (num == 18){
		document.getElementById("thatPokemon").src="images/dragonite.png";
	}

	if (num == 19){
		document.getElementById("thatPokemon").src="images/ditto.png";
	}

//Changes the picture to the new Pokemon






alert("Current Results: Correct: " + correct + " Incorrect: " + incorrect);

//Alerts the user of their current results





	document.getElementById("theSpellings").style.visibility="hidden";

//Hides the spellings again so user can attempt to name the next Pokemon
}


//Shows the spellings if the user cannot spell the Pokemon shown

function showSpellings(){
	document.getElementById("theSpellings").style.visibility="visible";
}