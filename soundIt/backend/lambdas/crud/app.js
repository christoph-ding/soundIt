/* DEPENDENCIES */
const express = require('express')

/* GLOBAL VARS */
const app = express()
const PORT = 8000

app.listen(PORT, function () {
    console.log("Hi I'm running on port:", PORT);
});

require('./middleware.js')(app)
