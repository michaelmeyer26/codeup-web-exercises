function showMultiplicationTable(value) {
    for (var x = 1; x <= 10; x++) {
        var multiplied = value * x;
        console.log(value + " x " + x + " = " + multiplied);
    }
}

function randomEvenOrOdd() {
    for(var x = 0; x <= 10; x++) {
        var random = Math.floor((Math.random() * 200) + 20);
        var state = (random % 2 === 0 ? "even" : "odd");
        console.log(random + " is " + state);
    }
}

function numberPyramid() {
    for (var x = 1; x < 10; x++) {
        var pyramidTier = x.toString();
        for (var y = 1; y < x; y++) {
            pyramidTier += x;
        }
        console.log(pyramidTier);
    }
}

function fivesCountdown() {
    for (var x = 100; x > 0; x-= 5) {
        console.log(x);
    }
}

