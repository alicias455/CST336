const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
const knockknock = require("knock-knock-jokes");

app.get("/", function(req, res){
    res.render("main.html", {joke: knockknock()});
});

app.get("/boot", function(req, res){
    res.render("boot.html");
});

app.get("/direct", function(req, res){
    res.render("direct.html");
});

app.get("/resident", function(req, res){
    res.render("resident.html");
});

app.listen("5698", "0.0.0.0", function () {
    console.log("Express Server is Running...")
});