//SWE 645 Assignment4, Team members: Avinash[G01163980], Rashi[G01225299], Rushil[G01203932], Mithilaesh[G01206238].
"use strict";
const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

    let responseBody = "";
  let statusCode = 0;

  const {id, city, comments, dateOfSurvey, email, firstname, lastname, likedAboutCampus, likelyhoodOfRecommendation, originOfInterest, phone, raffle, state, streetAddress, zip } = JSON.parse(event.body);

  const params = {
      TableName: "Users",
      Item: {
          "id":context.awsRequestId,
            city: city,
            comments: comments,
            dateOfSurvey: dateOfSurvey,
            email:  email,
            firstname:  firstname,
            lastname: lastname,
            likedAboutCampus: likedAboutCampus,
            likelyhoodOfRecommendation: likelyhoodOfRecommendation,
            originOfInterest: originOfInterest,
            phone:  phone,
            raffle: raffle,
            state:  state,
            streetAddress:  streetAddress,
            zip:  zip
  }
};
 try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch(err) {
    responseBody = `Unable to put product: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": '*',
      'Content-Type': 'application/json'
    },
    body: responseBody
  };
  return response;
};
