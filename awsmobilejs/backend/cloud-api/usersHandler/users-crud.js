const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});
const uuid = require('uuid')

exports.makeNewUser = function(event, context, callback) {
    const parsedBody = JSON.parse(event.body)
    
    // let params = {
    //     Item: {
            
    //     },
    //     TableName: process.env.TABLE_NAME
    // }
    
    console.log('============== CRUD =============== event: \n', event)
    console.log('============== Body =============== event: \n: ', parsedBody)
    // console.log('============== PARAMS =============== event: \n: ', params)
    
    // ddb.put(params, function(err, data) {
    //     if (err) {
    //         context.done('error','putting item into dynamodb failed: '+err);
    //     } else {
    //         let response = {
    //                 statusCode: 200,
    //                 headers: {
    //                     "x-custom-header" : "hey what's up"
    //                 },
    //                 body: JSON.stringify(
    //                     {"success": "get it back", 
    //                      "method": event.httpMethod,
    //                      "event": event
    //                 })
    //             };
    //         context.succeed(response);
    //     }
    // })
}