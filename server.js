const express = require('express')

//import routes from directory
const indexRouter = require('./routes/index')

//Create the app
const app = express()

//make routes available
app.use('/', indexRouter)

let server = app.listen(process.env.PORT || 3000, function () {
    console.log('Express server running on port', server.address().port)
})