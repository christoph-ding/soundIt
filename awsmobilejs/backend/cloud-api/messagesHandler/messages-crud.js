const AWS = require('aws-sdk')
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'})

exports.gettingMessages = function(event, context, callback) {
    console.log('=========== fetching messages ===========')
    // const parsedBody = JSON.parse(event.body)
    console.log(event.body)
    
    const params = {
        TableName: "",
        KeyConditionExpression: "",
        ExpressionAttributeValues: {}
    }
    
    ddb.query(params, function(err, data){
        if (err) {
            console.log(err)
            context.done('error','putting item into dynamodb failed: '+err)
        } else {
            let response = {
                statusCode: 200,
                body: JSON.stringify({
                    "success": "you were successful", 
                    "users": data.Items
                })
            }
            context.succeed(response)
        }
    });
    
}

exports.makeMessage = function(event, context, callback) {
    console.log('=========== making message ===========')
    // const parsedBody = JSON.parse(event.body)
    console.log(event.body)
    
    let params = {
        Item: {
            // stuff
        },
        TableName: process.env.TABLE_NAME
    }
    
    ddb.put(params, function(err, data) {
        if (err) {
            context.done('error','putting item into dynamodb failed: '+err);
        } else {
            console.log('=========== successfully made new message ===========')
            let response = {
                    statusCode: 200,
                    body: JSON.stringify({
                         "success": "you were successful"
                    })
            }
            context.succeed(response)
        }  
    })
};