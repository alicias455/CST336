const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/mercury", function(req, res){
    res.render("mercury.html");
});

app.get("/venus", function(req, res){
    res.render("venus.html");
});

app.get("/earth", function(req, res){
    res.render("earth.html");
});

app.get("/", function (req, res) {
    res.send("it works!");
});

// app.get("/mercury", function (req, res) {
//     res.send("This will be Mercury web page!");
// });

// app.get("/venus", function (req, res) {
//     res.send("This will be Venus web page!");
// });

// server listener
app.listen("8081", "0.0.0.0", function () {
    console.log("Express Server is Running...")
});