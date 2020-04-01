let AWS = require('aws-sdk');
const sqs = new AWS.SQS();

exports.handler = async (event) => {

    try {
        let data = await sqs.sendMessage({
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/indunil-message-queue`,
            MessageBody: "test sample message test",
            DelaySeconds: 0,
            MessageAttributes: {
                '1': {
                    'DataType': "String",
                    'StringValue': "test"
                }
            }
        }).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
        // error handling goes here
    };



    try {
        let data = await sqs.receiveMessage({
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/indunil-message-queue`,
            MaxNumberOfMessages: 1,
            VisibilityTimeout: 30,
            WaitTimeSeconds: 0,
            AttributeNames: ['All']
        }).promise();
        console.log(data);
        handle = data.Messages[0].ReceiptHandle;
        console.log(handle);
        try {
            let data = await sqs.deleteMessage({
                QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/indunil-message-queue`,
                ReceiptHandle: handle123
            }).promise();
            console.log(data);
        } catch (err) {
            console.log(err)
            // error handling goes here
        };

    } catch (err) {
        console.log(err);
        // error handling goes here
    };




    return { "message": "Successfully executed 1234" };
};