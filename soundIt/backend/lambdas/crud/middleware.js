module.exports = function(app, express) {
  console.log('loading middleware')
  require('./routers.js')(app, express)
}
