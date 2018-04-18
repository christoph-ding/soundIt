const express = require('express')
const groupRouter = express.Router();
const groupController = require('./groupsController.js');

groupRouter.get('/', groupController.testGroup)

module.exports = function (app, express) {  
  app.use('/group', groupRouter)
}
