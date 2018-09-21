const AWS = require('aws-sdk')
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'})
const uuidv1 = require('uuid/v1')

exports.gettingMessages = function(event, context, callback) {
    console.log('=========== fetching messages ===========')

    let testEntity = 'Second Group'

    let params = {
        TableName : "soundit-mobilehub-1837399535-Messages",
        KeyConditionExpression: "EntityID = :entity",
        ExpressionAttributeValues: {
            ':entity': testEntity
        }
    }

    ddb.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            let response = {
                statusCode: 200,
                body: JSON.stringify({
                    "success": "you were successful",
                    "data": data
                    })
            }
            context.succeed(response)
        }
    })
}

exports.makeMessage = function(event, context, callback) {
    console.log('=========== making message ===========')
    const parsedBody = JSON.parse(event.body)
    console.log(parsedBody)
 
    const params = {
        Item: {
            EntityID: parsedBody.EntityID,
            IndividualID: parsedBody.IndividualID,
            Time: new Date(Date.now()).toString(),
            MessageID: parsedBody.MessageID
        },
        TableName: "soundit-mobilehub-1837399535-Messages"
    }
  
    ddb.put(params, function(err, data) {
        if (err) {
            context.done('error','putting item into dynamodb failed: '+err)
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