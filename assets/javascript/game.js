$(document).ready(function () {

    // select random number and display it on the page
    var targetNumber = function getRandom() {
        return Math.floor((Math.random() * 102) + 19);
    };

    $("#target-nbr").text(targetNumber);



    var counter = 0;
    var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


    // on click of a crystal, add to the counter by the value of this crystal
    $(".crystal").on("click", function() {

        counter += increment;

        console.log("your new score is " + counter);

        if (counter === targetNumber) {
            console.log("you win!");
        }
        else if (counter >= targetNumber) {
            console.log("you lose!");
        }

    });




});


//still need to:
//     assign random value from numberOptions array to clicked crystal
//     keep that value assigned to that crystal (but not all crystals) for duration of game
//     increase score by value of crystal


// var crystalValue = numberOptions[Math.round(Math.random())];

// for (var i = 0; i < numberOptions.length; i++) {
//     crystal.attr("data-crystalvalue", numberOptions[i]);
// }

// var crystalValue = ($(this).attr("data-crystalvalue"));
// crystalValue = parseInt(crystalValue);
// counter += crystalValue;

// function randomFrom(numberOptions) {
//     console.log(numberOptions[Math.floor(Math.random() * numberOptions.length)]);
// }
