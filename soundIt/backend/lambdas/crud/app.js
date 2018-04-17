/* DEPENDENCIES */
var express = require('express')

/* GLOBAL VARS */
var app = express()
const PORT = 8000

app.listen(PORT, function () {
    console.log("Hi I'm running on port:", PORT);
});
