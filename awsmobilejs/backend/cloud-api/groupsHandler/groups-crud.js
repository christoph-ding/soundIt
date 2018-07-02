const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});
const uuid = require('uuid')

exports.makeNewGroup = function(event, context, callback) {
    const parsedBody = JSON.parse(event.body)
    
    console.log('=========== GROUP ============')
    console.log('event: ', event)
    
    console.log('=========== Oarsed ============')
    console.log('parsedBody: ', parsedBody)
    
    let response = {
        statusCode: 200,
        body: JSON.stringify(
            {"success": "you were successful", 
             "method": event.httpMethod,
             "event": event
        })
    };
    context.succeed(response);
}