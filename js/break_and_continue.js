function skipIt () {
    while (true) {
        var input = prompt("Please enter an even number between 1 and 50.");
        if (input <= 50 && input >=1 && input % 2 === 1) {
            break;
        }
    }
    for (var x = 1; x <= 50; x++) {
        if (x % 2 === 0 || x === input) {
            continue;
        }
        console.log("Here is an odd number: " + x);
    }
}