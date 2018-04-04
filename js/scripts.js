// Business Logic
var playerOneScore = 0;
var playerTwoScore = 0;

function getDiceOutput() {
  var diceResult = Math.floor(Math.random() * 6) + 1;
  return diceResult;
}

function collectScores(currentScore, totalScore) {
  totalScore += currentScore;
  return totalScore;
}

// Front End Logic
$(document).ready(function(){
//player one
  $("#player-one-roll").click(function(event) {
    event.preventDefault();
    var rollOutput = getDiceOutput();

    playerOneScore = collectScores(rollOutput,playerOneScore);
    console.log(playerOneScore);
    $(".player-one-number").text(playerOneScore);
  });

  $("#player-one-hold").click(function(event)  {
    event.preventDefault();
    $(".player-one-buttons").toggle();
    $(".player-two-buttons").toggle();
  });
//player two
  $("#player-two-roll").click(function(event) {
    event.preventDefault();
    var rollOutput = getDiceOutput();

    playerTwoScore = collectScores(rollOutput,playerTwoScore);
    console.log(playerTwoScore);
    $(".player-two-number").text(playerTwoScore);
  });

  $("#player-two-hold").click(function(event)  {
    event.preventDefault();
    $(".player-two-buttons").toggle();
    $(".player-one-buttons").toggle();
  });

});
