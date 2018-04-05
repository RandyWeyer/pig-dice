// Business Logic
var playerOneScore = 0;
var playerTwoScore = 0;
var roundTotal = 0;
var diceType = {};
var numberOfDice = 0;
var numberOfSides = 0;
var goalValue = 0;
var numberOfPlayers = 2;

function Dice(numberOfSides) {
  this.numberOfSides = numberOfSides;
}

Dice.prototype.getDiceOutput = function(numberOfDice) {
  var diceOutput= Math.floor((Math.random() * (this.numberOfSides * numberOfDice)) + (numberOfDice));
  return diceOutput;
}

function collectScoresForTurn(currentScore, roundTotal) {
  roundTotal += currentScore;
  return roundTotal;
}

function changeTurnsPlayerOne() {
  playerOneScore += roundTotal;
    roundTotal = 0;
  $(".player-one-buttons").toggle();
  // if (numberOfPlayers >= 2){
    $(".player-two-buttons").toggle();
  // }
  $(".player-one-number").text(playerOneScore);
  $(".player-one-round-total").text(roundTotal);
}

function changeTurnsPlayerTwo() {
  playerTwoScore += roundTotal;
    roundTotal = 0;
  $(".player-one-buttons").toggle();
  // if (numberOfPlayers >= 2){
    $(".player-two-buttons").toggle();
  // }
  $(".player-two-number").text(playerTwoScore);
  $(".player-two-round-total").text(roundTotal);
}

// Front End Logic
$(document).ready(function(){

  $("#rule-setup").submit(function(event) {
    event.preventDefault();
    numberOfDice = parseInt($("#number-of-dice").val());
    numberOfSides = parseInt($("#number-of-sides").val());
    goalValue = parseInt($("#goal-value").val());
    numberOfPlayers = document.getElementById("number-of-players").value;
    console.log(numberOfPlayers);
    diceType = new Dice(numberOfSides);
    console.log(diceType);
    $("#rule-setup").hide();
    $(".game-board").show();
  });

    //player one
    $("#player-one-roll").click(function(event) {
      event.preventDefault();

      if (numberOfPlayers==1) { //against computer. if condition is within 'roll click' listener

      var rollOutput = diceType.getDiceOutput(numberOfDice);
      console.log(rollOutput);

      if ((rollOutput-1)%6===0) {
        roundTotal = 0;
        changeTurnsPlayerOne();
        console.log(roundTotal);

        var rollOutput = diceType.getDiceOutput(numberOfDice);
        console.log("1st roll: " + rollOutput);

        if ((rollOutput-1)%6===0) {
          roundTotal = 0;
        } else {
          roundTotal = collectScoresForTurn(rollOutput,roundTotal);
          $(".player-two-round-total").text(roundTotal);
        }

        rollOutput = diceType.getDiceOutput(numberOfDice);
        console.log("2nd roll: " + rollOutput);

        if ((rollOutput-1)%6===0) {
          roundTotal = 0;
        } else {
          roundTotal = collectScoresForTurn(rollOutput,roundTotal);
          $(".player-two-round-total").text(roundTotal);
        }

        changeTurnsPlayerTwo();
        if (playerTwoScore>=goalValue){
          alert("player Two win!!!");
        }
      } else {
      roundTotal = collectScoresForTurn(rollOutput,roundTotal);
      $(".player-one-round-total").text(roundTotal);
      }
    }  else { //against 2nd player
        var rollOutput = diceType.getDiceOutput(numberOfDice);
        console.log(rollOutput);

        if ((rollOutput-1)%6===0) {
          roundTotal = 0;
          changeTurnsPlayerOne();
          console.log(roundTotal);
        } else {
        roundTotal = collectScoresForTurn(rollOutput,roundTotal);
        $(".player-one-round-total").text(roundTotal);
        }
    }
    });


    $("#player-one-hold").click(function(event)  {
      event.preventDefault();
      if (numberOfPlayers==1) {//against computer. if condition is within 'roll click' listener
              changeTurnsPlayerOne();
            if (playerOneScore>=goalValue){
              alert("player One win!!!");
            }

            var rollOutput = diceType.getDiceOutput(numberOfDice);
            console.log("1st roll: " + rollOutput);

            if ((rollOutput-1)%6===0) {
              roundTotal = 0;
            } else {
              roundTotal = collectScoresForTurn(rollOutput,roundTotal);
              $(".player-two-round-total").text(roundTotal);
            }

            rollOutput = diceType.getDiceOutput(numberOfDice);
            console.log("2nd roll: " + rollOutput);

            if ((rollOutput-1)%6===0) {
              roundTotal = 0;
            } else {
              roundTotal = collectScoresForTurn(rollOutput,roundTotal);
              $(".player-two-round-total").text(roundTotal);
            }

            changeTurnsPlayerTwo();
            if (playerTwoScore>=goalValue){
              alert("player Two win!!!");
            }
      }  else if (numberOfPlayers==2) {//against 2nd player
        changeTurnsPlayerOne();
      if (playerOneScore>=goalValue){
        alert("player One win!!!");
      }
      }
    });

    //player two
    $("#player-two-roll").click(function(event) {
      event.preventDefault();

      var rollOutput = diceType.getDiceOutput(numberOfDice);
      console.log(rollOutput);

      if ((rollOutput-1)%6===0) {
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
      if (playerTwoScore>=goalValue){
        alert("player Two win!!!");
      }
    });

});
