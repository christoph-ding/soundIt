'use strict'
const messagesCRUD = require('messages-crud.js')

exports.handler = function(event, context, callback) {
    console.log('============================')
    if (event.httpMethod === 'POST') {
        messagesCRUD.makeMessage(event, context, callback)
    } else if (event.httpMethod === 'GET') {
        messagesCRUD.gettingMessages(event, context, callback)
    }
}