const express = require('express');
const path = require('path');
const Mailchimp = require('mailchimp-api-v3');
// stops from accicidently post passwaord, key or other security stuff in the github; save it in .env & ignore it later
require('dotenv').config({path: __dirname + "/variable.env"});

//get the variables from the api (in variable.env)
const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID ;
console.log(list_id);
// start the express server and create a new mailchimp obj(pass in our api key)
const app = express();
const mailchimp = new Mailchimp(mc_api_key);


app.use(express.static(path.join(__dirname, '/client/build')));

// setup the api import; API endpoint -> this's going to be called from the front-end to make this request for us
//so we make the request to our server/API, it will then make the request for us to mailchimp & then back it back down the chain & they give us the data.
// this's for security

app.get("/api/memberAdd", (req, res) => {
    mailchimp
      .post(`/lists/${list_id}/members/`, {
        email_address: req.query.email,
        status: "subscribed"
      })
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.send(err);
      })
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// setup the port, which is where is the server will be listening or request to come in
const port = process.env.PORT || 9001
app.listen(port);

console.log(`Express listening on port ${port}`);
