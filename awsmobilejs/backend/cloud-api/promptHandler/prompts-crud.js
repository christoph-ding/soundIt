const AWS = require('aws-sdk')
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'})

exports.getPrompt = function(event, context, callback) {
    console.log('=========== fetching prompts ===========')

    let params = {
        TableName : "soundit-mobilehub-1837399535-Prompt",
        KeyConditionExpression: "",
        ExpressionAttributeValues: {}
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