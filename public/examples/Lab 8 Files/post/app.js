const express = require("express");
const app = express();

// you can optionally use handlebars
app.set("view engine", "ejs");

app.use(express.static("public")); //access images, css, js
app.use(express.urlencoded({extended: false}));

// routes
app.get("/", function(req, res){

    // Step 6. Repeat structure for the initial get of the root (/) route
    res.render("index", {
        answers: {
            q1: "",
            q2: ""
        },
        original: {}
    });

} );

// Step 4. Add post middleware for root (/) route
app.post("/", function(req, res){

    console.log('POST req.body', req.body);

    // Step 5. Structure data to be used by the view template engine
    res.render("index", {
        answers: {
            q1: "sacramento"
        },
        original: req.body
    });

} );


// running server
app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Express server is running...");
});

