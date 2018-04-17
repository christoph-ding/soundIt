const express = require('express')
const userRouter = express.Router();
const documentationController = require('./usersController.js');

userRouter.get('/', documentationController.testUser)

module.exports = function (app) {  
  console.log('users router')
  app.use('/user', userRouter)
}
