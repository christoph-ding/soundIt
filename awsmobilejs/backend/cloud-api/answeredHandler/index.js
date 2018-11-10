'use strict';
const answeredCRUD = require('answered-crud.js');

exports.handler = function(event, context, callback) {
    if (event.httpMethod === 'GET') {
        answeredCRUD.getAnsweredStatus(event, context, callback);
    }
    else if (event.httpMethod === 'POST') {
        answeredCRUD.answered(event, context, callback);
    }
};