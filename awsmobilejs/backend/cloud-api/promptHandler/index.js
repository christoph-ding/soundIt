'use strict'
const promptsCRUD = require('prompts-crud.js')

exports.handler = function(event, context, callback) {
    console.log('============================')
    if (event.httpMethod === 'GET') {
        promptsCRUD.getPrompt(event, context, callback)
    }
}