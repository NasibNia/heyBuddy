// Dependencies
//=======================================
var express = require ('express');
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
//=======================================

// Routes
// =================
require("./app/routing/apiRouts")(app);
require("./app/routing/htmlRouts")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
