const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});
const uuid = require('uuid')

exports.makeNewUser = function(event, context, callback) {
    const parsedBody = JSON.parse(event.body)
    const params = {
        Item: {
            EntityID: "user",
            IndividualID: parsedBody.userID,
            Answered: false,
            Display: parsedBody.display
        },
        TableName: process.env.TABLE_NAME
    }

    ddb.put(params, function(err, data) {
        if (err) {
            context.done('error','putting item into dynamodb failed: '+err);
        } else {
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
    })
}

exports.getUsers = function(event, context, callback) {
    const params = {
        KeyConditionExpression: "EntityID = : user",
        TableName: process.env.TABLE_NAME
    }
    
    ddb.scan(params, function(err, data){
       if (err) {
            context.done('error','putting item into dynamodb failed: '+err);
        } else {
        
        console.log('========= data ===========')
        console.log(data)
        
        console.log('========== items =========')
        console.log(data.Items)
        
        let response = {
                statusCode: 200,
                body: JSON.stringify(
                    {"success": "you were successful", 
                     "method": event.httpMethod,
                     "event": event,
                     "users": data.Items
                })
        };
        context.succeed(response);
        }
    });
}