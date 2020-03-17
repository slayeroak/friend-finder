// require express
const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");

var app = express();

// heroku port
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });