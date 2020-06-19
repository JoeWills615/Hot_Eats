// Dependencies
// ===========================================================
var express = require("express");

// Sets up the Express App
// =============================================================

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Data array of object as example
// ===========================================================
var reservation = [{
    routeName: "chrisferguson",
    name: "Chris Ferguson",
    phone: 1234567890,
    email: "me@gmail.com",
    uniqueId: 1
}, 
];

var tables = [{

}];

var waitlist = [{
    routeName: "ryanferguson"
    name: "Ryan Ferguson",
    phone: 1234567800,
    email: "u@gmail.com",
    uniqueId: 2
}, 
];

// Routes
// ===========================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});


app.get("/api/tables", function (req, res) {
    res.json(reservation);
});

app.get("/api/waitlist", function (req, res) {
    res.json(waitlist);
});

// Create New Reservations - takes in JSON input
app.post("/api/reservation", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    newReservation.phone = parseInt(newReservation.phone);
    newReservation.email = parseInt(newReservation.email);
    newReservation.uniqueId = parseInt(newReservation.uniqueId);

    console.log(newReservation);
    if () {
        tables.length <= 5;
        tables.push(newReservation);
        res.json(newReservation);
    } else {
        waitlist.push(newReservation);
        res.json(newReservation);
    }
    

    

});
// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});