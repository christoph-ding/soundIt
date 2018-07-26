const AWS = require('aws-sdk')
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'})

exports.gettingMessages = function(event, context, callback) {
    console.log('=========== fetching messages ===========')
    console.log(event)

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
            console.log('================= error =================')
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log('============= data ===============')
            console.log(data)
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
    // const parsedBody = JSON.parse(event.body)
    // console.log(event.body)
  
    let response = {
        statusCode: 200,
        body: JSON.stringify({
             "success": "you were successful"
        })
    }
    context.succeed(response)
  
    // // hard coded ids
    // let hardCodedEntity = 'First Real Group'
    // let hardCodedIndividual = '+01234567891'
    
    // let params = {
    //     Item: {
    //         EntityID: hardCodedEntity,
    //         IndividualID: hardCodedEntity,
    //         // MessageID: ,
    //         // Time: 
    //     },
    //     TableName: process.env.TABLE_NAME
    // }
    
    // ddb.put(params, function(err, data) {
    //     if (err) {
    //         context.done('error','putting item into dynamodb failed: '+err);
    //     } else {
    //         console.log('=========== successfully made new message ===========')
    //         let response = {
    //             statusCode: 200,
    //             body: JSON.stringify({
    //                  "success": "you were successful"
    //             })
    //         }
    //         context.succeed(response)
    //     }  
    // })
};