// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data Starwars array of object as example
// ===========================================================
// var yoda = {
//     name: "Yoda",
//     role: "Jedi Master",
//     age: 900,
//     forcePoints: 2000
// };

var reservation = {
    name: "Chris Ferguson",
    phone: 1234567890,
    email: "me@gmail.com",
    uniqueId: 1
};

var waitlist = {

};



// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE



// Routes
// ===========================================================


// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE



// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});