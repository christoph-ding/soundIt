module.exports = function (app) {  
  console.log('loading routers')
  require('./services/friends/friendsRouter.js')(app)
  require('./services/groups/groupsRouter.js')(app)
  require('./services/threads/threadsRouter.js')(app)
  require('./services/users/usersRouter.js')(app)
}
