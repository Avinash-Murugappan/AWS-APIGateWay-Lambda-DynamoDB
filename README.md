# SWE645-HW4-Spring2020
The application architecture: Angular, AWS Lambda, Amazon API Gateway, Amazon S3, and Amazon DynamoDB. Angular application (compiled version) is deployed in our S3 bucket using S3’s static Web site hosting capability. The angular application sends and receives data to/from the backend using Lambda and API Gateway. DynamoDB provides a persistence layer where data can be stored by the API's Lambda function. 