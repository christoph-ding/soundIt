const AWS = require('aws-sdk')
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'})

exports.getAnsweredStatus = function(event, context, callback) {
    const userID = event.headers.userid
    const groupID = event.headers.groupid

    console.log('user: ', userID)
    console.log('group: ', groupID)

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
            const answered = data.Items[0]['Answered']
            
            console.log('==================')
            console.log(answered)
            
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
    console.log('=========== updating answered ===========')
    const parsedBody = JSON.parse(event.body)

    const userID = parsedBody.userID
    const groupID = parsedBody.groupID

    const params = {
        Key: {
            "IndividualID": userID,
            "EntityID": groupID
        },
        UpdateExpression: "set Answered = :a",
        ExpressionAttributeValues: {
            ":a": true
        },
        TableName: "soundit-mobilehub-1837399535-GroupsUsers"
    }
    
    ddb.update(params, function(err, data) {
        if (err) {
            console.log('======')
            console.log(err)
            context.done('error','putting item into dynamodb failed: '+err)
        } else {
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