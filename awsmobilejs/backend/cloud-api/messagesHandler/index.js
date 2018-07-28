'use strict'
const messagesCRUD = require('messages-crud.js')

exports.handler = function(event, context, callback) {
    console.log('================ triggered ======================')
    console.log(event)
    // console.log('S3: ')
    // console.log(event.Records[0].s3)
    
    if (event.hasOwnProperty('Records')) {
       console.log('triggered by S3') 
    } else {
       console.log('not triggered by S3')
    }
    
    // if (event.httpMethod === 'POST') {
    //     messagesCRUD.makeMessage(event, context, callback)
    // } else if (event.httpMethod === 'GET') {
    //     messagesCRUD.gettingMessages(event, context, callback)
    // }
}