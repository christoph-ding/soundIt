'use strict';
const groupsCRUD = require('groups-crud.js')

exports.handler = function(event, context, callback) {
    if (event.httpMethod === 'POST') {
        groupsCRUD.makeNewGroup(event, context, callback)    
    }
};