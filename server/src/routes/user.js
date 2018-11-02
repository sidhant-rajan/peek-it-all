const express = require('express')
const router = express.Router()
const User = require('../models/User')
const md5 = require('md5')

// Register request
router.post('/register', function (req, res, next) {
  let username = req.body.username
  let password = req.body.password
  let email_id = req.body.emailId
  let temp = new User({
    username: username,
    email: email_id,
    password: md5(password)
  })
  temp.save(function (err) {
    if(err) {
      res.send(400)
      res.json(err.errmsg)
    } else res.json('Registered successfully')
  })
})
