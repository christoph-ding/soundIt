'use strict';
const usersCRUD = require('users-crud.js')

exports.handler = function(event, context, callback) {
    if (event.httpMethod === 'POST') {
        usersCRUD.makeNewUser(event, context, callback)    
    }
};