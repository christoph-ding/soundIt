const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});
const uuid = require('uuid')

exports.makeNewGroup = function(event, context, callback) {
    
    console.log('event in crud: ', event)
    // const parsedBody = JSON.parse(event.body)
    
    console.log('=========== GROUP ============')
    console.log('event: ', event)
    
    console.log('=========== Parsed ============')
    // console.log('parsedBody: ', parsedBody)
    
    console.log('=========== Process Env ============')
    // console.log(process.env)
    
    let TABLE_NAME = process.env.TABLE_NAME
  
    let params = {
        "RequestItems": {
            "soundit-mobilehub-1837399535-GroupsUsers": [
                {
                    PutRequest: {
                        Item: { EntityID: "First Batch Write",
                                IndividualID: "First Batch Write"
                        }
                    }
                }   
            ]
        }
    }
    
    ddb.batchWrite(params, function(err, data) {
        if (err) {
            console.log('========================')
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


    // let params = {
    //     RequestItems: {
    //         TABLE_NAME: [
    //             {
    //                 "PutRequest": {
    //                     "Item": { 
    //                         EntityID: "group1",
    //                         IndividualID: '123',
    //                         Answered: false
    //                         // Display: parsedBody.display
    //                     }
    //                 }
    //             },
    //             {
    //                 "PutRequest": {
    //                     "Item": {
    //                         EntityID: "group1",
    //                         IndividualID: '456',
    //                         Answered: false
    //                         // Display: parsedBody.display
    //                     }
    //                 }
    //             }
    //         ]
    //     }
    // }
    
    // ddb.batchWrite(params, function(err, data) {
    //     if (err) {
    //         console.log('========================')
    //         console.log(err)
    //         context.done('error','putting item into dynamodb failed: '+err);
    //     } else {
    //         let response = {
    //             statusCode: 200,
    //             body: JSON.stringify(
    //                 {"success": "you were successful", 
    //                  "method": event.httpMethod,
    //                  "event": event
    //                 }
    //             )}
    //         context.succeed(response);
    //     }
    // });

// const params = {
    //     Item: {
    //         EntityID: "user",
    //         IndividualID: "Getting Batch To Work",
    //         Answered: false,
    //         Display: "Getting Batch To Work"
    //     },
    //     TableName: TABLE_NAME
    // }
    
    // ddb.put(params, function(err, data) {
    //     if (err) {
    //         context.done('error','putting item into dynamodb failed: '+err);
    //     } else {
    //         let response = {
    //                 statusCode: 200,
    //                 body: JSON.stringify(
    //                     {"success": "you were successful", 
    //                      "method": event.httpMethod,
    //                      "event": event
    //                 })
    //             };
    //         context.succeed(response);
    //     }
    // })