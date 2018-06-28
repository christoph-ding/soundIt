'use strict';
const crud = require('crud.js')

exports.handler = function(event, context, callback) {
    console.log('=====================================')
    console.log('event method: ')
    console.log(event.httpMethod)
    console.log(event)
    
    if (event.httpMethod === 'POST') {
        crud.makeNewUser(event, context, callback)    
    }
};
