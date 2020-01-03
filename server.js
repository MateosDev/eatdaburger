var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content 
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require HandleBars - EXPHBS
var exphbs = require("express-handlebars");


//THE TEMPLATE ENGINE
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});