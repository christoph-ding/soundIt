'use strict';
const crud = require('crud.js')

exports.handler = function(event, context, callback) {
    console.log('============== index ================ event: \n', event)
    
    if (event.httpMethod === 'POST') {
        crud.makeNewUser(event, context, callback)    
    }
};
