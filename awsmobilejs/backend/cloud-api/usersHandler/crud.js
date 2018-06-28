const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});
const uuid = require('uuid')

exports.makeNewUser = function(event, context, callback) {
    
    console.log('=====================================')
    console.log('making a new user')
    
    var params = {
        Item: {
            "Partition": uuid.v1(),
            "Sort": "Test"
        },
        TableName : process.env.TABLE_NAME
    }
    
    ddb.put(params, function(err, data) {
        if (err) {
            context.done('error','putting item into dynamodb failed: '+err);
        } else {
            let response = {
                    statusCode: 200,
                    headers: {
                        "x-custom-header" : "hey what's up"
                    },
                    body: JSON.stringify({"success": "get it back", "method": event.httpMethod})
                };
            context.succeed(response);
        }
    })
}