$(document).ready(function () {
	/*
  Advices:
  1. Try to name your variables to be selfsubscribed
  2. Use increment and decrement (++,--) instead this expression: guessCount = guessCount + 1; Ref link here: http://www.w3schools.com/js/js_operators.asp
  3. Avoid to use alert() because the whole program is unavailable and stoped when alert is active
  4. Use event.preventDefault(); - Read more about this here: https://api.jquery.com/event.preventdefault/
  5. Use form submit event instead on event click
  */
  //Let's initiate new game on the same beginning how we could set random number and other params
  newgame();
  
  /*--- Display information modal box ---*/
  $(".what").click(function () {
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function () {
  		$(".overlay").fadeOut(1000);
  });

  var x;
  var guessCount = 0;
  var guessList = "";
  var num;



  $(".new").click(function () {
    newgame();

  });
  function newgame() {
    gennum();
    $("#count").text("0");
    guessCount = 0;
    guessList = "";
    $("#userGuess").val("");
    $("#guessList").text("");
    $("#feedback").text("Make your Guess!");
    alert("random Num = " + x);

  }
  function gennum() {
    x = Math.floor((Math.random() * 100) + 1);
    console.log(x);
  }

  $("#guessForm").submit(function (event) {
    
    event.preventDefault();
    num = $("#userGuess").val();
    checkinput();
    if (num == x) {
      alert("You Won");
      newgame();
    }
    else {
      guessfeedback();
      $("#userGuess").val("");
      guessCount = guessCount + 1;
      //alert("guessCount = " + guessCount);
      $("#count").text(guessCount);
      guessList = guessList + num + ',';
      //alert("guessList = " + guessList);
      $("#guessList").text(guessList);
    }

  });




  function guessfeedback() {
    if (Math.abs(x - num) < 10) {
      $("#feedback").text("Hot");

    } else if (Math.abs(x - num) < 20 && Math.abs(x - num) > 9) {
      $("#feedback").text("Warm");
    } else if (Math.abs(x - num) < 30 && Math.abs(x - num) > 19) {
      $("#feedback").text("Less than warm");
    } else {
      $("#feedback").text("Cold");
    }
  }
  function checkinput() {
    if (num < 1 && num > 100) {
      alert("enter number between 1 and 100");
    }
  }
});	

  	
    
  	
 

