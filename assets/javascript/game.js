$(document).ready(function () {


    var wins = 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);

    // Resets the game to select a new random target number and
    // new values for the crystals
    var reset = function() {

        targetNumber = Math.floor((Math.random() * 102) + 19);
        randomNbr1 = Math.floor((Math.random() * 12) + 1);
        randomNbr2 = Math.floor((Math.random() * 12) + 1);
        randomNbr3 = Math.floor((Math.random() * 12) + 1);
        randomNbr4 = Math.floor((Math.random() * 12) + 1);
        counter = 0;

        $("#target-nbr").text(targetNumber);
        $("#your-score").text(counter);
    };


    // Select random number and display it on the page
    var targetNumber = Math.floor((Math.random() * 102) + 19);

    $("#target-nbr").text(targetNumber);

    // Start the counter ("Your total score") to zero
    var counter = 0;


    // Assign each crystal its own random number on click
    // This isn't very DRY, but it was this or throw my laptop out a window.
    var randomNbr1 = Math.floor((Math.random() * 12) + 1);
    var randomNbr2 = Math.floor((Math.random() * 12) + 1);
    var randomNbr3 = Math.floor((Math.random() * 12) + 1);
    var randomNbr4 = Math.floor((Math.random() * 12) + 1);


    $("#crystal1").on("click", function () {
        counter += randomNbr1;
        $("#your-score").text(counter);

        console.log("random " + randomNbr1);
        console.log("counter " + counter);

        if (counter === targetNumber) {
            wins++;
            $("#wins").text(wins);
            console.log("you win!");
            reset();
        }
        else if (counter >= targetNumber) {
            losses++;
            $("#losses").text(losses);
            console.log("you lose!");
            reset();
        }
    });


    $("#crystal2").on("click", function () {
        counter += randomNbr2;
        $("#your-score").text(counter);

        console.log("random " + randomNbr2);
        console.log("counter " + counter);

        if (counter === targetNumber) {
            wins++;
            $("#wins").text(wins);
            console.log("you win!");
            reset();
        }
        else if (counter >= targetNumber) {
            losses++;
            $("#losses").text(losses);
            console.log("you lose!");
            reset();
        }
    });

    $("#crystal3").on("click", function () {
        counter += randomNbr3;
        $("#your-score").text(counter);

        console.log("random " + randomNbr3);
        console.log("counter " + counter);

        if (counter === targetNumber) {
            wins++;
            $("#wins").text(wins);
            console.log("you win!");
            reset();
        }
        else if (counter >= targetNumber) {
            losses++;
            $("#losses").text(losses);
            console.log("you lose!");
            reset();
        }
    });

    $("#crystal4").on("click", function () {
        counter += randomNbr4;
        $("#your-score").text(counter);

        console.log("random " + randomNbr4);
        console.log("counter " + counter);

        if (counter === targetNumber) {
            wins++;
            $("#wins").text(wins);
            console.log("you win!");
            reset();
        }
        else if (counter >= targetNumber) {
            losses++;
            $("#losses").text(losses);
            console.log("you lose!");
            reset();
        }
    });



});