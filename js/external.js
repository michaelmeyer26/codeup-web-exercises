// console.log("Hello from external JavaScript");
// alert("Welcome to my Website!");
// var favColor = prompt("What's your favorite color?");
// alert("Great, " + favColor + " is my favorite color, too!");

//Renting Movies

var movie1 = Number(prompt("How many days did you rent the first movie for?"));
var movie2 = Number(prompt("How many days did you rent the second movie for?"));
var movie3 = Number(prompt("How many days did you rent the third movie for?"));
var rate = Number(prompt("How much does it cost to rent a movie for a day?"));
var totalDays = (movie1 + movie2 + movie3);
var totalCost = (totalDays * rate);
alert("Total cost is $" + totalCost.toFixed(2));


//Contracting

var googlePay = Number(prompt("What is your hourly rate at Google?"));
var googleHrs = Number(prompt("And how many hours did you work for them this week?"));
var amznPay = Number(prompt("What is your hourly rate at Amazon?"));
var amznHrs = Number(prompt("And how many hours did you work for them this week?"));
var fbPay = Number(prompt("What is your hourly rate at FaceBook?"));
var fbHrs = Number(prompt("And how many hours did you work for them this week?"));
var totalPay = (googlePay * googleHrs) + (amznPay * amznHrs) + (fbPay * fbHrs);
alert("Total pay this week is $" + totalPay.toFixed(2));


//Class schedule
var scheduleClear = confirm("Does this conflict with your class schedule?");
var currentStudents = 15;
var maxStudents = 17;
var canJoin = (currentStudents <= maxStudents) && scheduleClear;
alert("Can join the class? " + canJoin);

//Product offers
var isPremium = confirm("Are you a premium member?");
var cartSize = Number(prompt("And how many items do you have in your cart?"));
var offerValid = confirm("Is this offer still valid?");
var getsOffer = offerValid && (isPremium || (cartSize >= 2));
alert("Offer recieved: " + getsOffer);
