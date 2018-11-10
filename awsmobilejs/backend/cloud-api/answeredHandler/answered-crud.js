const AWS = require('aws-sdk')
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'})

exports.getAnsweredStatus = function(event, context, callback) {
    console.log('=========== getting answered  ===========')
    const userID = event.headers.userID
    const groupID = event.headers.groupID

    let params = {
        TableName : "soundit-mobilehub-1837399535-GroupsUsers",
        KeyConditionExpression: "IndividualID = :user and EntityID = :group",
        ExpressionAttributeValues: {
            ':user': userID,
            ':group': groupID
        }
    }
    
    ddb.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log(data)
            const answered = data.Items[0]['Answered']
    
            let response = {
                statusCode: 200,
                body: JSON.stringify({
                    "success": "you were successful",
                    "answered": answered
                    })
            }
            context.succeed(response)
        }
    })
}

exports.updateAnsweredStatus = function(event, context, callback) {
    console.log('=========== making new user ===========')
    const parsedBody = JSON.parse(event.body)
    
    const params = {
        Item: {
        },
        TableName: "soundit-mobilehub-1837399535-GroupsUsers"
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

// function async(record, next) {
//     var params = {
//         TableName: table,
//         Key: {
//             "id": record.dynamodb.Keys.id
//         },
//         UpdateExpression: "SET done = :done",
//         ExpressionAttributeValues: {
//             ":done": { "S": "t" }
//         },
//         ReturnValues: "UPDATED_NEW"
//     };

//     console.log("params: %j", params);

//     docClient.updateItem(params, function(err, data) {
//         if (err) console.log("Unable to update item. Error: ", JSON.stringify(err, null, 2));
//         else console.log("Updated item succeeded: ", JSON.stringify(data, null, 2));
//         next() // modify for err handling
//     });