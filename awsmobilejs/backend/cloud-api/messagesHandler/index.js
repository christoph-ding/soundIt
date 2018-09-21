'use strict'
const messagesCRUD = require('messages-crud.js')
const AWS = require('aws-sdk');
const s3 = new AWS.S3()

exports.handler = function(event, context, callback) {
    if (event.httpMethod === 'POST') {
        messagesCRUD.makeMessage(event, context, callback)
    } else if (event.httpMethod === 'GET') {
        messagesCRUD.gettingMessages(event, context, callback)
    }
}