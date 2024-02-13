var gamePattern = [];   
var userClickedPattern = [];
var started = false;
var level = 0;


$(document).keypress(function() {
  if (!started) {

    $("h1").text(level);
    nextSequence();
    started = true;
  }
});

// user answer
$(".btn").on("click", function(event){
  var userChosenColour = event.currentTarget.id; 

  userClickedPattern.push(userChosenColour);

  // calling audio function  
  playSound(userChosenColour);
  // calling animation function  
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1); 
});






// audio function
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// animation function
function animatePress(currentColour){
  $("." + currentColour).addClass("pressed")
  setTimeout(function(){
    $("." + currentColour).removeClass("pressed")
  }, 100);
  
}


function checkAnswer(currentLevel){
  console.log(gamePattern);
  console.log(userClickedPattern);
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    console.log("SUCCESS");
    if(gamePattern.length == userClickedPattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
      userClickedPattern = [];
    }

  } else{
    console.log("Faliure");

    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

    $("body").addClass("game-over");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

    $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over"); 
      }, 200);

      $("h1").text("Game Over, Press Any Key to Restart");
      startOver()
  }
  
}


// Sequence function
function nextSequence(){
  level++;
  $("h1").text(level);
  // produce random color
  var randomNumber = Math.floor((Math.random() * 4));
  var buttonColours  = ["red", "blue", "green", "yellow"];
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);      

  // animation 
  var flashButton = $("." + randomChosenColour)
  $(flashButton).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  // calling audio function
  playSound(randomChosenColour);

}

// reset
function startOver(){
  level = 0;
  gamePattern  = [];
  started = false;
  userClickedPattern = [];
}





































// var randomNumber = Math.floor((Math.random() * 4));
// var randomChosenColour = buttonColours[randomNumber];


// $(document).on('click', function(){
//   var audio1 = new Audio('sounds/' + randomChosenColour + '.mp3');
//   audio1.play();

// });












































































  