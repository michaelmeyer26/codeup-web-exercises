"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor (color) {
    if (color === "red") {
        return "strawberries are red";
    } else if (color === "orange") {
        return "carrots are orange";
    } else if (color === "yellow") {
        return "lemons are yellow";
    } else if (color === "green") {
        return "bell peppers can be green";
    } else if (color === "blue") {
        return "blueberries are blue";
    } else if (color === "indigo") {
        return "figs can be indigo";
    } else if (color === "violet") {
        return "blackberries are violet";
    } else {
        return "I don't know anything about that color";
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

var whichColor = randomColor;
var colorMessage = analyzeColor(whichColor);
console.log(colorMessage);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorSwitch (color) {
    switch (color) {
        case "red":
            return "strawberries are red";
            break;
        case "orange":
            return "carrots are orange";
            break;
        case "yellow":
            return "lemons are yellow";
            break;
        case "green":
            return "bell peppers can be green";
            break;
        case "blue":
            return "blueberries are blue";
            break;
        case "indigo":
            return "figs can be indigo";
            break;
        case "violet":
            return "blackberries are violet";
            break;
        default:
            return "I don't know anything about that color";
    }
}

colorMessage = analyzeColorSwitch(whichColor);
console.log(colorMessage);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("What's your favorite color?");
colorMessage = analyzeColor(userColor.toLowerCase());
alert(colorMessage);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, subtotal) {
    var discount = 0;
    var total = subtotal;
    if (luckyNumber === 5) {
        discount = 1.0;
    } else if (luckyNumber === 1) {
        discount = 0.1;
    } else if (luckyNumber === 2) {
        discount = 0.25
    } else if (luckyNumber === 3) {
        discount = 0.35
    } else if (luckyNumber === 4) {
        discount = 0.5
    }
    total = (1 - discount) * subtotal;
    return total;
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("How much are you spending today?");
totalBill = parseFloat(totalBill);
var newTotal = calculateTotal(luckyNumber, totalBill);
alert("Your subtotal was $" + totalBill);
alert("Your lucky number was..." + luckyNumber + "!");
if (luckyNumber == 0) {
    alert("Unfortunately you didn't get a discount, your total stays the same: " + newTotal);
} else if (luckyNumber == 5) {
    alert("You got a 100% discount! You don't need to pay anything!");
} else if (luckyNumber == 6) {
    alert("Wait, how did you get that lucky number? I don't know what discount to apply in this case!")
} else {
    alert("Your new total after the discount is $" + newTotal);
}

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//without functions (bad, I hate it)
// var confirmNumber = confirm("Would you like to enter a number?");
// if (confirmNumber) {
//     var userNumber = prompt("Please enter a number.");
//     userNumber = parseFloat(userNumber);
//     if(! isNaN(userNumber)) {
//         if (userNumber % 2 == 0) {
//             alert("Your number is even")
//         } else {
//             alert("Your number is odd")
//         }
//
//         alert("Your number plus 100 is " + (100 + userNumber));
//
//         if (userNumber >= 0) {
//             alert("Your number is positive")
//         } else {
//             alert("Your number is negative")
//         }
//     } else {
//         alert("You didn't enter a number")
//     }
// }

//with functions. Still very confusing??? Too granular? Bad Function names? idk.
// Don't know how to better prompt for value
function wantToEnterNumber() {
    var wantEnter = confirm("Would you like to enter a number?");
    return wantEnter;
}

function giveMeANumber() {
    var userNumber = prompt("What is your number?");
    return userNumber;
}

function isEven(userNumber) {
    if (userNumber % 2 == 0) {
        alert("Your number is even");
    } else {
        alert("Your number is odd");
    }
}

function plus100(userNumber) {
    var numberPlus100 = userNumber + 100;
    alert("Your number plus 100 is: " + numberPlus100);
}

function isPositive(userNumber) {
    if (userNumber >= 0) {
        alert("Your number is positive");
    } else {
        alert("Your number is negative");
    }
}

function checkInput(userNumber) {
    if (isNaN(userNumber)) {
        alert("You did not enter a number");
        return false;
    } else {
        return true;
    }
}

function numberFacts(userNumber) {
    isEven(userNumber);
    plus100(userNumber);
    isPositive(userNumber);
}

function numberExercise() {
    var userConfirm = wantToEnterNumber();
    if (userConfirm) {
        var userNumber = giveMeANumber();
        if (checkInput(userNumber)) {
            userNumber = parseFloat(userNumber);
            numberFacts(userNumber);
        }
    }
}