const config = require("../config/auth.config");
const hasuraAPIURL = config.HASURAGraphQLAPIURL;

exports.graphQL = (req, res) => {

    let graphQuery = req.body._query;
    let graphVariables = req.body._variables;

    if (!graphQuery || graphQuery === "") {
      return res.status(401).send({
        message: "GraphQL Query does not exist",
      });
    }
  
    if (!hasuraAPIURL || hasuraAPIURL === "") {
      return res.status(401).send({
        message: "hasuraAPIURL does not exist",
      });
    }

    postDataToHasura(hasuraAPIURL, graphQuery).then((data) => {
      res.header('Content-type', 'application/json').status(200).send(JSON.stringify(data));
    });
  };


async function postDataToHasura(url = '', graphQuery = {},graphVariables) {
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': config.HASURAToken,
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify({query: graphQuery,variables:graphVariables}) 
    });
    return response.json();
  }