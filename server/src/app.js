// Getting all dependencies
const express = require('express')
const mongoose = require('mongoose')

// Making app use express 
const app = express()

// Configuring routes
app.use('/user', user)

// configuring mongoose
mongoose.promise = global.promise
mongoose.connect('mongodb://localhost/keep_it_all')
  .then(() => console.log('connection successful'))
  .catch((err) => console.log(err))

// listening to server
app.listen(process.env.PORT || 4000)
