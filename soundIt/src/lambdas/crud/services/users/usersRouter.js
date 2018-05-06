const express = require('express')
const userRouter = express.Router();
const userController = require('./usersController.js');

userRouter.get('/', userController.testUser)

module.exports = function (app) {  
  app.use('/user', userRouter)
}
