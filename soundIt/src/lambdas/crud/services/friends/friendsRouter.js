const express = require('express')
const friendRouter = express.Router();
const friendController = require('./friendsController.js');

friendRouter.get('/', friendController.testFriend)

module.exports = function (app, express) {  
  app.use('/friend', friendRouter)
}
