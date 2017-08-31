$(document).ready(function () {

    // select random number and display it on the page
    var targetNumber = function getRandom() {
        return Math.floor((Math.random() * 102) + 19);
    };

    $("#target-nbr").text(targetNumber);




    var counter = 0;
    var crystalValue = 0;
    var wins = 0;
    var losses = 0;

    // on click of a crystal, assign a value to the crystal
    $(".crystal").on("click", function() {

        crystalValue = Math.floor((Math.random() * 12) + 1);
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;
        $("#your-score").text(counter);
        console.log(crystalValue);
        console.log(counter);

        if (counter === targetNumber) {
            wins++;
            $("#wins").text(wins);
            console.log("you win!");
        }
        else if (counter >= targetNumber) {
            losses++;
            $("#losses").text(losses);
            console.log("you lose!");
        }

    });


});




//still need to:
//     keep that value assigned to that crystal (but not all crystals) for duration of game



// var crystalValue = ($(this).attr("data-crystalvalue"));
