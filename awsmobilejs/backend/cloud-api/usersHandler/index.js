'use strict';
const crud = require('crud.js')

exports.handler = function(event, context, callback) {
    console.log('============== index ================')
    console.log('event method: ', event.httpMethod)
    console.log('event: ', event)
    
    if (event.httpMethod === 'POST') {
        crud.makeNewUser(event, context, callback)    
    }
};
