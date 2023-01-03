// index.js
 
const serverless = require('serverless-http');
const express = require('express')
const simpleResponse = require('./routes/simpleResponse')
const largeResponse = require('./routes/largeResponse')
const app = express()
 
console.log('i was hit')

app.use('/api/simple',simpleResponse)
app.use('/api/large',largeResponse)


app.get('/hw', function (req, res) {
  res.send('Hello World!')
})
 
module.exports.lambdaHandler = serverless(app);
