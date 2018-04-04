// Business Logic
var playerOneScore = 0;
var playerTwoScore = 0;
var roundTotal = 0;

function getDiceOutput() {
  var diceResult = Math.floor(Math.random() * 6) + 1;
  return diceResult;
}

function collectScoresForTurn(currentScore, roundTotal) {
  roundTotal += currentScore;
  return roundTotal;
}

function changeTurnsPlayerOne() {
  playerOneScore += roundTotal;
    roundTotal = 0;
  $(".player-one-buttons").toggle();
  $(".player-two-buttons").toggle();
  $(".player-one-number").text(playerOneScore);
  $(".player-one-round-total").text(roundTotal);
}

function changeTurnsPlayerTwo() {
  playerTwoScore += roundTotal;
    roundTotal = 0;
  $(".player-one-buttons").toggle();
  $(".player-two-buttons").toggle();
  $(".player-two-number").text(playerTwoScore);
  $(".player-two-round-total").text(roundTotal);
}

// Front End Logic
$(document).ready(function(){
//player one
  $("#player-one-roll").click(function(event) {
    event.preventDefault();
    var rollOutput = getDiceOutput();
    console.log(rollOutput);

    if (rollOutput===1) {
      roundTotal = 0;
      changeTurnsPlayerOne();
      console.log(roundTotal);
    } else {
    roundTotal = collectScoresForTurn(rollOutput,roundTotal);
    console.log(roundTotal);
    $(".player-one-round-total").text(roundTotal);
    }

  });

  $("#player-one-hold").click(function(event)  {
    event.preventDefault();
    changeTurnsPlayerOne();
    if (playerOneScore>=20){
      alert("player One win!!!");
    }
    console.log(playerOneScore);
  });
//player two
  $("#player-two-roll").click(function(event) {
    event.preventDefault();
    var rollOutput = getDiceOutput();
    console.log(rollOutput);
    if (rollOutput===1) {
      roundTotal = 0;
      changeTurnsPlayerTwo();
    } else {
      roundTotal = collectScoresForTurn(rollOutput,roundTotal);
      $(".player-two-round-total").text(roundTotal);
    }

  });

  $("#player-two-hold").click(function(event)  {
    event.preventDefault();
    changeTurnsPlayerTwo();
    if (playerTwoScore>=20){
      alert("player Two win!!!");
    }
  });

});
