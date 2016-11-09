/**
 * Created by vincent.nguyen441 on 11/9/16.
 */


var colors = ["blue", "gray", "yellow", "green","black", "red orange", "purple", "silver", "tan", "lime", "purple", "pink", "blue", "brown", "darkblue", "lightblue"];
colors = colors.sort();

function do_game() {

    var target_index = Math.floor(Math.random() * (colors.length - 0)) + 0;

    var target = colors[target_index];
    var message = "I am thinking of one of these colors:\n\n";
    for (var i = 0; i < colors.length; i++) {
        message += colors[i];
        if (i == (colors.length - 2)) {
            message += " and ";
        } else if (i != (colors.length - 1)) {
            message += ", ";
        }
    }
    var guess_input;
    var finished = false;
    var gameCount = 0;
    alert(target);

    while (!finished) {
        guess_input = prompt(message).toLowerCase();
        gameCount++;
        finished = check_guess(guess_input, target);
        if (finished) {
            var myBody = document.getElementsByTagName("body")[0];
            myBody.style.background = target;
           alert("Congratulations! You have guessed the color!\n\nIt took you " + gameCount + " guesses to finish the game!\n\nYou can see the colour in the background.");

            var myBody = document.getElementsByTagName("body")[0];
            myBody.style.background = target;

        }

    }
}

function check_guess(guess, target) {
    if (colors.indexOf(guess)<0) {

        alert("Sorry, I don't recognize your color.\n\nPlease try again.");
        return false;
    } else if(guess > target) {

        alert("Sorry, your guess is not correct!\n\nHint: Your color is alphabetically higher than mine.\n\nPlease try again.");
    } else if (guess < target) {

        alert("Sorry, your guess is not correct!\n\nHint: Your color is alphabetically lower than mine.\n\nPlease try again.");
    } else {
        return true;
    }
}
