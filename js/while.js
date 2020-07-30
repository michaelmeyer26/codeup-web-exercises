function timesTwo () {
    var num = 1;
    while (num < 65536) {
        num *= 2;
        console.log(num);
    }
}

function iceCreamSalesperson () {
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Total cones today is " + allCones);
    do {
        var thisCustomer = Math.floor(Math.random() * 5) + 1;
        if (thisCustomer <= allCones) {
            console.log("This customer wants " + thisCustomer);
            allCones -= thisCustomer;
            console.log(thisCustomer + " cones sold...");
            console.log(allCones + " cones left.")
        } else if (thisCustomer > allCones) {
            console.log("I cannot sell you " + thisCustomer + " cones. I only have " + allCones + ".");
        }
    } while (allCones > 0);
    console.log("Yay! I sold them all!");
}

