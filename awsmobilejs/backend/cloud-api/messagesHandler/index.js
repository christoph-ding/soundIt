'use strict'
const messagesCRUD = require('messages-crud.js')
const AWS = require('aws-sdk');
const s3 = new AWS.S3()

exports.handler = function(event, context, callback) {
    if (event.httpMethod === 'POST') {
        messagesCRUD.makeMessage(event, context, callback)
    } else if (event.httpMethod === 'GET') {
        messagesCRUD.gettingMessages(event, context, callback)
    }
}

// console.log('================ triggered ======================')
// console.log(event)
// // console.log('S3: ')
// // console.log(event.Records[0].s3)

// if (event.hasOwnProperty('Records')) {
//     console.log('triggered by S3') 
//     console.log(event.Records[0].s3)
//     console.log(event.Records[0].responseElements)
//     console.log(event.Records[0].requestParameters)
   
    
//     var bucket = event.Records[0].s3.bucket.name;
//     var key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
//     var params = {
//         Bucket: bucket,
//         Key: 'test.txt'
//     };
    
//     console.log('=============== params =================')    
//     console.log(params)
    
//     s3.headObject(params, function(err, data) {
//         if (err) {
//             var message = "Error getting object " + key + " from bucket " + bucket +
//                 ". Make sure they exist and your bucket is in the same region as this function.";
//             callback(message);
//         } else {

//         //When we created this metadata in iOS, we used the prefix 'x-amz-meta-'
//         //This has been stripped as that prefix was only for the HTTP headers
//         var uploadParametersEncoded = data.Metadata['uploadParameters'];

//         var uploadParameters = JSON.parse(uploadParametersEncoded);

//         console.log('============= meta ==============')
//         console.log(uploadParametersEncoded)
//         }
//     });
// } else {
//   console.log('not triggered by S3')
// }