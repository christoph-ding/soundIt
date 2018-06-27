'use strict';
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});
const uuid = require('uuid')
const crud = require('crud.js')

exports.handler = function(event, context, callback) {
    console.log('=====================================')
    console.log('event:')
    console.log(event)
    
    
    
    crud.makeNewUser()
    // ddb.put(params, 
    //     function(err, data) {
    //         if (err) {
    //             context.done('error','putting item into dynamodb failed: '+err);
    //         } else {
                
    //         let response = {
    //             statusCode: responseCode,
    //             headers: {
    //                 "x-custom-header" : "hey what's up"
    //             },
    //             body: JSON.stringify({"success": "get it back", "method": event.httpMethod})
    //         };            
                
    //         console.log("=========================================")
    //         console.log("response: " + JSON.stringify(response) + event.httpMethod)    
    //         context.succeed(response);
    //     }
    // })
};
