let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        let data = await s3.listObjects({
            Bucket: "as2-test-lahiru",
            MaxKeys: 10
        }).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
        // error handling goes here
    };

    try {
        let data1 = await s3.putObject({
            Bucket: "hiru.test01",
            Key: "sample.txt",
            Body: "test",
            Metadata: {}
        }).promise();
        console.log(data1);

    } catch (err) {
        console.log(err);
        // error handling goes here
    };

    try {
        let data = await s3.getObject({
            Bucket: "hiru.test01",
            Key: "sample"
        }).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};