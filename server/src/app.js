const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.promise = global.promise
mongoose.connect('mongodb://localhost/keep_it_all')
  .then(() => console.log('connection successful'))
  .catch((err) => console.log(err))

app.listen(process.env.PORT || 4000)
