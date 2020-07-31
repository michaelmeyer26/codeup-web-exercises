function skipIt () {
    while (true) {
        var input = prompt("Please enter an odd number between 1 and 50.");
        if (input <= 50 && input >=1 && input % 2 === 1) {
            break;
        }
    }
    console.log("Number to skip is: " + input);
    for (var x = 1; x <= 50; x++) {
        if (x % 2 === 0) {
            continue;
        } else if (x == input) {
            console.log("Yikes! Skipping number : " + input);
            continue;
        }
        console.log("Here is an odd number: " + x);
    }
}

