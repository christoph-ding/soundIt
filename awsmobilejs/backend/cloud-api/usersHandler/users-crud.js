const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});
const uuid = require('uuid')

exports.makeNewUser = function(event, context, callback) {
    console.log('=========== making new user ===========')
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
            context.done('error','putting item into dynamodb failed: '+err)
        } else {
            console.log('=========== successfully made new user ===========')
            let response = {
                statusCode: 200,
                body: JSON.stringify({
                    "success": "you were successful"
                })
            }
            context.succeed(response)
        }
    })
}

exports.getUsers = function(event, context, callback) {
    console.log('=========== getting all users ===========')
    
    const params = {
        TableName: "soundit-mobilehub-1837399535-GroupsUsers",
        KeyConditionExpression: "EntityID = :partition",
        ExpressionAttributeValues: {
            ':partition': 'user'
        }
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
    })
}