
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	
  	$("#userGuess").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#feedback").html("Digits Only, Sweetheart..");
               return false;
    }
   });

  	var numGuess; 
  	var numToGuess = Math.floor(Math.random() * 100);
  	var countGuess = 0;
  	var differenceOld;
  	var differenceNew;
  	var history = [];
  	
  	console.log(numToGuess);

  	var newGame = function() {

  		numToGuess = Math.floor(Math.random() * 100);

  		countGuess = 0;

  		history = []

  		$("#guessList li").fadeOut(1000);

  		$("#feedback").html("New Game..");

  		setTimeout(function() {
  			$("#feedback").html("Make Your Guess...");
  		}, 1000);

  	};

  	var theGame = function() {
		numGuess = $("#userGuess").val()
		

		if (numGuess > 100) {
				$("#feedback").html("Only numbers between 1 & 100");
		}
		else if (numGuess == "") {
				$("#feedback").html("You gotta enter something...")
		}
		else {
			countGuess++;
			$("#count").html(countGuess);
			$("#guessList").append("<li>" + numGuess + "</li>");
			
			history.push(numGuess);
			differenceOld = Math.abs(numToGuess - history[(countGuess - 2)]);
			differenceNew = Math.abs(numToGuess - numGuess);
			
			console.log(history);
			console.log("Old Difference " + differenceOld);
			console.log("New Difference " + differenceNew);
			console.log(numToGuess);
		
			if (countGuess == 1) {	
				if (numGuess == numToGuess) {
					$("#feedback").html("Congrats, You did it...");
				}
				else {
					$("#feedback").html("Tepid");	
				}
			}
			else {
				if (numToGuess == numGuess) {
					$("#feedback").html("You guessed it...");
				}
				else if (differenceNew > differenceOld) {
					$("#feedback").html("Colder");
				}
				else if (differenceNew < differenceOld) {
					$("#feedback").html("Hotter");
				}
				else if (differenceNew == differenceOld) {
					$("#feedback").html("Seriously?");
				}
			}
		}
  	};
	
	$("#guessButton").click(theGame);
 	
	$(".new").click(newGame);
});


