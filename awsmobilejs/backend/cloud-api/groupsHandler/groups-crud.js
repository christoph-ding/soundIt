const AWS = require('aws-sdk')
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'})
const uuid = require('uuid')

exports.getUserGroups = function(event, context, callback) {
    console.log('=========== getting all groups ===========')
    
    const userID = event.headers.userid

    let params = {
        TableName : "soundit-mobilehub-1837399535-GroupsUsers",
        IndexName: "Groups-Belong-To-User",
        KeyConditionExpression: "IndividualID = :user",
        ExpressionAttributeValues: {
            ':user': userID
        }
    }
    
    ddb.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            // there will be an extra row returned for the user itself, 
            // filter this out
            const groups = data.Items.filter((row) => {
                return !(row.EntityID === 'user')
            })

            let response = {
                statusCode: 200,
                body: JSON.stringify({
                    "success": "you were successful",
                    "data": groups
                    })
            }
            context.succeed(response)
        }
    })
}
    
exports.makeNewGroup = function(event, context, callback) {
    console.log('=========== making new group ===========')
    const parsedBody = JSON.parse(event.body)
  
    // extract the users
    // extract the group name
    // create params object programatically 
    let members = parsedBody.members
    let display = parsedBody.display
    
    // does the current grooup already exist?
    let groupExistsParams = {
        
    }
    
    let memberAsPutRequest = members.map((member) => {
        return {
            PutRequest: { 
                Item: {
                    'EntityID': display,
                    'IndividualID': member,
                    'Answered': false
                }
            }
        }
    })

    let params = {
        "RequestItems": {
                "soundit-mobilehub-1837399535-GroupsUsers": memberAsPutRequest
        }
    }
    
    ddb.batchWrite(params, function(err, data) {
        if (err) {
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