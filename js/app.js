
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	
    var x;
    var guessCount=0;
    var guessList="";
    var num;
    
    
    
    $(".new").click(function(){
         newgame();

    });
    function newgame(){
      gennum();
      $("#count").text("0");
      guessCount=0;
      guessList="";
      $("#userGuess").val("");
      $("#guessList").text("");
      $("#feedback").text("Make your Guess!");
      alert("random Num = " + x);

    }
    function gennum() {
    x = Math.floor((Math.random() * 100) + 1);
     
    }

    $("#guessButton").click(function(){
    	
     num=$("#userGuess").val();
        checkinput();
      if(num==x){
      	alert("You Won");
      	
      }
      else{      	
      	guessfeedback();
      	$("#userGuess").val("");
      	guessCount = guessCount +1;
      	//alert("guessCount = " + guessCount);
      	$("#count").text(guessCount);
      	guessList = guessList+num+',';
      	//alert("guessList = " + guessList);
        $("#guessList").text(guessList);
      }

    });
     
    
     

     function guessfeedback(){
        if(Math.abs(x - num) < 10){
          $("#feedback").text("Hot");
        
        } else if(Math.abs(x - num) < 20 && Math.abs(x - num) > 9){
         $("#feedback").text("Warm");
        } else if(Math.abs(x - num) < 30 && Math.abs(x - num) > 19){
        $("#feedback").text("Less than warm");
        } else {
        $("#feedback").text("Cold");
        }
      }
      function checkinput(){
        if(num<1 && num>100){
          alert("enter number between 1 and 100");
        }
      }
    });	

  	
    
  	
 

