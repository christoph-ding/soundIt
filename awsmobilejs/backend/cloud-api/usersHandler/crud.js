exports.makeNewUser = function() {
    
    console.log('=====================================')
    console.log('making a new user')
    
    var params = {
        Item: {
            "Partition": uuid.v1(),
            "Sort": "Test"
        },
        TableName : process.env.TABLE_NAME
    }
}