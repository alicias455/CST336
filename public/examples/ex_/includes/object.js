module.exports = {
    nothing: function (req, res, next) {
        req.commandName = 'Hello, how is your day?';
        res.send(`<h1>${req.commandName}</h1>`)
        console.log("made it")
    }
}