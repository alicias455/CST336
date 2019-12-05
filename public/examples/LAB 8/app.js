const express = require("express");
const app = express();

// you can optionally use handlebars
app.set("view engine", "ejs");
app.use(express.static("public")); //access images, css, js

// enable use of json
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.get("/", function(req, res){

    res.render("index");

} );

app.post("/check_answers", function(req, res) {

    let answerKey = {
        question1: "sacramento",
        question2: "mo",
        question3: [
            "Jefferson",
            "Roosevelt"
        ],
        question4: "Rhode Island",
        question5: "seal2",
        question6: "dt",
        question7: "florida",
        question8: [
            "Democrat",
            "Republican",
            "Green"
        ]
    }


    let bodyObject = JSON.parse(Object.keys(req.body)[0]);
    let { q1guess, q2guess, q3guess, q4guess, q5guess, q6guess, q7guess, q8guess } = bodyObject;

    let feedback = {
        q1: q1guess == answerKey.question1,
        q2: q2guess == answerKey.question2,
        q3: q3guess[0] == answerKey.question3[0] && q3guess[1] == answerKey.question3[1],
        q4: q4guess == answerKey.question4,
        q5: q5guess == answerKey.question5,
        q6: q6guess == answerKey.question6,
        q7: q7guess == answerKey.question7,
        q8: q8guess[0] == answerKey.question8[0] && q8guess[1] == answerKey.question8[1] && q8guess[2] == answerKey.question8[2]
    }

    res.json(feedback);

});

// running server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});

