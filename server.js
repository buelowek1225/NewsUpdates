// required boilerplate
require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Handlebars
app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  app.set("view engine", "handlebars");