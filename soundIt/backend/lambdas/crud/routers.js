module.exports = function (app, express) {  
  console.log('loading routers')
  require('./services/friends/friendsRouter.js')(app, express)
  require('./services/groups/groupsRouter.js')(app, express)
  require('./services/threads/threadsRouter.js')(app, express)
  require('./services/users/usersRouter.js')(app, express)

}
