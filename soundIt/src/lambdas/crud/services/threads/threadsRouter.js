const express = require('express')
const threadRouter = express.Router();
const threadController = require('./threadsController.js');

threadRouter.get('/', threadController.testThread)

module.exports = function (app, express) {  
  app.use('/thread', threadRouter)
}
