module.exports = function(app) {
  console.log('loading middleware')
  require('./routers.js')(app)
}
