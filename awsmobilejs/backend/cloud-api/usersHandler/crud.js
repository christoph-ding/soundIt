const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});
const uuid = require('uuid')

exports.makeNewUser = function(event, context, callback) {
    
    console.log('============== CRUD ===============')
    console.log('making a new user:')
    console.log('event:')
    console.log(event)
    
    var params = {
        Item: {
            "Partition": uuid.v1(),
            "Sort": uuid.v1(),
            "Name": "Test2",
        },
        TableName : process.env.TABLE_NAME
    }
    
    console.log('params:')
    console.log(params)
    
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