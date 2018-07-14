'use strict';
const usersCRUD = require('users-crud.js')

exports.handler = function(event, context, callback) {
    console.log('====================== handler')
    console.log(event)
    if (event.httpMethod === 'POST') {
        usersCRUD.makeNewUser(event, context, callback)    
    } else if (event.httpMethod === 'GET') {
        usersCRUD.getUsers(event, context, callback)    
    }
};