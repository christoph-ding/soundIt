const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});
const uuid = require('uuid')

exports.makeNewGroup = function(event, context, callback) {
    const parsedBody = JSON.parse(event.body)
    
    let TABLE_NAME = process.env.TABLE_NAME
  
    // extract the users
    // extract the group name
    // create params object programatically 
    let members = parsedBody.members
    let display = parsedBody.display
    
    let memberAsPutRequest = members.map((member) => {
        return {
            PutRequest: { 
                Item: {
                    'EntityID': 'First Real Group',
                    'IndividualID': member
                }
            }
        }
    })

    let params = {
        "RequestItems": {
                "soundit-mobilehub-1837399535-GroupsUsers": memberAsPutRequest
        }
    }

    console.log('=========== params ============')
    console.log(params)

   ddb.batchWrite(params, function(err, data) {
        if (err) {
            console.log(err)
            context.done('error','putting item into dynamodb failed: '+err);
        } else {
            let response = {
                statusCode: 200,
                body: JSON.stringify(
                    {"success": "you were successful", 
                     "method": event.httpMethod,
                     "event": event
                    }
                )}
            context.succeed(response);
        }
    });
};